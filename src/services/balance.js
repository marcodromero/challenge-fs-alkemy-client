const baseUrl = `${process.env.REACT_APP_SERVERIP}/balance`;
let token = null;

const setToken = (newToken) => {
  token = newToken;
};

const getBalance = async () => {
  const apiUrl = baseUrl;
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: { "x-token": token },
  });
  return await response.json();
};

module.exports = {
  getBalance,
  setTokenBalance: setToken,
};
