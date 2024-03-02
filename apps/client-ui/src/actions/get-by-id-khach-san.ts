'use server'

import prisma from "../lib/prismaDb";

// Hàm lấy thông tin khách sạn dựa trên tên
export async function getByIdRoomHotel(roomHotelName: any) {

    const UserChiNhanIdAndKhachSanId = await prisma.tbKhachSan.findFirst({
        where: {
          TenKhachSan: roomHotelName,
        },
        select: {
          id: true,
        }
      });

    return UserChiNhanIdAndKhachSanId;
}