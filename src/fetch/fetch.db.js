/*jshint esversion: 6 */

export const getCardsFromDB = () => {
  return fetch('/api/cards', {
    credentials: 'include',
  })
  .then( res => res.json())
  .catch(err => console.log(err));
};

export const addCardtoDB = (card) => {
  card.created_by = localStorage.username;
  return fetch("/api/cards/",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(card)
    })
    .then((res) => (res.json()))
    .catch(err => console.log(err));
};

export const fetchDel = (cardToDelete) => {
  return fetch(`/api/cards/${cardToDelete.id}`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
      credentials: 'include',
    })
    .then((res) => (res.json()))
    .catch(err => console.log(err));
};

export const fetchMove = (cardToUpdate) => {
  return fetch(`/api/cards/${cardToUpdate.id}`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify({"status":cardToUpdate.status})
    })
    .then((res) => (res.json()))
    .catch(err => console.log(err));
};

export const fetchSignout = () => {
  return fetch('/api/logout',{
      credentials: 'include',
    })
    .then(localStorage.clear())
    .catch(err => console.log(err));
};

export const fetchSignin = (body) => {
  console.log(body);
  return fetch("/api/login", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(body)
  })
  .then((res) => (res.json()))
  .then( data => {
    localStorage.setItem('logged', true);
    localStorage.setItem('username', data.username);
    localStorage.setItem('role', data.role);
  })
  .catch(err => console.log(err));
};

export const fetchSignup = (body) => {
  return fetch("/api/users",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(body)
    })
    .then( data => {
      data.json()
    })
    .catch(err => console.log(err));
};
