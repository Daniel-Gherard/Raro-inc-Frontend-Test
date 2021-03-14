import axios from 'axios';

export const getNews = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      if (commit) commit('news', response.data)
      resolve()
    })
    .catch((error) => {
      reject(error)
    })
  })
}
