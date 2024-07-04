const baseUrl = `${process.env.REACT_APP_SERVERIP}/balance`;

export const getBalance = async (token) => {
  const apiUrl = baseUrl;
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: { "x-token": token },
  });
  return response;
};
