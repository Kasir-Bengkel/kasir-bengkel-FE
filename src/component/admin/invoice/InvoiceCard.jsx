import {
  Heading,
  Image,
  HStack,
  VStack,
  Text,
  Flex,
  CardBody,
  Box,
} from "@chakra-ui/react";

import InvoiceCardDetailItem from "./InvoiceCardDetailItem";
import { formatMoney } from "@/helper/FormatMoney";

export default function InvoiceCard({ invoiceDetail }) {
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
            <Text>{invoiceDetail.invoiceNumber}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={700}>Waktu</Text>
            <Text>{invoiceDetail.invoiceDate}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={700}>Mekanik</Text>
            <Text>{invoiceDetail.mechanicsName}</Text>
          </HStack>
        </VStack>
      </Flex>
      <Flex pl={2} mb={4} justifyContent={"space-between"}>
        <VStack mt={4} alignItems={"flex-start"}>
          <HStack>
            <Text fontWeight={700}>Nama Pelanggan</Text>
            <Text>{invoiceDetail.customerName}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={700}>Nama Kendaraan</Text>
            <Text>{invoiceDetail.vehicleName}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={700}>Plat Nomor</Text>
            <Text>{invoiceDetail.licensePlate}</Text>
          </HStack>
        </VStack>
      </Flex>
      <VStack alignItems={"flex-start"} mb={2}>
        <Text bg={"blackAlpha.200"} w={"100%"} p={2} fontWeight={700}>
          Payment Method
        </Text>
        <Text px={2}>{invoiceDetail.payment}</Text>
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
        <InvoiceCardDetailItem detailItem={invoiceDetail.salesOrderDetails} />
        <Flex
          bg={"blackAlpha.200"}
          p={2}
          fontWeight={700}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text>Diskon</Text>
          <Text>{formatMoney(invoiceDetail.discount)}</Text>
        </Flex>
        <Flex
          p={2}
          fontWeight={700}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text>Total</Text>
          <Text>{formatMoney(invoiceDetail.totalPrice)}</Text>
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
