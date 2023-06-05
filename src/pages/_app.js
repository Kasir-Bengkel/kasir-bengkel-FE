import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "@/context/AuthContext";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
