import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "@/context/AuthContext";
import NextNProgress from "nextjs-progressbar";

function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <ChakraProvider>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
