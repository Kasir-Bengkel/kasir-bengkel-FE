import {
    Flex,
    Box,
    List,
    ListItem,
    Heading,
    Link
} from '@chakra-ui/react'

export default function Sidebar({children}){
    return(
        <Flex>
            <Box flex='1' bg='blue.400' h='100vh' p='8px'>
                <Heading mb='32px'>Kasir Bengkel</Heading>
                <List spacing={3}>
                    <ListItem>
                        <Box>
                            <Link href='/admin'>Dashboard</Link>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box>
                            <Link href='/admin/pesanan'>Buat Pesanan</Link>
                        </Box>
                    </ListItem>
                    <ListItem>
                        <Box>
                            <Link href='/admin/profile'>Profile</Link>
                        </Box>
                    </ListItem>
                </List>
            </Box>
            <Box flex='4' p='8px'>
                {children}
            </Box>
        </Flex>
    )
}