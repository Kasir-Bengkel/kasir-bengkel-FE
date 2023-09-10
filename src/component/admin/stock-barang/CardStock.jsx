import {
  Heading,
  Button,
  Card,
  VStack,
  HStack,
  ButtonGroup,
  Flex,
  Text,
  Center,
  useDisclosure,
} from "@chakra-ui/react";

import { formatMoney } from "@/helper/FormatMoney";
import ModalUpdateStock from "../Modal/ModalUpdateStock";
import AlertDelete from "../alert/AlertDelete";
import { useRoleContext } from "@/context/RoleContext";

export default function CardStock({
  id,
  curQty,
  namaStock,
  hargaModal,
  hargaJual,
  onUpdateHandler,
  onDeleteHandler,
  date,
  role,
}) {
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const deleteHandler = (v) => {
    onDeleteClose();
    if (v === true) {
      onDeleteHandler(id);
    } else {
      return;
    }
  };

  return (
    <>
      <Card maxW={"100%"} mt={"12px"} p={4}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8}>
            <VStack>
              <Center
                bg={"teal.300"}
                w={"64px"}
                h={"64px"}
                borderRadius={"full"}
              >
                <Text fontSize={"2xl"} color={"white"}>
                  {curQty}
                </Text>
              </Center>
              <Text>Jumlah Stock</Text>
            </VStack>
            <VStack align={"flex-start"}>
              <Heading size={"sm"}>{namaStock}</Heading>
              <HStack>
                <Text>Harga Modal: </Text>
                <Text color={"red.400"}>{formatMoney(hargaModal)}</Text>
              </HStack>
              <HStack>
                <Text>Harga Jual: </Text>
                <Text color={"green.400"}>{formatMoney(hargaJual)}</Text>
              </HStack>
            </VStack>
          </HStack>
          {role === "admin" && (
            <ButtonGroup spacing={8} size={"lg"}>
              <Button colorScheme={"blue"} onClick={onUpdateOpen}>
                Update
              </Button>
              <Button colorScheme={"red"} onClick={onDeleteOpen}>
                Hapus
              </Button>
            </ButtonGroup>
          )}
        </Flex>
      </Card>
      <ModalUpdateStock
        isOpen={isUpdateOpen}
        onClose={onUpdateClose}
        id={id}
        date={date}
        namaStock={namaStock}
        hargaModal={hargaModal}
        hargaJual={hargaJual}
        onCloseHandler={onUpdateClose}
        onSaveHandler={onUpdateHandler}
      />
      <AlertDelete
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        onCloseHandler={deleteHandler}
      />
    </>
  );
}
