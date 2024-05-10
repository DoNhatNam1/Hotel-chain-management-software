'use client'
import React, { useEffect, useState } from 'react'
import type { HangHoaPurchasesOrder } from '@/types/product'
import { Button } from '@nextui-org/react'

export default function AdminTableDisplayAddPurchaseOrderComponent ({
  dataAfterSelected,
  setDataAfterSelected
}: {
  dataAfterSelected: HangHoaPurchasesOrder[]
  setDataAfterSelected: (e: any) => void
}) {
  const [totalAmount, setTotalAmount] = useState<number>(0);


  // useEffect để cập nhật giá trị slTon cho mỗi phần tử trong mảng dataAfterSelected
  useEffect(() => {
    // Tạo một mảng mới chứa giá trị slTon tương ứng với mỗi mục trong dataAfterSelected
    const newDataAfterSelected = dataAfterSelected.map((item) => ({
      ...item,
      slTon: 0, // Thêm trường slTon và khởi tạo giá trị là 0 cho mỗi phần tử
    }));
    // Cập nhật dataAfterSelected với mảng mới có chứa giá trị slTon
    setDataAfterSelected(newDataAfterSelected);
  }, [dataAfterSelected, setDataAfterSelected]);

  useEffect(() => {
    const newTotalAmount = dataAfterSelected.reduce((acc, item) => {
      return acc + (item.SLTonKho * Number(item.GiaGocHangHoa) || 0);
    }, 0);
    setTotalAmount(newTotalAmount);
  }, [dataAfterSelected]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newQuantity = e.target.value;
    let newTotalAmount = 0;
  
    const updatedData = dataAfterSelected.map((item, i) => {
      if (i === index) {
        const newTotal = Number(newQuantity) * Number(item.GiaGocHangHoa);
        newTotalAmount += newTotal;
        return {
          ...item,
          SLTonKho: newQuantity,
          ThanhTien: newTotal,
        };
      }
      newTotalAmount += item.SLTonKho * Number(item.GiaGocHangHoa);
      return item;
    });
  
    setTotalAmount(newTotalAmount);
    setDataAfterSelected(updatedData)
    // Cập nhật state hoặc gọi hàm cập nhật dữ liệu tương ứng
  };

  const handleDeleteFilter = (id: string) => {
    const updatedData = dataAfterSelected.filter((item: HangHoaPurchasesOrder) => item.id!== id);
    setDataAfterSelected(updatedData);
  }

  const handleChangeDonGia = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newDonGia = e.target.value;
    let newTotalAmount = 0;
  
    const updatedData = dataAfterSelected.map((item, i) => {
      if (i === index) {
        const newTotal = Number(item.slTon) * Number(newDonGia);
        newTotalAmount += newTotal;
        return {
          ...item,
          GiaGocHangHoa: newDonGia,
          ThanhTien: newTotal,
        };
      }
      newTotalAmount += item.SLTonKho * Number(item.GiaGocHangHoa);
      return item;
    });
  
    setTotalAmount(newTotalAmount);
    setDataAfterSelected(updatedData);
  };
  

  return (
    <>
    <table className='w-full'>

      <thead>
        <tr>
        <th scope="col" className="px-6 py-3">
                </th>
                <th scope="col" className="px-6 py-3">
                   STT
                </th>
                <th scope="col" className="px-6 py-3">
                    Mã hàng hóa
                </th>
                <th scope="col" className="px-6 py-3">
                    Tên hàng
                </th>
                <th scope="col" className="px-6 py-3">
                    Số lượng
                </th>
                <th scope="col" className="px-6 py-3">
                    Đơn giả
                </th>
        </tr>
      </thead>
      <tbody>
        {dataAfterSelected.map((item: HangHoaPurchasesOrder, index: number) => (
          <tr key={index}>
             <td className='px-6 py-4'>
              <Button color='danger' onClick={() => handleDeleteFilter(item.id)}>
                Delete
              </Button>
            </td>
            <td className='px-6 py-4'>
              {index}
            </td>
            <td className='px-6 py-4'>
              {item.id}
            </td>
            <td className='px-6 py-4'>
              <p>{item.TenHangHoa} ({item.DonViTinh})</p>
            </td>
            <td className='px-6 py-4'>
            <input type="number" placeholder='SL Ton' onChange={(e) => handleQuantityChange(e, index)} />
            </td>
            <td className='px-6 py-4'>
              <input type="number" placeholder='Don Gia' value={Number(item.GiaGocHangHoa)} onChange={(e)=> handleChangeDonGia(e, index)} />
            </td>   
            <td className='px-6 py-4'>
              <p>{item.slTon * Number(item.GiaGocHangHoa)}</p>
            </td>       
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
