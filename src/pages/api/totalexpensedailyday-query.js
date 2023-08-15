import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const totalExpenseDailyDayQuery = async (req, res) => {
  const API_EXPENSEDAILY = `${process.env.NEXT_PUBLIC_API_ADDRESS}/expenses/daily`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(
          `${API_EXPENSEDAILY}?Date=${req.params.date}`
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

export default totalExpenseDailyDayQuery;
