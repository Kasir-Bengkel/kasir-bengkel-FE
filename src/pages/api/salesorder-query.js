import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const salesOrderQuery = async (req, res) => {
  const API_SALESORDER = `${process.env.NEXT_PUBLIC_API_ADDRESS}/salesorder`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(`${API_SALESORDER}/${req.params.id}`);
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

export default salesOrderQuery;
