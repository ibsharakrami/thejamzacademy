
import { Spotlight } from '@/components/ui/Spotlight';
import Image from 'next/image'


export default function About() {
  return (
    <main className="h-screen  w-full rounded-md  container  relative overflow-hidden mx-auto  md:py-20  flex lg:flex-row flex-col   ">
        <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />

      <div className="  w-full   items-center justify-center">
        <h1 className="text-2xl md:text-7xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 px-5 pt-20  md:px-16 md:mt-20 ">
          "Unlock Quranic Wisdom with Us."
        </h1>
        <h1 className="text-[10px]  md:text-[17px] font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50  md:px-16 md:pt-12  p-5">Welcome to Modern Jamz Academy - where Quranic wisdom meets personal growth. Join us for transformative courses, expert guidance, and a supportive community. Master Arabic, deepen your connection to Islam, and be inspired by success stories from our students. Elevate your learning journey with us.</h1>
      </div>
      <div className=" w-full items-center justify-center flex gap-8 px-6 ">

        <div className='flex gap-5 ' >

          <div className='flex-1 flex items-center'>

            <img className='h-48 w-full object-cover rounded-lg' src='/image/pexels-abdullah-ghatasheh-2608353.jpg' />

          </div>
          <div className='flex-1 flex flex-col gap-5'>

            <img className='h-48 w-full object-cover rounded-lg md:block hidden ' src='/image/pexels-alena-darmel-8164428.jpg' />
            <img className='h-48 w-full object-cover rounded-lg md:mt-0 mt-20   ' src='/image/pexels-alena-darmel-8164739.jpg' />

          </div>


        </div>




      </div>



    </main>
  );
}
