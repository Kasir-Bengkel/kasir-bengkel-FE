import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const incomeDayQuery = async (req, res) => {
  const API_INCOMEDAY = `${process.env.NEXT_PUBLIC_API_ADDRESS}/salesorder/IncomePerDay`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(
          `${API_INCOMEDAY}?Date=${req.params.date}`
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

export default incomeDayQuery;
