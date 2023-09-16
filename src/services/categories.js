const baseUrl = `${process.env.REACT_APP_SERVERIP}/categories`;

export const getCategories = async () => {
  const apiUrl = baseUrl;
  const response = await fetch(apiUrl, {
    method: "GET",
  });
  return response;
};
