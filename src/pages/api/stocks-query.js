import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const stocksQuery = async (req, res) => {
  const API_STOCKS = `${process.env.NEXT_PUBLIC_API_ADDRESS}/Stocks`;
  switch (req.method) {
    case "POST":
      try {
        const result = await axios.post(
          API_STOCKS,
          qs.stringify(req.body),
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
    case "GET":
      try {
        const result = await axios.get(API_STOCKS);
        return result;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return {
            messages: e.message,
          };
        }
      }
    case "PUT":
      try {
        const result = await axios.put(
          `${API_STOCKS}/${req.params}`,
          qs.stringify(req.body),
          req.headers
        );
        return result;
      } catch (e) {
        return e.response.data;
      }
    case "DELETE":
      try {
        const result = await axios.delete(`${API_STOCKS}/${req.params}`);
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

export default stocksQuery;
