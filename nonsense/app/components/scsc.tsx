import { MdOutlineArrowOutward } from "react-icons/md";


export default function SCSC(){
    return(
        <div className="pt-[88px] flex flex-col items-center gap-[43px] w-full">

            <div className="w-full flex items-center justify-between border border-black h-[160px]">
                <MdOutlineArrowOutward size={100}/>
                <div className="font-bold text-4xl [font-family:var(--font-rubik)]">SIGN UP FOR OUR NEWSLETTER</div>
                 <MdOutlineArrowOutward size={100} className="invisible"/>


            </div>

            <img className="w-full h-[386px] object-cover" src="/n8.jpeg"/>

            <div className="flex flex-col items-center gap-10 w-full">
                <div className="text-4xl font-bold [font-damily:var(--font-rubik)] ">A WEARABLE STATEMENTS POP UP
</div>

                <div className="text-[182px] leading-[1.2] font-black [font-damily:var(--font-rubik)] tracking-[0.1em] ">NONSENSE
</div>
    </div>

<div className='flex items-center justify-between w-full'>
    <div className="text-xl font-extrabold [font-family:var(--font-rubik)] leading-[1.2] tracking-[-0.04em]">NONSENSE 2025 ALL RIGHTS RESERVED</div>
      <div className="text-xl font-extrabold [font-family:var(--font-rubik)] leading-[1.2] tracking-[-0.04em]">@NONSENSEFASHION</div>
</div>
        

        </div>
    )
}