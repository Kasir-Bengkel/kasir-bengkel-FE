import axios from "axios";
import qs from "qs";

const expensesDailyProfit = async (req, res) => {
  const API_EXPENSESDAILY = `${process.env.NEXT_PUBLIC_API_ADDRESS}`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(
          `${API_EXPENSESDAILY}/salesorder/profit?Date=${req.params.date}`
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

export default expensesDailyProfit;
