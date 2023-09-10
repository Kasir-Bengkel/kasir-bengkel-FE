import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const countOrderQuery = async (req, res) => {
  const API_COUNTORDER = `${process.env.NEXT_PUBLIC_API_ADDRESS}/salesorder/count`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(
          `${API_COUNTORDER}?Date=${req.params.date}`
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

export default countOrderQuery;
