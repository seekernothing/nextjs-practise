"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React from "react";

const Page = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams()

  console.log(
    pathName,
    searchParams.getAll("name"),
    searchParams.has("age")
  );
  

  const handelNavigation = () => {
    router.push("/");
  };
  return (
    <div>
      <h1> Profile component - client component</h1>

      <button onClick={handelNavigation}>Navigate to home page</button>
    </div>
  );
};

export default Page;
