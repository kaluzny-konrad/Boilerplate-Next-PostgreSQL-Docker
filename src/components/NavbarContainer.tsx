import { Session } from "next-auth";
import { getAuthSession } from "@/lib/auth";
import NavbarClient from "./NavbarClient";

export default async function MyNavbarProvider() {
  const session: Session | null = await getAuthSession();

  return (
    <NavbarClient session={session} />
  );
}
