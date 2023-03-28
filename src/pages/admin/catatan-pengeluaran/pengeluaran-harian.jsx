import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import {
  Heading,
  Card,
  HStack,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ButtonGroup,
  Button,
  Flex,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

export default function PengeluaranHarian() {
  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Heading>Pengeluaran Harian</Heading>

      <Card mt={"12px"} px={4} py={8}>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Cari</Tab>
            <Tab>Pengeluaran Baru</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <HStack spacing={6}>
                <Input type={"date"} />
                <Input placeholder="Nominal" />
                <Input placeholder="Catatan" />
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack spacing={6}>
                <Input type={"date"} />
                <Input placeholder="Nominal" />
                <Input placeholder="Catatan" />
                <Button w={"220px"} colorScheme={"blue"}>
                  Submit
                </Button>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>

      <Card mt={"12px"} px={4} py={8}>
        <TableContainer mt={"12px"}>
          <Table variant="striped" colorScheme={"blackAlpha"}>
            <Thead>
              <Tr>
                <Th>Tanggal</Th>
                <Th>Nominal</Th>
                <Th>Catatan</Th>
                <Th>
                  <Flex justifyContent={"center"}>
                    <Text>Action</Text>
                  </Flex>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>11 Januari 2022</Td>
                <Td>Rp. 15,000</Td>
                <Td>Spakbor</Td>
                <Td>
                  <Flex justifyContent={"center"}>
                    <ButtonGroup spacing={4}>
                      <Button colorScheme={"blue"}>Update</Button>
                      <Button colorScheme={"red"}>Delete</Button>
                    </ButtonGroup>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </SidebarContainer>
  );
}
