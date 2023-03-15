import Sidebar from "@/component/admin/Sidebar"

import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Input,
    Button,
    HStack,
    Stack,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    FormControl,
    FormLabel,
    Card,
    CardBody,
    Heading,
    Text,
    StackDivider,
    Box,
    VStack
} from '@chakra-ui/react'

export default function Report(){
    return(
        <Sidebar>
            <HStack>
                <FormControl id="daritanggal">
                    <FormLabel>Dari tanggal</FormLabel>
                    <Input type="date" />
                </FormControl>
                <FormControl id="sampaitanggal">
                    <FormLabel>Sampai tanggal</FormLabel>
                    <Input type="date" />
                </FormControl>
            </HStack>

            <Box marginY='24px'>
                <Heading size='xs' textTransform='uppercase'>
                    Grand Total Pemasukan: 
                </Heading>
                <Heading size='xs' textTransform='uppercase'>
                    Grand Total Diskon Keseluruhan: 
                </Heading>
                <Heading size='xs' textTransform='uppercase'>
                    Grand Total Harian & Part: 
                </Heading>
                <Heading size='xs' textTransform='uppercase'>
                    Grand Total Pengeluaran Lainnya:
                </Heading>
                <Heading size='xs' textTransform='uppercase'>
                    Grand Total Profit Nett:
                </Heading>
            </Box>


            <Card>

                <CardBody>
                    <HStack justifyContent='space-between' divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Tanggal
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                13 maret 2023
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Total Pesanan
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                6 Pesanan
                            </Text>
                        </Box>
                    </HStack>
                </CardBody>
            </Card>

            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>No. Invoice</Th>
                            <Th>Merk</Th>
                            <Th>Plat Nomor</Th>
                            <Th>Item Service</Th>
                            <Th>Harga</Th>
                            <Th>Modal</Th>
                            <Th>Total</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>00010323</Td>
                            <Td>Jazz</Td>
                            <Td>B4NJ</Td>
                            <Td>Sesuatu</Td>
                            <Td>150.000</Td>
                            <Td>100.000</Td>
                            <Td>50.000</Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Grand Total</Th>
                            <Th>50.000</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>

        </Sidebar>
    )
}