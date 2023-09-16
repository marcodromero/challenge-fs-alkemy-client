const baseUrl = `${process.env.REACT_APP_SERVERIP}/balance`;
let token = null;

export const setTokenBalance = (newToken) => {
  token = newToken;
};

export const getBalance = async () => {
  const apiUrl = baseUrl;
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: { "x-token": token },
  });
  return await response.json();
};
