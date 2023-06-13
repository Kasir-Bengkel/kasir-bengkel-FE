import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/router";
import NextLink from "next/link";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const changeFormHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const signInHandler = async () => {
    const { result, error } = await signIn(user.email, user.password);

    if (error) {
      return console.log(error);
    }

    router.push("/admin");
  };

  // onClick={() => {
  //   router.push("/");
  // }}

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"flex-start"}>
          <Link as={NextLink} href="/">
            <Flex align={"center"} gap={2}>
              <Icon as={MdKeyboardBackspace} w={8} h={8} />
              Back to home
            </Flex>
          </Link>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>email</FormLabel>
              <Input type="email" name="email" onChange={changeFormHandler} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                onChange={changeFormHandler}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={signInHandler}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
