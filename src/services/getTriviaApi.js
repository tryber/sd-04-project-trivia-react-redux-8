const getTriviaApi = (token) => {
  console.log(token)
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((data) => data.json())
    .then((data) => Promise.resolve(data))

}

export default getTriviaApi;
