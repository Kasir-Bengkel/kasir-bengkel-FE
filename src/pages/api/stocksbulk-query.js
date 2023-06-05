import axios from "axios";
import qs from "qs";

const stocksBulkQuery = async (req, res) => {
  const API_STOCKS = `${process.env.NEXT_PUBLIC_API_ADDRESS}/stocks/bulk`;
  switch (req.method) {
    case "POST":
      try {
        const result = await axios.post(
          API_STOCKS,
          qs.stringify({ BulkStocks: JSON.stringify(req.body) }),
          req.headers
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

export default stocksBulkQuery;
