import SidebarContainer from "@/component/admin/navigation/SidebarContainer";
import {
  Box,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Input,
  Button,
  Card,
  VStack,
  HStack,
  ButtonGroup,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";

export default function StockBarang() {
  return (
    <SidebarContainer onSidebarWidth={(v) => console.log(v)}>
      <Box>
        <Heading>Stock Barang</Heading>
        <Card p={4} mt={"12px"}>
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Cari</Tab>
              <Tab>Buat Stock</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Input maxW={"400px"} bg={"white"} placeholder="nama part" />
              </TabPanel>
              <TabPanel>
                <SimpleGrid columns={5} spacing={2}>
                  <Input bg={"white"} placeholder="nama part" />
                  <Input bg={"white"} placeholder="harga modal" />
                  <Input bg={"white"} placeholder="harga jual" />
                  <Input bg={"white"} placeholder="jumlah stock" />
                  <Button>Simpan</Button>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

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
                    6
                  </Text>
                </Center>
                <Text>Jumlah Stock</Text>
              </VStack>
              <VStack align={"flex-start"}>
                <Heading size={"sm"}>Bussing arm besar=x-trail</Heading>
                <HStack>
                  <Text>Harga Modal: </Text>
                  <Text color={"red.400"}>Rp. 80.0000</Text>
                </HStack>
                <HStack>
                  <Text>Harga Jual: </Text>
                  <Text color={"green.400"}>RP. 30.000</Text>
                </HStack>
              </VStack>
            </HStack>
            <ButtonGroup spacing={8} size={"lg"}>
              <Button colorScheme={"blue"}>Update</Button>
              <Button colorScheme={"red"}>Hapus</Button>
            </ButtonGroup>
          </Flex>
        </Card>
      </Box>
    </SidebarContainer>
  );
}
