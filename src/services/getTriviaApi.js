const getTriviaApi = () => {
  return fetch('https://opentdb.com/api.php?amount=5&difficulty=easy')
    .then((data) => data.json())
    .then((data) => Promise.resolve(data));
};

export default getTriviaApi;
