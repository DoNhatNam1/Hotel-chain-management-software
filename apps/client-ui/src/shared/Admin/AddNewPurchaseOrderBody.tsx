"use client"

import getAllNhomHangsHotel from "@/actions/GET/get-all-nhom-hang-hoa";
import { getByNameNhomHangHotel } from "@/actions/GET/get-by-name-nhom-hang-hoa";
import AdminTableDisplayAddPurchaseOrderComponent from "@/components/Tables/AdminTableDisplayAddPurchaseOrderComponent";
import TableNoDataDisplay from "@/lib/antd/TableNoDataDisplay";
import styles from "@/utils/style";
import { Select } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { FaRegRectangleList } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdBlock, MdClose } from "react-icons/md";
import type { HangHoaPurchasesOrder } from '@/types/product'
import getHangHoaByNhomHangHoaId from "@/actions/GET/get-hang-hoa-by-nhom-hang-hoa-id";
import toast from "react-hot-toast";

type OpenSubNhomHangType = 'Open' | 'Close';

type GetAllNhomHangHotelTypeSchema = {
    id: string
    TenNhomHangHoa: string
  }

const PurchaseOrderBody = () => {
    const router = useRouter()
    const [openSubNhomHangHoa, setOpenSubNhomHangHoa] = useState<OpenSubNhomHangType>('Close')
    const [nhomHangHotel, setNhomHangHotel] = useState<GetAllNhomHangHotelTypeSchema[]>([])
    const [nhomHangHoaId, setNhomHangHoaId] = useState<string | undefined>('')
    const [dataAfterSelected, setdataAfterSelected] = useState<HangHoaPurchasesOrder[]>([])

    const data = true;

    // Effect
    useEffect(() => {
        let isApiSubscribed = true
        if (isApiSubscribed) {
          const fetchDataEmployeesHotel = async () => {
            const dataNhomHangHotel = await getAllNhomHangsHotel()
            setNhomHangHotel(
              (dataNhomHangHotel as unknown) as GetAllNhomHangHotelTypeSchema[],
            )
          }
          fetchDataEmployeesHotel()
        }
        return () => {
          isApiSubscribed = false
        }
      }, [openSubNhomHangHoa])

      useEffect(() => {
        let isApiSubscribed = true
        if (isApiSubscribed) {
          console.log(dataAfterSelected)
        }
        return () => {
          isApiSubscribed = false
        }
      }, [dataAfterSelected])
      

    const isUpperCase = (str: string) => {
        if (str && str.length > 0) {
          return str.charAt(0) === str.charAt(0).toUpperCase();
        }
        return false; // or handle the undefined case as per your requirement
      }
    
      const dataEmployeeHotelWithLabelAndValue = nhomHangHotel.map((item: any) => ({
        value: item.TenNhomHangHoa,
        label: isUpperCase(item.TenNhomHangHoa)
          ? item.TenNhomHangHoa.toLowerCase()
          : item.TenNhomHangHoa,
      }))

    //   Filter
    const filterOptionNhomHangHoaHotel = (
        input: string,
        option?: { label: string; value: string },
      ) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

    //   OnChange
    const onChangeSelectNhomHangHoaHotel = async (value: string) => {
        let data = await getByNameNhomHangHotel(value)
    
        if (data) {
          setNhomHangHoaId(data?.id)
        }
      }

      const handleChangeNhomHangHoa = async () => {
        const dataSelected = await getHangHoaByNhomHangHoaId(nhomHangHoaId ?? '')

        if(dataSelected){
          setdataAfterSelected(dataSelected)
          setOpenSubNhomHangHoa('Close')
        } else {
          toast.error('Fail error 500, No data Selected found on Server')
          setOpenSubNhomHangHoa('Close')
        }
      }
  return (
    <>
        <div className="basis-5/6 bg-gray-200">
        <form 
        // onSubmit={handleSubmit(onSubmit)}
        className='w-full h-full px-5 py-3 flex gap-2'
        >


        {/* LeftBody Container */}
        <div className="basis-2/3 flex flex-col gap-2 bg-red-400">
            
            {/* TopButtonAndSearchBar */}
            <div className="basis-1/12 bg-green-700">
                
                {/* LeftButtonAndSeachBar */}
                <div className="flex gap-3">
                    {/* Button back */}
                    <button 
                    onClick={() => router.push('/Admin/ImportGoods')}
                    className="px-2 py-1"
                    >
                        <div className="w-full h-full flex gap-1">

                        <IoArrowBackOutline className='size-8 text-gray-500 pt-2' />

                        <span className="text-center text-gray-700 text-lg font-semibold pt-2">Nhập hàng</span>
                        </div>
                    </button>

                    {/* Search group */}
                    <div className="flex pt-2">
                        <div className="bg-gray-50 rounded-l-sm size-9 grid place-content-center text-gray-400">
                            <IoMdSearch className="size-7" />
                        </div>
                    <input 
                    type="text" 
                    placeholder="Tìm hàng hóa theo tên"
                    className="bg-gray-50 h-9 text-gray-700"
                    />
                        <button 
                        type="button"
                        onClick={() => setOpenSubNhomHangHoa('Open')}
                        className="size-9"
                        >
                            <div className="bg-gray-50 rounded-r-sm size-full grid place-content-center text-gray-400">
                                <FaRegRectangleList className="size-7" />
                            </div>
                        </button>
                    </div>
                   
                    
                </div>

                
            </div>

            {/* BottomTableList */}
            <div className="basis-11/12 bg-pink-300 overflow-y-auto">
                {dataAfterSelected.length === 0 ? (
                    <TableNoDataDisplay />
                ) : (
                    <AdminTableDisplayAddPurchaseOrderComponent 
                    dataAfterSelected={dataAfterSelected}
                    />
                )}
            </div>
        </div>

        {/* RightBody Container */}
        <div className="basis-1/3 bg-yellow-300">
            Right
        </div>
        </form>
  </div>

  {openSubNhomHangHoa === 'Open' && (
    <div className="absolute right-1 bottom-1 w-screen h-screen z-50 backdrop-brightness-50">
        <div className="px-4 py-2 h-full grid place-content-center">
             <div className="bg-white w-[600px] h-auto rounded-lg mx-16 shadow-lg">
             <div className="my-4 mx-6 flex justify-between">
                <h3 className="text-gray-800 font-bold">Thêm hàng hóa từ nhóm hàng</h3>
                <button 
                type="button"
                onClick={() => setOpenSubNhomHangHoa('Close')
                }>
                  <MdClose className="text-gray-700 hover:text-red-600" />
                </button>
              </div>
              <div className="flex items-center px-6 py-3">
            <label htmlFor="NhomHang" className={`${styles.formlabel}`}>
              Nhóm hàng:
            </label>
            <Select
              showSearch
              placeholder="--Lựa chọn--"
              optionFilterProp="children"
              onChange={onChangeSelectNhomHangHoaHotel}
              // onSearch={onSearchSelect}
              filterOption={filterOptionNhomHangHoaHotel}
              options={dataEmployeeHotelWithLabelAndValue.map(
                (option: { label: string; value: string }) => ({
                  label: option.label,
                  value: option.value,
                }),
              )}
              className={`${styles.formInput} px-0 w-[62%] text-black`}
            />
          </div>

          {/* Button Submit Group */}
        <div className="flex justify-end pr-5 gap-2 py-5">
          <button
            type="button"
            onClick={handleChangeNhomHangHoa}
            className={`${styles.formbtn}`}
          >
            <span className="h-full grid place-content-center">
              <AiFillCheckSquare className="size-4 hover:text-gray-500" />
            </span>
            <span>Xong</span>
          </button>
          <button
            type="button"
            className={`${styles.formbtnClose}`}
            onClick={() => setOpenSubNhomHangHoa('Close')}
          >
            <span className="h-full grid place-content-center">
              <MdBlock className="size-4 hover:text-red-500" />
            </span>
            <span>Bỏ qua</span>
          </button>
        </div>
             </div>
        </div>  
    </div>
  )}
    </>
  )
}

export default PurchaseOrderBody