import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { FaMinusCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import stocksQuery from "@/pages/api/stocks-query";

export default function FormStock({
  StockId,
  Quantity,
  onChangeForm,
  index,
  onRemoveForm,
  listStockId,
}) {
  const [stocks, setStocks] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getStocksHandler() {
      setIsLoading(true);
      const stocksData = await stocksQuery({
        method: "GET",
      });
      if (stocksData.data !== undefined) {
        const { items } = stocksData.data;
        const filteredTypeItems = items.filter(
          (item) => item.types === "STOCK"
        );
        if (listStockId.length === 0) {
          setStocks(filteredTypeItems);
        } else {
          const filteredStocks = filteredTypeItems.filter(
            (stocks) => !listStockId.includes(stocks.id)
          );
          setStocks(filteredStocks);
        }
      }
      setIsLoading(false);
    }
    getStocksHandler();
  }, []);

  const changeHandlerForm = (e) => {
    onChangeForm(index, e.target.name, e.target.value);
  };

  const removeForm = (i) => {
    onRemoveForm(i);
  };

  return (
    <HStack mt={2}>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <FormControl>
          <FormLabel>Pilih Stock</FormLabel>
          {stocks !== undefined && (
            <Select
              name="StockId"
              borderColor={"gray.300"}
              w={400}
              value={StockId}
              onChange={changeHandlerForm}
              placeholder={"pilih stock"}
            >
              {stocks.map((stock) => (
                <option key={stock.id} value={stock.id}>
                  {stock.stockName} | qty: {stock.quantity}{" "}
                </option>
              ))}
            </Select>
          )}
        </FormControl>
      )}

      <FormControl>
        <FormLabel>Quantity</FormLabel>
        <HStack>
          <Input
            name="Quantity"
            onChange={changeHandlerForm}
            value={Quantity}
            borderColor={"gray.300"}
            type={"number"}
          />
          <Icon
            as={FaMinusCircle}
            w={6}
            h={6}
            color={"red.500"}
            onClick={() => removeForm(index)}
          />
        </HStack>
      </FormControl>
    </HStack>
  );
}
