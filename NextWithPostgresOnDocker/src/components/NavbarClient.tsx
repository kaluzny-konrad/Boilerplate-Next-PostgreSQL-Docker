"use client";

import {
  Avatar,
  AvatarIcon,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "./AuthModal";

type Props = {
  session: Session | null;
};

export default function MyNavbar({ session }: Props) {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/" className="flex items-center">
            <p className="text-medium font-medium p-4">Logo</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {session?.user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="email"
                size="sm"
                alt="profile picture"
                src={session.user.image!}
                fallback={
                  <>
                    <span className="sr-only">{session.user.email}</span>
                    <AvatarIcon />
                  </>
                }
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile">
                <p className="font-semibold w-[200px] truncate text-sm">
                  {session.user.email}
                </p>
              </DropdownItem>

              <DropdownItem key="settings">My Settings</DropdownItem>

              <DropdownItem
                key="logout"
                aria-label="logout"
                color="danger"
                onClick={(event: any) => {
                  event.preventDefault();
                  signOut({ callbackUrl: `${window.location.origin}/sign-in` });
                }}
              >
                Wyloguj się
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <AuthModal initType="sign-in" />
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
}
