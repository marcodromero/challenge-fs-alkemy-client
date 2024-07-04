const baseUrl = `${process.env.REACT_APP_SERVERIP}/operations`;

export const getOperations = async ({categoryId = undefined, token}) => {
  if (categoryId) {
    const response = await fetch(`${baseUrl}?categoryId=${categoryId}`, {
      method: "GET",
      headers: { "x-token": token },
    });
    return response;
  }
  const response = await fetch(baseUrl, {
    method: "GET",
    headers: { "x-token": token },
  });
  return response;
};

export const getOperation = async ({ operationId , token}) => {
  const response = await fetch(baseUrl, {
    method: "GET",
    headers: { "x-token": token },
  });
  return response;
};

export const createOperation = async ({operationData, token}) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(operationData),
    headers: { "Content-Type": "application/json", "x-token": token },
  });
  return response;
};

export const updateOperation = async ({operationData, token}) => {
  const {formattedDate:date, date:oldDate, ...data}= operationData;
  const response = await fetch(`${baseUrl}/${operationData.id}`, {
    method: "PUT",
    body: JSON.stringify({...data, date}),
    headers: { "Content-Type": "application/json", "x-token": token },
  });
  return response;
};

export const deleteOperation = async ({id, token}) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: { "x-token": token },
  });
  return response;
};
