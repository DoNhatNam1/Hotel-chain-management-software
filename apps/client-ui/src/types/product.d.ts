

export type DayReportData = {
  id: string | number;
  Cash: string | number;
  Transfer: string | number;
  CreditCard: string | number;
  Voucher: string | number;
  // NumberOfTransactions: number;
  // NumberOfItems: number;
  // NumberOfProducts: number;
};

export type SaleByProductData = {
  id: number | string;
  ProductName: string;
  ProductsBeenSell: string | number;
  Revenue: number | string;
  AmountToPay: number | string;
  ValuePaid: number | string;
  NetRevenue: number | string;
};

export type TbCacLinkAnhPhongCreateInput = {
  MaPhong: string;
  LinkAnh: string;
}
