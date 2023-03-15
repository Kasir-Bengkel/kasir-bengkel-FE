import Sidebar from "@/component/admin/Sidebar"
import { 
    Flex,
    Center,
    Heading,
    Input,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    SimpleGrid,
    Button,
    Text,
    VStack,
    Box,
    Link
} from "@chakra-ui/react"

import { BellIcon } from "@chakra-ui/icons"

export default function AdminIndex(){
    return(
        <Sidebar>
            <Flex gap={4} flexDirection='column'>
                <Flex justifyContent='space-between'>
                    <Flex>
                        <Heading>Tanggal</Heading>
                        <Input type="datetime-local"/>
                    </Flex>
                    <Box>
                        <BellIcon/>
                    </Box>
                </Flex>
                <Center>
                    <SimpleGrid columns={3} spacing={4}>
                        <Card>
                            <CardBody>
                                <Text>Total Order: 0</Text>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Text>Total Pemasukan: 0</Text>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Text>Total Order: 0</Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Center>
                <VStack align={"stretch"}>
                    <Card>
                        <CardBody>
                            <Link href='/admin/history-pesanan'>
                                <Text>Pesanan Masuk</Text>
                            </Link>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Link href='/admin/stock-barang'>
                                <Text>Stock Barang</Text>
                            </Link>
                        </CardBody> 
                    </Card>
                    <Card>
                        <CardBody>
                            <Link href='/admin/catatan-pengeluaran'>
                                <Text>Catatan Pengeluaran</Text>
                            </Link>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Link href='/admin/report'>
                                <Text>Report</Text>
                            </Link>
                        </CardBody>
                    </Card>
                </VStack>
            </Flex>
        </Sidebar>
    )
}