import axios from "axios";
import qs from "qs";
// import {BASE_URL, API_TOKEN} from "@env"

const salesOrderQuery = async (req, res) => {
  const API_SALESORDER = `${process.env.NEXT_PUBLIC_API_ADDRESS}/salesorder`;
  switch (req.method) {
    case "POST":
      try {
        const body = {
          LicensePlate: req.body.fieldSalesOrder.LicensePlate,
          VehicleName: req.body.fieldSalesOrder.VehicleName,
          InvoiceDate: req.body.fieldSalesOrder.InvoiceDate,
          PhoneNumber: req.body.fieldSalesOrder.PhoneNumber,
          CustomerName: req.body.fieldSalesOrder.CustomerName,
          MechanicsName: req.body.fieldSalesOrder.MechanicsName,
          Discount: req.body.totalDiscount,
          Payment: req.body.fieldSalesOrder.Payment,
          SalesOrderDetails: JSON.stringify(req.body.mergedStocksPartJasa),
        };
        const result = await axios.post(
          API_SALESORDER,
          qs.stringify(body),
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
        const result = await axios.get(API_SALESORDER);
        return result;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return {
            messages: e.message,
          };
        }
      }
    // case "PUT":
    //   try {
    //     const result = await axios.put(
    //       `${API_STOCKS}/${req.params}`,
    //       qs.stringify(req.body),
    //       req.headers
    //     );
    //     return result;
    //   } catch (e) {
    //     if (axios.isAxiosError(e)) {
    //       return {
    //         messages: e.message,
    //       };
    //     }
    //   }
    // case "DELETE":
    //   try {
    //     const result = await axios.delete(`${API_STOCKS}/${req.params}`);
    //     return result;
    //   } catch (e) {
    //     if (axios.isAxiosError(e)) {
    //       return {
    //         messages: e.message,
    //       };
    //     }
    //   }
  }
};

export default salesOrderQuery;
