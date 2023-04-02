import {
  Heading,
  Image,
  HStack,
  VStack,
  Text,
  Flex,
  CardBody,
  Center,
} from "@chakra-ui/react";

export default function InvoiceCard({ nomor, mekanik }) {
  return (
    <CardBody>
      <Flex justifyContent={"space-between"}>
        <HStack>
          <Image
            boxSize={"100px"}
            src="/logo.png"
            objectFit={"cover"}
            alt="logo"
          />
          <VStack alignItems={"flex-start"} spacing={0}>
            <Heading size={"md"}>Galaxy HM Bekasi</Heading>
            <Text>www.galaxyhmkakikaki.com</Text>
            <Text>
              Whatsapp : 082137933300 | 085353833300 | IG : @galaxy_official
            </Text>
            <Text>Bekasi</Text>
          </VStack>
        </HStack>
        <VStack mt={4} alignItems={"flex-start"}>
          <HStack>
            <Text fontWeight={700}>No. Tagihan</Text>
            <Text>{nomor}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={700}>Waktu</Text>
            <Text>30 Maret 2023, 16:32:13</Text>
          </HStack>
          <HStack>
            <Text fontWeight={700}>Mekanik</Text>
            <Text>{mekanik}</Text>
          </HStack>
        </VStack>
      </Flex>
      <Flex pl={2} mb={4} justifyContent={"space-between"}>
        <VStack mt={4} alignItems={"flex-start"}>
          <HStack>
            <Text fontWeight={700}>Nama Pelanggan</Text>
            <Text>Gifino</Text>
          </HStack>
          <HStack>
            <Text fontWeight={700}>Nama Kendaraan</Text>
            <Text>Mirage</Text>
          </HStack>
          <HStack>
            <Text fontWeight={700}>Plat Nomor</Text>
            <Text>B1698KZK</Text>
          </HStack>
        </VStack>
      </Flex>
      <VStack alignItems={"flex-start"} mb={2}>
        <Text bg={"blackAlpha.200"} w={"100%"} p={2} fontWeight={700}>
          Payment Method
        </Text>
        <Text px={2}>Cash</Text>
      </VStack>
      <VStack alignItems={"flex-start"}>
        <Flex
          bg={"blackAlpha.200"}
          p={2}
          fontWeight={700}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text>Item</Text>
          <Text>Harga</Text>
        </Flex>
        <Flex p={2} justifyContent={"space-between"} w={"100%"}>
          <Text>rek stir service(grnsi 1thn)</Text>
          <Text>Rp.1.300.000,-</Text>
        </Flex>
        <Flex p={2} justifyContent={"space-between"} w={"100%"}>
          <Text>spooring(garansi 2 minggu)</Text>
          <Text>Rp.150.000,-</Text>
        </Flex>
        <Flex p={2} justifyContent={"space-between"} w={"100%"}>
          <Text>jasa</Text>
          <Text>Rp.500.000,-</Text>
        </Flex>
        <Flex
          bg={"blackAlpha.200"}
          p={2}
          fontWeight={700}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text>Diskon</Text>
          <Text>Rp.10.000,-</Text>
        </Flex>
        <Flex
          p={2}
          fontWeight={700}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text>Total</Text>
          <Text>Rp.1.940.000,-</Text>
        </Flex>
        <Flex
          mt={"80px!important"}
          px={"32px"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text fontWeight={700}>Customer</Text>
          <Text fontWeight={700}>Kasir</Text>
        </Flex>
        <Flex
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          w={"100%"}
        >
          <Text>Terima Kasih</Text>
          <Text mt={4}>Struk Ini Adalah Bukti Pembayaran Yang Sah</Text>
        </Flex>
      </VStack>
    </CardBody>
  );
}
