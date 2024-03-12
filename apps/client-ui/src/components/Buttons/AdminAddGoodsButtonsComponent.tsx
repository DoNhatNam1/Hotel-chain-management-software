"use client";

import AdminAddGoodsButtons from "@/lib/antd/AdminAddGoodsButtons";
import { useState } from "react";
import { MdClose } from "react-icons/md";

type OpenType = "Product" | "Service";

const AdminAddGoodsButtonsComponent: React.FC = () => {
  const [open, setOpen] = useState<OpenType | "screen">("screen");

  return (
    <>
      <AdminAddGoodsButtons setOpen={setOpen} />

      {open === "Product" && (
        <div className="absolute right-1 bottom-1 w-screen h-screen z-50 backdrop-brightness-50">
        <div className="h-full grid place-content-center">
          <div className="bg-white w-[800px] h-[400px] rounded-lg mx-16 -translate-y-28 shadow-lg">
          <div className="mt-4 mx-6 flex justify-between">
            <h3 className='text-gray-800 font-bold'>Hàng hóa</h3>
            <button
              onClick={() => setOpen('screen')}
              >
              <MdClose className='text-gray-700 hover:text-red-600' />
              </button>
          </div>
          <div className="h-full">
                <p className="text-black">Table</p>
              </div>
          </div>
        </div>
      </div>
      )}
      {open === "Service" && (
        <div className="absolute right-1 bottom-1 w-screen h-screen z-50 backdrop-brightness-50">
        <div className="h-full grid place-content-center">
          <div className="bg-white w-[800px] h-[400px] rounded-lg mx-16 -translate-y-28 shadow-lg">
          <div className="mt-4 mx-6 flex justify-between">
            <h3 className='text-gray-800 font-bold'>Dịch vụ</h3>
            <button
              onClick={() => setOpen('screen')}
              >
              <MdClose className='text-gray-700 hover:text-red-600' />
              </button>
          </div>
          <div className="h-full">
                <p className="text-black">Table</p>
              </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default AdminAddGoodsButtonsComponent;
