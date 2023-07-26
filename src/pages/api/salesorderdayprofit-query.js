import axios from "axios";
import qs from "qs";

const salesOrderDayProfitQuery = async (req, res) => {
  const API_SALESORDERDAYPROFIT = `${process.env.NEXT_PUBLIC_API_ADDRESS}`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(
          `${API_SALESORDERDAYPROFIT}/salesorder/profit?Date=${req.params.date}`
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

export default salesOrderDayProfitQuery;
