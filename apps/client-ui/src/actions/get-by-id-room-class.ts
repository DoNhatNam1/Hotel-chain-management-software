"use server";
import prisma from "../lib/prismaDb";

// Hàm lấy thông tin phòng theo tên loại phòng
export async function getByIdRoomClassPrice(roomClassName: any) {


    const UserChiNhanIdAndKhachSanId = await prisma.tbLoaiPhong.findFirst({
        where: {
          TenLoaiPhong: roomClassName,
        },
        select: {
          id: true,  
          GiaTheoGio: true,  
          GiaTheoNgay: true,  
        }
      });

    return UserChiNhanIdAndKhachSanId;  // Trả về thông tin phòng
}