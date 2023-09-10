import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const totalExpenseOtherDayQuery = async (req, res) => {
  const API_EXPENSEOTHER = `${process.env.NEXT_PUBLIC_API_ADDRESS}/expenses/other`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(
          `${API_EXPENSEOTHER}?Date=${req.params.date}`
        );
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

export default totalExpenseOtherDayQuery;
