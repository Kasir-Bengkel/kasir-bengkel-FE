export const FormatDateDB = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const offset = -date.getTimezoneOffset() / 60;

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:00 ${
    offset < 0 ? "" : "+"
  }${offset}:00`;

  // example return value >> 25/07/2023 07:00:00 +7:00
  return formattedDate;
};
