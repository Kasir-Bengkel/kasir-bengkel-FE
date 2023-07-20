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
  useColorModeValue,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Loading from "@/component/Loading";
import AlertErrorSubmit from "@/component/admin/alert/AlertErrorSubmit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config";
import { useRoleContext } from "@/context/RoleContext";

export default function Login() {
  const { updateRole } = useRoleContext();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const {
    isOpen: isOpenSubmitError,
    onOpen: onOpenSubmitError,
    onClose: onCloseSubmitError,
  } = useDisclosure();

  const changeFormHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const signInHandler = async () => {
    setIsLoading(true);
    const { result, error } = await signIn(user.email, user.password);

    const q = query(collection(db, "user"), where("id", "==", result.user.uid));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      updateRole(doc.data().role);
    });

    setIsLoading(false);

    if (error) {
      setErrorMsg("email atau password salah");
      onOpenSubmitError();
      return;
    }
    router.push("/admin");
  };

  return (
    <>
      {isLoading && <Loading />}
      <AlertErrorSubmit
        isOpen={isOpenSubmitError}
        onOpen={onOpenSubmitError}
        onCloseHandler={onCloseSubmitError}
      >
        {errorMsg}
      </AlertErrorSubmit>
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
    </>
  );
}
