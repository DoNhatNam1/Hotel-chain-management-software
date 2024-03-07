"use server";

import AdminAddPurchaseOrderButtonsComponent from '@/components/Buttons/AdminAddPurchaseOrderButtonsComponent'
import AdminPurchaseOrderTableComponent from '@/components/Tables/AdminPurchaseOrderTableComponent'
import AdminHeader from '@/components/Layout/AdminHeader'

const PurchaseOrderBody = () => {
  return (
    <div className="basis-5/6 bg-gray-200">
    <AdminHeader />
    <div className="h-auto">
      <div className="mx-10 mt-32 mb-9 z-0 flex justify-between">
        <h2 className="text-gray-700 font-semibold text-xl">
          Phiếu nhập hàng
        </h2>
        <AdminAddPurchaseOrderButtonsComponent />
      </div>
      <div className="w-full grid place-content-center">
        <AdminPurchaseOrderTableComponent />
      </div>
    </div>
  </div>
  )
}

export default PurchaseOrderBody