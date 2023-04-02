const DUMMY_PESANAN = [
  {
    invoice: "00010323",
    waktu_order: "19 March 2023 12:43",
    nama_kendaraan: "Honda Civic",
    plat_nomor: "B6313VKC",
    nama_pemilik: "Yura Yunani",
    metode_pembayaran: "Cash",
    total_modal: 250000,
    total_pendapatan: 1250000,
    status_invoice: "lunas",
  },
  {
    invoice: "00020323",
    waktu_order: "20 March 2023 12:43",
    nama_kendaraan: "Hyundai Ionic",
    nama_pemilik: "Jerome",
    plat_nomor: "B21JAY",
    metode_pembayaran: "Cash",
    total_modal: 250000,
    total_pendapatan: 1250000,
    status_invoice: "hutang",
  },
];

const DUMMY_STOCK = [
  {
    id: "S01",
    qty: 6,
    nama_stock: "bussing",
    harga_modal: 80000,
    harga_jual: 30000,
  },
  {
    id: "S02",
    qty: 10,
    nama_stock: "karet setabil",
    harga_modal: 10000,
    harga_jual: 100000,
  },
];

const DUMMY_PARTJASA = [
  {
    id: "SPJ01",
    nama: "stoper baru",
    modal: 170000,
    jual: 400000,
    invoice: "00010323",
  },
  {
    id: "SPJ02",
    nama: "spooring(garansi 2 minggu)",
    modal: 0,
    jual: 150000,
    invoice: "00010323",
  },
  {
    id: "SPJ03",
    nama: "bhussing arm besar",
    modal: 300000,
    jual: 700000,
    invoice: "00020323",
  },
];

const DUMMY_PENGELUARAN_HARIAN = [
  {
    id: "SPH01",
    nominal: 150000,
    catatan: "tang sepi",
    date: "1 April 2023",
  },
  {
    id: "SPH02",
    nominal: 12000,
    catatan: "galon 2 GALAXY",
    date: "2 April 2023",
  },
];

const DUMMY_PENGELUARAN_LAINNYA = [
  {
    id: "SPL01",
    nominal: 258000,
    catatan: "Bayar Warung",
    date: "1 April 2023",
  },
  {
    id: "SPL02",
    nominal: 675000,
    catatan: "Klaim bensin, parkir",
    date: "2 April 2023",
  },
];

export {
  DUMMY_PARTJASA,
  DUMMY_PENGELUARAN_HARIAN,
  DUMMY_STOCK,
  DUMMY_PENGELUARAN_LAINNYA,
  DUMMY_PESANAN,
};
