import Image from "next/image";
import homepage from "../assets/image/landing.jpg"

import logo from "../assets/image/jamz.png";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/utils/cn";
export default function Home() {
  return (
    <div className="container mx-auto md:flex items-center justify-center h-screen">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <div className="w-full item-center h-1/2 flex items-center justify-center " >
    <h1 className=" text-xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50  md:p-16 mt-6 p-4">"Elevate your knowledge and spirituality at The Modern Jamz Academy—an online haven for Quranic education and Arabic language mastery"</h1>
    </div>
    <div className="w-full item-center h-1/2 flex items-center justify-center">
      <Image
      src={homepage }
      width={400}
      height={400}
     className=" object-cover w-full h-full md:h-[32rem] md:object-contain rounded-full"

      />
    </div>

    {/* <div className="h-screen w-1/2 fflex justify-center items-center ">
    <h1 className=" text-lime-400 font-bold text-2xl">The Modern Jamz Academy</h1>

    </div> */}

  </div>

  );
}
