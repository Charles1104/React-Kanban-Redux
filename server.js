/*jshint esversion:6*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('./models');
const fs = require('fs');

const methodOverride = require('method-override');

app.use( bodyParser.json() );

//passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//session
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

//password hashing
const saltRounds = 10;
const bcrypt = require('bcrypt');

//LOGIN & PASSWORD

// setup sessions
app.use(session({
  store: new RedisStore(),
  secret: 'keyboard_cat',
  resave: false,
  saveUninitialized: true,
}));

// setup passport
app.use(passport.initialize());
app.use(passport.session());

// passport local Strategy
passport.use(new LocalStrategy (
  function(username, password, done) {
    console.log('runs before serializing');
    db.User.findOne({
      where: {
        username: username
      }
    })
    .then ( user => {
      if (user === null) {
        console.log('user failed');
        return done(null, false, {message: 'bad username'});
      }
      else {
        bcrypt.compare(password, user.password)
        .then(res => {
          if (res) { return done(null, user); }
          else {
            return done(null, false, {message: 'bad password'});
          }
        });
      }
    })
    .catch(err => {
      console.log('error: ', err);
    });
  }
));

passport.serializeUser(function(user, done) {
  console.log('serializing');
// ^ ---------- given from authentication strategy
  // building the object to serialize to save
  return done(null, {
    username: user.username
  });
});

passport.deserializeUser(function(user, done) {
  console.log('deserializing');
  // ^ ---------- given from serializeUser
  db.User.findOne({
    where: {
      username: user.username
    }
  }).then(user => {
    console.log("hi");
    return done(null, user); // <------- inserts into the request object
  });
});

app.get('/api/logout', function (req, res){
  console.log(req.isAuthenticated());
  req.logout();
  console.log(req.isAuthenticated());
  res.send({success : true});
});

app.use(express.static('./public') );

app.use('/api', require('./api'));
// app.use('/register', require('./register'));

app.get('/*', (req, res) => {
  const rs = fs.createReadStream('./public/index.html');
  rs.on('open', () => {
    rs.pipe(res);
  });
  rs.on('error', (err) => {
    res.end(err);
  });
});


// db.sequelize.sync({force:true});

app.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
});