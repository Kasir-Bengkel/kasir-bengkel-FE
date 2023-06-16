import axios from "axios";
import qs from "qs";

const expensesQuery = async (req, res) => {
  const API_EXPENSE = `${process.env.NEXT_PUBLIC_API_ADDRESS}/expenses`;
  switch (req.method) {
    case "POST":
      try {
        const result = await axios.post(
          API_EXPENSE,
          qs.stringify(req.body),
          req.headers
        );
        return result;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          console.log(e);
          return {
            messages: e.message,
          };
        }
      }
    case "GET":
      try {
        const result = await axios.get(
          `${API_EXPENSE}?Types=${req.params.type}&SortLabel=Data&SortOrder=2`
        );
        return result;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return {
            messages: e.message,
          };
        }
      }
    case "PUT":
      try {
        const result = await axios.put(
          `${API_EXPENSE}/${req.params.id}`,
          qs.stringify(req.body),
          req.headers
        );
        console.log(result);
        return result;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return {
            messages: e.message,
          };
        }
      }
    case "DELETE":
      try {
        const result = await axios.delete(`${API_EXPENSE}/${req.params.id}`);
        return result;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return {
            messages: e.message,
          };
        }
      }
  }
};

export default expensesQuery;
