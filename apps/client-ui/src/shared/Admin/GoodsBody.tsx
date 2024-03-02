"use server";

import AdminAddGoodsButtonsComponent from '@/components/Buttons/AdminAddGoodsButtonsComponent'
import AdminGoodsTableComponent from '@/components/Tables/AdminGoodsTableComponent'
import AdminHeader from '@/components/Layout/AdminHeader'

const GoodsBody = () => {
  return (
    <div className="basis-5/6">
    <AdminHeader />
    <div className="h-auto">
      <div className="mx-10 mt-32 mb-9 z-0 flex justify-between">
        <h2 className="text-gray-700 font-semibold text-xl">
          Hàng hóa
        </h2>
        <AdminAddGoodsButtonsComponent />
      </div>
      <div className="w-full grid place-content-center">
        <AdminGoodsTableComponent />
      </div>
    </div>
  </div>
  )
}

export default GoodsBody