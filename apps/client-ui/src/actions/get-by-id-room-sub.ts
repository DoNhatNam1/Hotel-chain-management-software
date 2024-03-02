"use server";
import prisma from "../lib/prismaDb";

// Hàm lấy thông tin phòng con dựa trên tên khu vực
export async function getByIdRoomSub(roomSubName: any) {

    const UserChiNhanIdAndKhachSanId = await prisma.tbNhomKhuVucPhong.findFirst({
        where: {
          TenNhomKhuVuc: roomSubName,
        },
        select: {
          id: true,
        }
      });

    return UserChiNhanIdAndKhachSanId;  // Trả về thông tin phòng con
}