import { monthNames } from "@/constant/MonthName";

export const formatDateTime = (dateValue) => {
  const date = new Date(dateValue);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const outputDate = `${day} ${monthNames[monthIndex]} ${year} ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  // example return value >> 25 July 2023 07:00
  return outputDate;
};
