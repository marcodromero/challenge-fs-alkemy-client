const baseUrl = `${process.env.REACT_APP_SERVERIP}/operations`;
let token = null;

export const setTokenOperations = (newToken) => {
  token = newToken;
};

export const getOperations = async (categoryId = undefined) => {
  if (categoryId) {
    const response = await fetch(`${baseUrl}?categoryId=${categoryId}`, {
      method: "GET",
      headers: { "x-token": token },
    });
    return await response.json();
  }
  const response = await fetch(baseUrl, {
    method: "GET",
    headers: { "x-token": token },
  });
  return await response.json();
};

export const getOperation = async ({ operationId }) => {
  const response = await fetch(baseUrl, {
    method: "GET",
    headers: { "x-token": token },
  });
  return response.json();
};

export const createOperation = async (operationData) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(operationData),
    headers: { "Content-Type": "application/json", "x-token": token },
  });
  console.log(response);
  return response;
};

export const updateOperation = async (updatedOperationData) => {
  console.log("datos de update en servicio", updatedOperationData);
  const response = await fetch(`${baseUrl}/${updatedOperationData.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedOperationData),
    headers: { "Content-Type": "application/json", "x-token": token },
  });
  return response;
};

export const deleteOperation = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: { "x-token": token },
  });
  return response;
};
