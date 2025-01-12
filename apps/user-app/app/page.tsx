"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { Button } from "@repo/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function Page(): JSX.Element {
  const session = useSession();
  const router = useRouter();





  
  if (session.status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      <div className="bg-purple-300 w-4/5 ml-24 rounded-xl h-[600px] flex flex-row justify-center items-center mt-10 space-x-10"> {/* Added flex-row and space between */}
        
        {/* Text content */}
        <div className="w-1/2 text-center italic">
          <h1 className="font-medium text-7xl mt-4">Fast, Safe</h1>
          <h1 className="font-medium text-7xl mt-4">Social</h1>
          <h1 className="font-medium text-7xl mt-4 italic">Payments</h1>
          <p className="mt-6">
            Pay, get paid, grow a business, and more. Join <br />
            the tens of millions of people on <span className="font-bold">Paytm.</span>
          </p>
          {session.data?.user?(<div className="mt-8"><Button onClick={()=>{router.push("/root/dashboard")}}>Go to Dashboard</Button></div>):null}
        </div>

        {/* Image content */}
        <div className="w-1/2">
          <img 
            src="https://images.ctfassets.net/gkyt4bl1j2fs/5up9qIIl3KjCbKRNTo4rA0/dc90bd5478ba48d4109c54965c61f95b/home-hero.png?w=1600&h=1230&q=50&fm=webp&bg=transparent" 
            alt="hero" 
            className="w-full h-auto object-cover ml-32" 
          />
        </div>
      </div>
    </div>
  );
}
