import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "@/context/AuthContext";
import { RoleContextProvider } from "@/context/RoleContext";
import NextNProgress from "nextjs-progressbar";
import { SalesOrderProvider } from "@/context/SalesOrderContext";

function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <ChakraProvider>
        <AuthContextProvider>
          <RoleContextProvider>
            <SalesOrderProvider>
              <Component {...pageProps} />
            </SalesOrderProvider>
          </RoleContextProvider>
        </AuthContextProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
