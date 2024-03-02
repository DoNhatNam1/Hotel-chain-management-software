"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import AuthScreen from "../screens/AuthScreen";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { signOut, useSession } from "next-auth/react";
import { registerUser } from "../actions/register-user";
import { useRouter } from 'next/navigation'


const ProfileDropDown = () => {
  const router = useRouter();
  const [signedIn, setsignedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const { user, loading } = useUser();
  const { data } = useSession();

  useEffect(() => {
    if (!loading) {
      setsignedIn(!!user);
    }
    if (data?.user) {
      setsignedIn(true);
      addUser(data?.user);
    }
  }, [loading, user, open, data]);


   const logoutHandler = () => {
      signOut();
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      Cookies.remove("user_id");
      Cookies.remove("role");
      Cookies.remove("chi_nhanh_id");
      Cookies.remove("khach_san_id");
      toast.success("Log out successful!");
      // window.location.reload();
  };

  const addUser = async (user: any) => {
    await registerUser(user);
  };

  const handleOnNaviGate = () => {
    let navigate = Cookies.get('role')
      router.push(`/${navigate}/Home`)
  }

  return (
    <div className="flex items-center gap-4">
      {signedIn ? (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              src={data?.user ? data.user.image : user.image}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">
                {data?.user ? data.user.email : user.email}
              </p>
            </DropdownItem>
            <DropdownItem key="settings">
              <button 
              className="w-full flex flex-start"
              type="button" 
              onClick={handleOnNaviGate}
              >
                My Dashboard
              </button>
            </DropdownItem>
            <DropdownItem key="notification">
            <button 
              className="w-full flex flex-start"
              type="button" 
              onClick={handleOnNaviGate}
              >
              Notification
              </button>
              </DropdownItem>
            <DropdownItem key="team_settings">
              Settings
            </DropdownItem>
            <DropdownItem
              className="w-full flex flex-start"
              key="logout"
              color="danger"
              onClick={() => logoutHandler()}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ) : (
        <CgProfile
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      )}
      {open && <AuthScreen setOpen={setOpen} />}
    </div>
  );
};

export default ProfileDropDown;
