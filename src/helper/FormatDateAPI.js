export const FormatDateAPI = (inputDate) => {
  const [year, month, day] = inputDate.split("-");

  const formattedDate = `${month}-${day}-${year}`;

  // from YYYY-MM-DD into MM-DD-YYYY
  return formattedDate;
};
