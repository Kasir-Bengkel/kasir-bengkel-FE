import axios from "axios";
import qs from "qs";

const grandProfitQuery = async (req, res) => {
  const API_GRANDPROFIT = `${process.env.NEXT_PUBLIC_API_ADDRESS}/SalesOrder/TotalProfit`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(`${API_GRANDPROFIT}`);
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

export default grandProfitQuery;
