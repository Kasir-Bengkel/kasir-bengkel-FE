import axios from "axios";
import qs from "qs";

const incomeQuery = async (req, res) => {
  const API_INCOME = `${process.env.NEXT_PUBLIC_API_ADDRESS}/salesorder/Income`;
  switch (req.method) {
    case "GET":
      try {
        const result = await axios.get(`${API_INCOME}`);
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

export default incomeQuery;
