"use server";
import prisma from "../lib/prismaDb";

// Hàm lấy thông tin Chi Nhánh và Khách Sạn dựa trên email người dùng
export const getByUserEmailChiNhanh = async (userEmail: any) => {

    const getByUserEmailChiNhanhQuery = await prisma.user.findFirst({
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

    return getByUserEmailChiNhanhQuery;  // Trả về thông tin Chi Nhánh và Khách Sạn
}