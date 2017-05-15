// const cardsFromFakeDB = [{
//     _id : 1,
//     name : 'Talion: The Revenant from DB',
//     priority : 'Michael A. Stackpole'
//   },
//   {
//     _id : 2,
//     name : 'Ready Player One from DB',
//     priority : 'Ernest Cline'
//   },
//   {
//     _id : 3,
//     name : 'Enders Game from DB',
//     priority : 'Orson Scott Card'
//   }
// ];

export const getCardsFromFakeXHR = () => {
  return fetch('/api/cards').then( res => res.json());
};
// export const getCardsFromFakeXHR = () => new Promise((resolve, reject) => {
//   setTimeout(() => resolve(cardsFromFakeDB), 500);
// });

// export const addCardToFakeXHR = (card) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     card._id = Math.random();
//     cardsFromFakeDB.push(card);
//     resolve(cardsFromFakeDB);
//   }, 500);
// });