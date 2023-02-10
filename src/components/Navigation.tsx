import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";

const Navigation = () => {
  const { data, status } = useSession();
  const image = data?.user?.image;
  const name = data?.user?.name;

  const isLoggedIn = status === "authenticated";

  return (
    <nav className="flex justify-between px-4">
      {image && name && (
        <Image
          className="mb-4 rounded-full"
          src={image}
          alt={name}
          width={50}
          height={50}
        />
      )}

      {isLoggedIn && <p className="">Hi, {name}</p>}
      {isLoggedIn && <a onClick={() => signOut()}>Sign out</a>}
    </nav>
  );
};

export default Navigation;
