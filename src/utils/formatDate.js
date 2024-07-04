export const formatDateToYMD = (date) => {
  const day = date.substring(0, 2);
  const month = date.substring(3, 5);
  const year = date.substring(6, 10);
  return `${year}-${month}-${day}`;
};

export const formatDateToDMY = (date) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);
 
  return `${day}-${month}-${year}`;
};
