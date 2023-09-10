import axios from "axios";
import qs from "qs";

const expenseDayQuery = async (req, res) => {
  const API_EXPENSEDAY = `${process.env.NEXT_PUBLIC_API_ADDRESS}/Expenses/SubDaily`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(`${API_EXPENSEDAY}`);
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

export default expenseDayQuery;
