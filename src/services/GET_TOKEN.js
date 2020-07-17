const GetTokenAPI = () => (
  fetch('https://opentdb.com/api_token.php?command=request')
    .then((data) => data.json())
    .then((data) => Promise.resolve(data.token))
);

export default GetTokenAPI;
