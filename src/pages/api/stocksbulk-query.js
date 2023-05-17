import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const stocksBulkQuery = async (req, res) => {
  const API_STOCKS = `https://localhost:44321/v1/stocks/bulk`;
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
