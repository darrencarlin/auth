import Button from "@/components/Button";
import { Provider } from "next-auth/providers";
import Navigation from "@/components/Navigation";
import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

export default function Home() {
  const [providers, setProviders] = useState<Provider>();

  const handleSignIn = async (providerId: string) => {
    await signIn(providerId);
  };

  useEffect(() => {
    const providers = async () => {
      const providers = await getProviders();
      setProviders(providers as unknown as Provider);
    };

    providers();
  }, []);

  return (
    <>
      <Navigation />
      <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
        <div className="rounded-lg bg-slate-100 p-8">
          {providers &&
            Object.values(providers).map(({ id, name }: Provider) => {
              return (
                <Button key={id} onClick={() => handleSignIn(id)}>
                  Sign in with {name}
                </Button>
              );
            })}
        </div>
      </div>
    </>
  );
}
