const getTriviaApi = () =>
  fetch('https://opentdb.com/api.php?amount=5&difficulty=easy')
    .then((data) => data.json())
    .then((data) => console.log(data.results));

export default getTriviaApi;
