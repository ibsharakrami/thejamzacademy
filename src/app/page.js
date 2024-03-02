import Image from "next/image";
// import homepage from "@"

// import logo from "../assets/image/jamz.png";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/moving-border";
export default function Home() {
  return (
    <div className="container mx-auto md:flex items-center justify-center md:h-[85%]">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <div className="w-full flex flex-col " >
    <h1 className=" text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50  md:p-16 mt-6 p-4">"Elevate your knowledge and spirituality at The Modern Jamz Academy—an online haven for Quranic education and Arabic language mastery"</h1>
    <Button
        borderRadius="2rem"
        className=" border-[2px]  text-black bg-white font-bold   md:px-16  px-4 text-"
      >
        Book Free Trail
      </Button>
    </div>
    <div className="w-full item-center h-1/2 flex items-center justify-center ">
      <img
      src={'/image/landing.jpg' }


     className=" object-cover w-full h-full md:h-[40rem] md:object-contain rounded-lg md:rounded-full"

      />
    </div>

    {/* <div className="h-screen w-1/2 fflex justify-center items-center ">
    <h1 className=" text-lime-400 font-bold text-2xl">The Modern Jamz Academy</h1>

    </div> */}

  </div>

  );
}
