"use server";
import prisma from "../lib/prismaDb";

// Hàm lấy thông tin Chi Nhánh và Khách Sạn dựa trên email người dùng
export const getByIdChiNhanh = async (userEmail: any) => {

    const UserChiNhanIdAndKhachSanId = await prisma.user.findFirst({
        where: {
          email: userEmail.email,
        },
        select: {
          id: true,  
          email: true,  
          role: true,  
          ChiNhanh: {
            select: {
              id: true,  
              TenChiNhanh: true,  
              KhachSan: {
                select: {
                  id: true,
                  TenKhachSan: true,  
                },
              }
            },
          }
        }
      });

    return UserChiNhanIdAndKhachSanId;  // Trả về thông tin Chi Nhánh và Khách Sạn
}