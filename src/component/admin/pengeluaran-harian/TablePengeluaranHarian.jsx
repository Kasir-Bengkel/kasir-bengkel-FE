import {
  Tr,
  Td,
  ButtonGroup,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { formatMoney } from "@/helper/FormatMoney";
import { formatDate } from "@/helper/FormatDate";
import ModalUpdatePengeluaran from "@/component/admin/Modal/ModalUpdatePengeluaran";
import AlertDelete from "@/component/admin/alert/AlertDelete";

export default function TablePengeluaranHarian({
  id,
  nominal,
  catatan,
  date,
  onUpdateHandler,
  onDeleteHandler,
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
    <Tr>
      <Td>{formatDate(date)}</Td>
      <Td>{formatMoney(nominal)}</Td>
      <Td>{catatan}</Td>
      <Td>
        <Flex justifyContent={"center"}>
          <ButtonGroup spacing={4}>
            <Button colorScheme={"blue"} onClick={onUpdateOpen}>
              Update
            </Button>
            <Button colorScheme={"red"} onClick={onDeleteOpen}>
              Delete
            </Button>
          </ButtonGroup>
        </Flex>
        <ModalUpdatePengeluaran
          isOpen={isUpdateOpen}
          onClose={onUpdateClose}
          id={id}
          nominal={nominal}
          catatan={catatan}
          date={date}
          onCloseHandler={onUpdateClose}
          onSaveHandler={onUpdateHandler}
        />
        <AlertDelete
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
          onCloseHandler={deleteHandler}
        />
      </Td>
    </Tr>
  );
}
