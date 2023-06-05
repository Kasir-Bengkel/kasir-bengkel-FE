import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const stockQuery = async (req, res) => {
  const API_STOCK = `${process.env.NEXT_PUBLIC_API_ADDRESS}/stocks`;
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
