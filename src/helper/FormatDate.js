import { monthNames } from "@/constant/MonthName";

export const formatDate = (dateValue) => {
  const date = new Date(dateValue);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const outputDate = `${day} ${monthNames[monthIndex]} ${year}`;
  return outputDate;
};
