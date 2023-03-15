import Sidebar from "@/component/admin/Sidebar"
import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    SimpleGrid,
    Input,
    Button,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Box,
    Text,
    Flex,
    ButtonGroup
} from '@chakra-ui/react'

export default function StockBarang(){
    return(
        <Sidebar>
            <Tabs>
                <TabList>
                    <Tab>Cari</Tab>
                    <Tab>Buat Stock</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Input placeholder='nama part'/>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={5} spacing={2} >
                            <Input placeholder='nama part'/>
                            <Input placeholder='harga modal'/>
                            <Input placeholder='harga jual'/>
                            <Input placeholder='jumlah stock'/>
                            <Button>Simpan</Button>
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Box>
                <Card>
                    <CardBody>
                        <Flex justifyContent='space-between'>
                            <Box>
                                <Box>
                                    <Text>Jumlah Stock: </Text>
                                </Box>
                                <Box>
                                    <Text>Nama Stock: </Text>
                                    <Text>Harga Modal:</Text>
                                    <Text>Harga Jual: </Text>
                                </Box>
                            </Box>
                            <ButtonGroup spacing='2'>
                                <Button>Update</Button>
                                <Button>Hapus</Button>
                            </ButtonGroup>
                        </Flex>
                    </CardBody>
                </Card>
            </Box>
        </Sidebar>
    )
}