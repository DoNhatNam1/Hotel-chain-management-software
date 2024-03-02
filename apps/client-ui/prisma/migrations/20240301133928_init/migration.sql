-- CreateTable
CREATE TABLE `TbChiNhanh` (
    `id` VARCHAR(191) NOT NULL,
    `MaAdmin` VARCHAR(191) NOT NULL,
    `TenChiNhanh` VARCHAR(255) NOT NULL,
    `SDTChiNhanh` VARCHAR(255) NULL,
    `DiaChiChiNhanh` VARCHAR(255) NULL,

    INDEX `MaAdmin`(`MaAdmin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbChiTietDichVuDatCho` (
    `id` VARCHAR(191) NOT NULL,
    `MaDatCho` VARCHAR(191) NOT NULL,
    `MaDichVu` VARCHAR(191) NOT NULL,
    `MoTa` TEXT NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `MaDatCho`(`MaDatCho`),
    INDEX `MaDichVu`(`MaDichVu`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbChiTietPhongTienNghi` (
    `id` VARCHAR(191) NOT NULL,
    `MaPhong` VARCHAR(191) NOT NULL,
    `MaTienNghi` VARCHAR(191) NOT NULL,

    INDEX `MaPhong`(`MaPhong`),
    INDEX `MaTienNghi`(`MaTienNghi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbDanhGia` (
    `id` VARCHAR(191) NOT NULL,
    `MaKhachSan` VARCHAR(191) NOT NULL,
    `XepHang` ENUM('Zero', 'One', 'Two', 'Three', 'Four', 'Five') NOT NULL,
    `BinhLuan` TEXT NOT NULL,

    INDEX `MaKhachSan`(`MaKhachSan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbDatCho` (
    `id` VARCHAR(191) NOT NULL,
    `MaKH` VARCHAR(191) NOT NULL,
    `MaPhong` VARCHAR(191) NOT NULL,
    `NgayDatCho` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `NgayNhanPhong` DATETIME(3) NOT NULL,
    `NgayTraPhong` DATETIME(3) NOT NULL,

    INDEX `MaKH`(`MaKH`),
    INDEX `MaPhong`(`MaPhong`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbDichVu` (
    `id` VARCHAR(191) NOT NULL,
    `MaNhomDichVu` VARCHAR(191) NOT NULL,
    `TenDichVu` VARCHAR(255) NOT NULL,
    `DonViTinh` VARCHAR(255) NULL,
    `GiaVon` DECIMAL(20, 2) NOT NULL,
    `GiaBan` DECIMAL(20, 2) NOT NULL,
    `ThoiLuong` INTEGER NOT NULL,

    INDEX `MaNhomDichVu`(`MaNhomDichVu`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbNhomDichVu` (
    `id` VARCHAR(191) NOT NULL,
    `TenNhomDichVu` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbHangHoa` (
    `id` VARCHAR(191) NOT NULL,
    `MaNhomHangHoa` VARCHAR(191) NOT NULL,
    `TenHangHoa` VARCHAR(255) NOT NULL,
    `DonViTinh` VARCHAR(255) NULL,
    `GiaVon` DECIMAL(20, 2) NOT NULL,
    `GiaBan` DECIMAL(20, 2) NOT NULL,
    `SLTonKho` INTEGER NOT NULL,
    `DinhMucTonItNhat` INTEGER NULL,
    `DinhMucTonNhieuNhat` INTEGER NULL,
    `TrongLuong` VARCHAR(255) NULL,
    `MoTa` TEXT NOT NULL,
    `GhiChu` TEXT NOT NULL,
    `ViTri` VARCHAR(255) NULL,

    INDEX `MaNhomHangHoa`(`MaNhomHangHoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbNhomHangHoa` (
    `id` VARCHAR(191) NOT NULL,
    `TenNhomHangHoa` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbHoaDon` (
    `id` VARCHAR(191) NOT NULL,
    `MaDatCho` VARCHAR(191) NOT NULL,
    `TongHoaDon` DECIMAL(20, 2) NOT NULL,
    `NgayThanhToan` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `PhuongThucThanhToan` ENUM('TienMat', 'ChuyenKhoan', 'PhieuNo') NOT NULL,

    INDEX `MaDatCho`(`MaDatCho`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbKhachHang` (
    `id` VARCHAR(191) NOT NULL,
    `TenKH` VARCHAR(255) NULL,
    `SDTKH` VARCHAR(255) NULL,
    `EmailKH` VARCHAR(255) NOT NULL,
    `TaiKhoanKH` VARCHAR(255) NOT NULL,
    `MatKhauMaHoaKH` VARCHAR(255) NOT NULL,
    `createAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updateAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `tbkhachhang_emailkh_unique`(`EmailKH`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbKhachSan` (
    `id` VARCHAR(191) NOT NULL,
    `MaNhaCungCap` VARCHAR(191) NULL,
    `MaChiNhanh` VARCHAR(191) NOT NULL,
    `TenKhachSan` VARCHAR(255) NOT NULL,
    `DiaChiKhachSan` VARCHAR(255) NULL,
    `SDTKhachSan` VARCHAR(255) NULL,
    `EmailKhachSan` VARCHAR(255) NULL,

    UNIQUE INDEX `tbkhachsan_emailks_unique`(`EmailKhachSan`),
    INDEX `MaNhaCungCap`(`MaNhaCungCap`),
    INDEX `MaChiNhanh`(`MaChiNhanh`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbChiTietNhaCungCapKhachSan` (
    `id` VARCHAR(191) NOT NULL,
    `MaNhaCungCap` VARCHAR(191) NOT NULL,
    `MaKhachSan` VARCHAR(191) NOT NULL,

    INDEX `MaNhaCungCap`(`MaNhaCungCap`),
    INDEX `MaKhachSan`(`MaKhachSan`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbKhuyenMai` (
    `id` VARCHAR(191) NOT NULL,
    `TenKhuyenMai` VARCHAR(255) NOT NULL,
    `MucGiamGia` DECIMAL(20, 2) NOT NULL,
    `NgayBatDau` DATE NOT NULL,
    `NgayKetThuc` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbChiTietKhuyenMai` (
    `id` VARCHAR(191) NOT NULL,
    `MaKhuyenMai` VARCHAR(191) NULL,
    `MaChiTietDichVuDatCho` VARCHAR(191) NULL,
    `MoTa` TEXT NULL,

    INDEX `MaKhuyenMai`(`MaKhuyenMai`),
    INDEX `MaChiTietDichVuDatCho`(`MaChiTietDichVuDatCho`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbLoaiPhong` (
    `id` VARCHAR(191) NOT NULL,
    `TenLoaiPhong` VARCHAR(255) NOT NULL,
    `GiaTheoGio` DECIMAL(20, 2) NOT NULL,
    `GiaTheoNgay` DECIMAL(20, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbCacLinkAnhLoaiPhong` (
    `id` VARCHAR(191) NOT NULL,
    `MaLoaiPhong` VARCHAR(191) NOT NULL,
    `LinkAnh` TEXT NOT NULL,

    INDEX `MaLoaiPhong`(`MaLoaiPhong`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbCacLinkAnhDichVu` (
    `id` VARCHAR(191) NOT NULL,
    `MaDichVu` VARCHAR(191) NOT NULL,
    `LinkAnh` TEXT NOT NULL,

    INDEX `MaDichVu`(`MaDichVu`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbCacLinkAnhHangHoa` (
    `id` VARCHAR(191) NOT NULL,
    `MaHangHoa` VARCHAR(191) NOT NULL,
    `LinkAnh` TEXT NOT NULL,

    INDEX `MaHangHoa`(`MaHangHoa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbCacLinkAnhPhong` (
    `id` VARCHAR(191) NOT NULL,
    `MaPhong` VARCHAR(191) NOT NULL,
    `LinkAnh` TEXT NOT NULL,

    INDEX `MaPhong`(`MaPhong`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbNhaCungCap` (
    `id` VARCHAR(191) NOT NULL,
    `TenNhaCungCap` VARCHAR(255) NOT NULL,
    `SDTNhaCungCap` VARCHAR(255) NOT NULL,
    `EmailNhaCungCap` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `tbnhacungcap_emailnhacungcap_unique`(`EmailNhaCungCap`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbPhong` (
    `id` VARCHAR(191) NOT NULL,
    `MaLoaiPhong` VARCHAR(191) NOT NULL,
    `MaKhachSan` VARCHAR(191) NOT NULL,
    `MaNhomKhuVucPhong` VARCHAR(191) NOT NULL,
    `TenPhong` VARCHAR(255) NOT NULL,
    `GhiChu` TEXT NULL,
    `Status` ENUM('HasRoom', 'NoRoom') NOT NULL,

    INDEX `MaLoaiPhong`(`MaLoaiPhong`),
    INDEX `MaKhachSan`(`MaKhachSan`),
    INDEX `MaNhomKhuVucPhong`(`MaNhomKhuVucPhong`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbNhomKhuVucPhong` (
    `id` VARCHAR(191) NOT NULL,
    `TenNhomKhuVuc` VARCHAR(255) NOT NULL,
    `GhiChu` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phone_number` DOUBLE NULL,
    `address` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `role` ENUM('Admin') NOT NULL DEFAULT 'Admin',

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_email_phone_number_key`(`email`, `phone_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubUser` (
    `id` VARCHAR(191) NOT NULL,
    `MaKhachSan` VARCHAR(191) NULL,
    `MaAdmin` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phone_number` DOUBLE NULL,
    `address` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `role` ENUM('LeTan', 'PhucVu') NOT NULL,

    UNIQUE INDEX `SubUser_email_key`(`email`),
    INDEX `MaKhachSan`(`MaKhachSan`),
    INDEX `MaAdmin`(`MaAdmin`),
    UNIQUE INDEX `SubUser_email_phone_number_key`(`email`, `phone_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TbTienNghi` (
    `id` VARCHAR(191) NOT NULL,
    `TenTienNghi` VARCHAR(255) NOT NULL,
    `MoTa` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Avatars` (
    `id` VARCHAR(191) NOT NULL,
    `public_id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Avatars_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubAvatars` (
    `id` VARCHAR(191) NOT NULL,
    `public_id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `subUserId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubAvatars_subUserId_key`(`subUserId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TbChiNhanh` ADD CONSTRAINT `user_maadmin_foreign_key_idx` FOREIGN KEY (`MaAdmin`) REFERENCES `User`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbChiTietDichVuDatCho` ADD CONSTRAINT `tbchitietdichvudatcho_madatcho_foreign_key_idx` FOREIGN KEY (`MaDatCho`) REFERENCES `TbDatCho`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbChiTietDichVuDatCho` ADD CONSTRAINT `tbchitietdichvudatcho_madichvu_foreign_key_idx` FOREIGN KEY (`MaDichVu`) REFERENCES `TbDichVu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbChiTietPhongTienNghi` ADD CONSTRAINT `tbchitietphongtiennghi_maphong_foreign_key_idx` FOREIGN KEY (`MaPhong`) REFERENCES `TbPhong`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbChiTietPhongTienNghi` ADD CONSTRAINT `tbchitietphongtiennghi_matiennghi_foreign_key_idx` FOREIGN KEY (`MaTienNghi`) REFERENCES `TbTienNghi`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbDanhGia` ADD CONSTRAINT `tbdanhgia_makhachsan_foreign_key_idx` FOREIGN KEY (`MaKhachSan`) REFERENCES `TbKhachSan`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbDatCho` ADD CONSTRAINT `tbdatcho_makhachhang_foreign_key_idx` FOREIGN KEY (`MaKH`) REFERENCES `TbKhachHang`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbDatCho` ADD CONSTRAINT `tbdatcho_makphong_foreign_key_idx` FOREIGN KEY (`MaPhong`) REFERENCES `TbPhong`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbDichVu` ADD CONSTRAINT `tbdichvu_manhomdichvu_foreign_key_idx` FOREIGN KEY (`MaNhomDichVu`) REFERENCES `TbNhomDichVu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbHangHoa` ADD CONSTRAINT `tbhanghoa_manhomhanghoa_foreign_key_idx` FOREIGN KEY (`MaNhomHangHoa`) REFERENCES `TbNhomHangHoa`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbHoaDon` ADD CONSTRAINT `tbhoadon_madatcho_foreign_key_idx` FOREIGN KEY (`MaDatCho`) REFERENCES `TbDatCho`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbKhachSan` ADD CONSTRAINT `tbkhachsan_machinhanh_foreign_key_idx` FOREIGN KEY (`MaChiNhanh`) REFERENCES `TbChiNhanh`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbChiTietNhaCungCapKhachSan` ADD CONSTRAINT `tbchitietnhacungcapkhachsan_manhacungcap_foregin_key_idx` FOREIGN KEY (`MaNhaCungCap`) REFERENCES `TbNhaCungCap`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbChiTietNhaCungCapKhachSan` ADD CONSTRAINT `tbchitietnhacungcapkhachsan_makhachsan_foregin_key_idx` FOREIGN KEY (`MaKhachSan`) REFERENCES `TbKhachSan`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbChiTietKhuyenMai` ADD CONSTRAINT `tbchitietkhuyenmai_makhuyenmai_foregin_key_idx` FOREIGN KEY (`MaKhuyenMai`) REFERENCES `TbKhuyenMai`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbChiTietKhuyenMai` ADD CONSTRAINT `tbchitietkhuyenmai_machitietdichvudatcho_foregin_key_idx` FOREIGN KEY (`MaChiTietDichVuDatCho`) REFERENCES `TbChiTietDichVuDatCho`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbCacLinkAnhLoaiPhong` ADD CONSTRAINT `tbcaclinkanh_maloaiphong_foreign_key_idx` FOREIGN KEY (`MaLoaiPhong`) REFERENCES `TbLoaiPhong`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbCacLinkAnhDichVu` ADD CONSTRAINT `tbcaclinkanhhanghoa_madichvu_foreign_key_idx` FOREIGN KEY (`MaDichVu`) REFERENCES `TbDichVu`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbCacLinkAnhHangHoa` ADD CONSTRAINT `tbcaclinkanhhanghoa_mahanghoa_foreign_key_idx` FOREIGN KEY (`MaHangHoa`) REFERENCES `TbHangHoa`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbCacLinkAnhPhong` ADD CONSTRAINT `tbcaclinkanhphong_maphong_foreign_key_idx` FOREIGN KEY (`MaPhong`) REFERENCES `TbPhong`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbPhong` ADD CONSTRAINT `tbphong_manhomkhuvucphong_foreign_key_idx` FOREIGN KEY (`MaNhomKhuVucPhong`) REFERENCES `TbNhomKhuVucPhong`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbPhong` ADD CONSTRAINT `tbphong_maloaiphong_foreign_key_idx` FOREIGN KEY (`MaLoaiPhong`) REFERENCES `TbLoaiPhong`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `TbPhong` ADD CONSTRAINT `tbphong_makhachsan_foreign_key_idx` FOREIGN KEY (`MaKhachSan`) REFERENCES `TbKhachSan`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `SubUser` ADD CONSTRAINT `tbtaikhoancon_maadmin_foreign_key_idx` FOREIGN KEY (`MaAdmin`) REFERENCES `User`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `SubUser` ADD CONSTRAINT `tbtaikhoancon_makhachsan_foreign_key_idx` FOREIGN KEY (`MaKhachSan`) REFERENCES `TbKhachSan`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Avatars` ADD CONSTRAINT `Avatars_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubAvatars` ADD CONSTRAINT `SubAvatars_subUserId_fkey` FOREIGN KEY (`subUserId`) REFERENCES `SubUser`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
