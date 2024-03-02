"use server";
import prisma from "../lib/prismaDb";
import { cookies } from 'next/headers'

// Hàm lấy thông tin tất cả các phòng khách sạn
export default async function getAllRoomHotel() {
    const admin_id = cookies().get('user_id')?.toString() // Lấy user_id từ cookies

    // Lấy tất cả các phòng khách sạn từ bảng tbKhachSan
    const allroomhotel = await prisma.tbKhachSan.findMany({
        select: {
            id: true, 
            TenKhachSan: true, 
        }
    })

    return allroomhotel;  // Trả về danh sách các phòng khách sạn
}