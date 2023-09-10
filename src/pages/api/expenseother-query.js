import axios from "axios";
import qs from "qs";

const expenseOtherQuery = async (req, res) => {
  const API_EXPENSEOTHER = `${process.env.NEXT_PUBLIC_API_ADDRESS}/Expenses/SubOther`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(`${API_EXPENSEOTHER}`);
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

export default expenseOtherQuery;
