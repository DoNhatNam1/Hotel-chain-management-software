'use client'
import React from 'react'
import type { HangHoaPurchasesOrder } from '@/types/product'

export default function AdminTableDisplayAddPurchaseOrderComponent ({
  dataAfterSelected,
}: {
  dataAfterSelected: HangHoaPurchasesOrder[]
}) {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newQuantity = e.target.value;
    const updatedData = dataAfterSelected.map((item, i) => {
        if (i === index) {
            return {
                ...item,
                SLTonKho: newQuantity,
                ThanhTien: Number(newQuantity) * Number(item.GiaGocHangHoa)
            };
        }
        return item;
    });
    // Cập nhật state hoặc gọi hàm cập nhật dữ liệu tương ứng
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
                <th scope="col" className="px-6 py-3">
                    Thành tiền
                </th>
        </tr>
      </thead>
      <tbody>
        {dataAfterSelected.map((item: HangHoaPurchasesOrder, index: number) => (
          <tr key={index}>
             <td className='px-6 py-4'>
              Xóa
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
            <input type="text" placeholder='SL Ton' value={item.SLTonKho} onChange={(e) => handleQuantityChange(e, index)} />
            </td>
            <td className='px-6 py-4'>
              <input type="text" placeholder='Don Gia' />
            </td>
            <td className='px-6 py-4'>
                {item.SLTonKho * Number(item.GiaGocHangHoa)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
