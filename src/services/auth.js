const baseUrl = `${process.env.REACT_APP_SERVERIP}/login`;

export const loginRequest = async ({email, password}) => {
  const response = await fetch(`${baseUrl}/signin`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password
    }),
    headers: { "Content-Type": "application/json"}
  });
  return response;
};

export const validateToken = async(token)=>{
  const response = await fetch(`${baseUrl}/validate-token`, {
    method: "POST",
    body: JSON.stringify({
      token
    }),
    headers: { "Content-Type": "application/json"}
  });
  return response;
};

export const registerUser = async({email, password})=>{
  const response = await fetch(`${baseUrl}/register`,{
      method: "POST",
      body: JSON.stringify({
      email,
      password
    }),
    headers: { "Content-Type": "application/json"}
  })
   return response;
}