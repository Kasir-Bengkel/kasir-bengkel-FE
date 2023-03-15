import { useState, useEffect } from "react"
import Sidebar from "@/component/admin/Sidebar"
import { 
    Center,
    Heading,
    Input,
    Box,
    SimpleGrid,
    HStack,
    Select,
    Flex
} from "@chakra-ui/react"

export default function Pesanan(){

    const [stock, isStock] = useState("stock")

    const selectHandler = (e) => {
        isStock(e.target.value)
    }

    return(
        <Sidebar>
            <Center>
                <Heading>Buat Pesanan</Heading>
            </Center>
            <Flex flexDirection='column' gap={16}>
                <SimpleGrid w='70%' columns={2} spacing={10}>
                    <Input placeholder="Plat Nomor"/>
                    <Input placeholder="Nama Kendaraan(Merk + Tipe + Tahun)"/>
                    <Input placeholder="Tanggal Invoice"/>
                    <Input placeholder="Nomor Hp"/>
                    <Input placeholder="Nama Pelanggan"/>
                    <Input placeholder="Nama Mekanik"/>
                </SimpleGrid>
                <Box>
                    <HStack>
                        {
                            stock === "stock"
                            &&
                            <Box>
                                <Select onChange={selectHandler} placeholder='Select Stock'>
                                    <option value=''>Spakbor</option>
                                    <option value=''>Spion</option>
                                </Select>
                                <Input placeholder="quantity"/>
                            </Box>
                        }
                        {
                            stock === "lainnya"
                            &&
                            <Box>
                                <Input placeholder="Nama Part/Jasa"/>
                                <Input placeholder="Modal"/>
                                <Input placeholder="Jual"/>
                            </Box>
                        }
                        <Select onChange={selectHandler} placeholder='Select option'>
                            <option value={"stock"}>Stock</option>
                            <option value={"lainnya"}>Lainnya</option>
                        </Select>
                    </HStack>
                </Box>
            </Flex>
        </Sidebar>
    )
}