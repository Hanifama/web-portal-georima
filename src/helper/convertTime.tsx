export const timeConvert = (timestamp: number): any => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const formattedDate = `${day}-${month}-${year} ${hour}:${minute}:${second}`;
  return formattedDate;
};
