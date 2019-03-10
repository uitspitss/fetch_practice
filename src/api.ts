export const fetchApi = (url: string) =>
  fetch(url, {
      mode: 'cors',
    })
      .then(res => res.json()
      )
      .catch(err => ({ err }));
