import Sidebar from "@/component/admin/Sidebar"

import { 
    VStack,
    Card,
    CardBody,
    Link,
    Text,
    Wrap,
    WrapItem,
    Avatar
} from "@chakra-ui/react"

export default function Profile(){
    return(
        <Sidebar>
            <VStack align={"stretch"}>
                    <Card>
                        <CardBody>
                            <Wrap>
                                <WrapItem>
                                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                </WrapItem>
                            </Wrap>
                            Dan Abrahmov
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Text>Ganti Password</Text>
                        </CardBody> 
                    </Card>
                    <Card>
                        <CardBody>
                            <Text>Aktifitas Akun</Text>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <Text>Logout</Text>
                        </CardBody>
                    </Card>
                </VStack>
        </Sidebar>
    )
}