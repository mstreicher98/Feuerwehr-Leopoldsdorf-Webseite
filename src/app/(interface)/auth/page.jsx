"use client";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();
  router.replace("/auth/login");

  return <></>;
}
