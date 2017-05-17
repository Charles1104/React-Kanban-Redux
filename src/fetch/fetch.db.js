export const getCardsFromDB = () => {
  return fetch('/api/cards', {
    credentials: 'include',
  })
  .then( res => res.json())
  .catch(console.log);
};

export const addCardtoDB = (card) => {
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
    .catch(console.log);
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
    .catch(console.log);
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
    .catch(console.log);
};

export const fetchSignout = () => {
  return fetch('/api/logout',{
      credentials: 'include',
    })
    .then(localStorage.clear())
    .catch(console.log);
};
