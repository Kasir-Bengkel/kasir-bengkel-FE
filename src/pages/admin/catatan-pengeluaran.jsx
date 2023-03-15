import Sidebar from '@/component/admin/Sidebar'

import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Input,
    Button,
    HStack,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

export default function CatatanPengeluaran(){
    return(
        <Sidebar>
            <Tabs>
                <TabList>
                    <Tab>Pengeluaran Harian</Tab>
                    <Tab>Pengeluaran Lainnya</Tab>
                    <Tab>Part/Jasa</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <HStack>
                            <Input placeholder='Tanggal' type="datetime-local"/>
                            <Input placeholder='Nominal'/>
                            <Input placeholder='Catatan'/>
                            <Button>Buat</Button>
                        </HStack>

                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Tanggal</Th>
                                        <Th>Nominal</Th>
                                        <Th>Catatan</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>11 Januari 2022</Td>
                                        <Td>Rp. 15,000</Td>
                                        <Td>Spakbor</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>

                    </TabPanel>
                    <TabPanel>
                        <HStack>
                            <Input placeholder='Tanggal' type="datetime-local"/>
                            <Input placeholder='Nominal'/>
                            <Input placeholder='Catatan'/>
                            <Button>Buat</Button>
                        </HStack>
                        
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Tanggal</Th>
                                        <Th>Nominal</Th>
                                        <Th>Catatan</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>11 Januari 2022</Td>
                                        <Td>Rp. 15,000</Td>
                                        <Td>ini lainnnya</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>

                    </TabPanel>

                    <TabPanel>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Tanggal</Th>
                                        <Th>Nama Jasa/Part</Th>
                                        <Th>Harga Jual</Th>
                                        <Th>Invoice</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>11 Januari 2022</Td>
                                        <Td>Benerin something good</Td>
                                        <Td>Rp. 120,000</Td>
                                        <Td>00010723</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Sidebar>
    )
}