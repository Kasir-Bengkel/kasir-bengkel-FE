import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const stockQuery = async (req, res) => {
  const API_STOCK = `https://localhost:44321/v1/stocks`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(`${API_STOCK}/${req.params}`);
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

export default stockQuery;
