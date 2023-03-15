import Sidebar from '@/component/admin/Sidebar'

import { 
    Center,
    Heading,
    Input,
    Box,
    SimpleGrid,
    HStack,
    Select,
    Flex,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Text,
    Badge,
    Link
} from "@chakra-ui/react"

export default function HistoryPesanan(){
    return(
        <Sidebar>
            <HStack>
                <Input placeholder="No Invoice"/>
                <Input placeholder="Plat Nomor"/>
                <Input placeholder="Tanggal" type="datetime-local"/>
                <Select placeholder='Status'>
                    <option value='option1'>Lunas</option>
                    <option value='option2'>Pending</option>
                    <option value='option3'>Hutang</option>
                </Select>
            </HStack>
            <Center mt='24px'>
                <Card w='100%'>
                    <CardHeader>
                        <Flex justifyContent='space-between'>
                            <Box>
                                <Text>No. Invoice</Text>
                                <Text>00010323</Text>
                                <Badge colorScheme='green'>Lunas</Badge>
                            </Box>
                            <Box>
                                <Button colorScheme='blue'>Print</Button>
                            </Box>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text>Nama Kendaraan: </Text>
                        <Text>Plat Nomor: </Text>
                        <Text>Nama Pemilik: </Text>
                        <Text>Metode Pembayaran: </Text>
                        <Flex justifyContent='space-between'>
                            <Text>Detail Service: </Text>
                            <Text>Modal: </Text>
                        </Flex>
                    </CardBody>
                    <CardFooter flexDirection='column'>
                        <Text>Total Modal: </Text>
                        <Text>Total Pendapatan: </Text>
                        <Text>Waktu Order: </Text>
                        <Link color='blue'>Edit</Link>
                    </CardFooter>
                </Card>
            </Center>
        </Sidebar>

    )
}