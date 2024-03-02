'use client'

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";

interface RoomsClass {
  id: number
  TenHangPhong: string
  GiaTheoGio: number
  GiaTheoNgay: number
  SLPhong: number
  status: string
  [key: string]: any // Add index signature
}

const statusColorMap: {
  [key: string]:
    | 'success'
    | 'danger'
    | 'warning'
    | 'default'
    | 'primary'
    | 'secondary'
    | undefined
} = {
  Active: 'success',
  Paused: 'danger',
  Vacation: 'warning',
  // Add a default color for other statuses
  // For example:
  // someOtherStatus: "default",
}

const columns = [
  {name: "Mã hạng phòng", uid: "id"},
  {name: "Tên hạng phòng", uid: "TenHangPhong"},
  {name: "Giá theo giờ", uid: "GiaTheoGio"},
  {name: "Giá theo ngày", uid: "GiaTheoNgay"},
  {name: "SL Phòng", uid: "SLPhong"},
  {name: "Trạng thái", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

export {columns};


export default function AdminRoomClassTable() {
  const [roomsClass, setRoomsClass] = React.useState([
    {
      id: 1,
      TenHangPhong: 'Thường',
      GiaTheoGio: 150000,
      GiaTheoNgay: 2000000,
      SLPhong: 2, 
      status: 'Active',
    },
    {
      id: 2,
      TenHangPhong: 'Vip',
      GiaTheoGio: 50000,
      GiaTheoNgay: 1400000,
      SLPhong: 1, 
      status: 'Paused',
    },
  ])
  const renderCell: (roomsClass: RoomsClass, columnKey: string) => React.ReactNode = React.useCallback((roomsClass: RoomsClass, columnKey: string) => {
    const cellValue = roomsClass[columnKey];

    switch (columnKey) {
        case 'id':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              <p className="text-bold text-sm capitalize text-default-400">{roomsClass.id}</p>
            </div>
          );
        case 'TenHangPhong':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              <p className="text-bold text-sm capitalize text-default-400">{roomsClass.TenHangPhong}</p>
            </div>
          );
          case 'GiaTheoGio':
            return (
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">{cellValue}</p>
                <p className="text-bold text-sm capitalize text-default-400">{roomsClass.GiaTheoGio}</p>
              </div>
            );
            case 'GiaTheoNgay':
              return (
                <div className="flex flex-col">
                  <p className="text-bold text-sm capitalize">{cellValue}</p>
                  <p className="text-bold text-sm capitalize text-default-400">{roomsClass.GiaTheoNgay}</p>
                </div>
              );
              case 'SLPhong':
                return (
                  <div className="flex flex-col">
                    <p className="text-bold text-sm capitalize">{cellValue}</p>
                    <p className="text-bold text-sm capitalize text-default-400">{roomsClass.SLPhong}</p>
                  </div>
                );
      case "status":
        return (
        <Chip className="capitalize" color={statusColorMap[roomsClass.status as keyof typeof statusColorMap]} size="sm" variant="flat">
        {cellValue}
        </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Chi tiết">
              <button className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </button>
            </Tooltip>
            <Tooltip content="Sửa hạng phòng">
              <button className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </button>
            </Tooltip>
            <Tooltip color="danger" content="Xóa hạng phòng">
              <button className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table 
    aria-label="Example table with custom cells"
    className="light"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={roomsClass}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, String(columnKey))}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
