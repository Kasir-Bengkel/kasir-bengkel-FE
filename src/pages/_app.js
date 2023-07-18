import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "@/context/AuthContext";
import { RoleContextProvider } from "@/context/RoleContext";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <ChakraProvider>
        <AuthContextProvider>
          <RoleContextProvider>
            <Component {...pageProps} />
          </RoleContextProvider>
        </AuthContextProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
