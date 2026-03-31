"use client"
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion, Variants } from "framer-motion";



const container:Variants = {
    hidden:{},
    show:{
        transition:{
            staggerChildren:0.1
        }
    }

}
const item:Variants = {
      hidden:{
        scale:0.95,
        y:40,
        opacity:0
    },
    show:{
        scale:1,
        y:0,
        opacity:1,
        transition:{
            duration:0.3,ease:"easeOut"
        }
    }
}
  


const content = [
    {
        image:'/n1.jpeg',
        title:"",
        subtitle:"",
        isButton:false,
        topText:""
    },
        {
        image:'/n3.jpeg',
        title:"",
        subtitle:"T shirt Spring 25'",
        isButton:false,
        topText:""
    },
            {
        image:'/n9.jpeg',
        title:"",
        subtitle:"",
        isButton:true,
        topText:"Google Maps Link"
    },

        {
        image:'/n5.jpeg',
        title:"",
        subtitle:"",
        isButton:false,
        topText:"Totes Spring 15"
    },
        {
        image:'/n10.jpeg',
        title:"CLOTHING",
        subtitle:"",
        isButton:false,
        topText:""
    },
            {
        image:'/n6.jpeg',
        title:"",
        subtitle:"",
        isButton:true,
        topText:""
    },

        {
        image:'/n10.jpeg',
        title:"ZINES",
        subtitle:"",
        isButton:false,
        topText:""
    },          {
        image:'/n2.jpeg',
        title:"",
        subtitle:"Mix tapes Spring25'",
        isButton:false,
        topText:""
    },
      {
        image:'/n11.jpeg',
        title:"LIVE MUSIC",
        subtitle:"",
        isButton:false,
        topText:""
    },

               {
        image:'/n12.jpeg',
        title:"",
        subtitle:"",
        isButton:true,
        topText:"Follow Us on Substack"
    },
      {
        image:'/n10.jpeg',
        title:"RECORDS",
        subtitle:"",
        isButton:false,
        topText:""
    },
               {
        image:'/n9.jpeg',
        title:"",
        subtitle:"",
        isButton:true,
        topText:"Browse the Instagram"
    },
]

export default function Cards(){
    return(
        <div className="flex flex-col pb-[112px]">

            <div className="grid grid-cols-3 gap-[10px]">

                <div className="h-[413.34px] flex justify-center items-center border-r border-black ">
                    <div className="flex flex-col items-center gap-[30px]">
                        <div className="text-sm [font-family:var(--font-fragment-mono)]">What :</div>
                        <div className="text-center text-4xl [font-family:var(--font-rubik)] font-bold">ARCHIEVE <br/>SALE</div>
                    </div>

                </div>
                       <div className="h-[413.34px] flex justify-center items-center border-r border-black ">
                    <div className="flex flex-col items-center gap-[30px]">
                        <div className="text-sm [font-family:var(--font-fragment-mono)]">When :</div>
                        <div className="text-center text-4xl [font-family:var(--font-rubik)] font-bold">MAY 11TH <br/> 11AM -6PM</div>
                    </div>

                </div>
                       <div className="h-[413.34px] flex justify-center items-center">
                    <div className="flex flex-col items-center gap-[30px]">
                        <div className="text-sm [font-family:var(--font-fragment-mono)]">Where :</div>
                        <div className="text-center text-4xl [font-family:var(--font-rubik)] font-bold">123 CANDYLAND LN, <br/>PORTLAND,OR</div>
                    </div>

                </div>
                   </div>

                   <motion.div variants={container} viewport={{once:true}} initial="hidden" whileInView="show" className="grid grid-cols-3 gap-[10px]">

                {content.map((c,index)=>{

                    if(index%2 ===0 ){
                                           return(

                    <motion.div key={index} style={{backgroundImage:`url(${c.image})`}} className={` bg-cover bg-center py-[21px] px-[13px] flex flex-col justify-between h-[413.34px]`} whileHover={{rotate:1}} transition={{duration:0.5, ease:"easeOut"}} variants={item} initial="hidden" whileInView="show" >
                        
                        <div className="text-sm text-white [font-family:var(--font-fragment-mono)]">{c.topText}</div>

                        <div className=" text-center text-3xl font-bold [font-family:var(--font-rubik)]">{c.title}</div>

                        {c.isButton? (    <motion.div whileHover={{x:10,y:-10}}  transition={{duration:0.5, ease:"easeOut"}} className="flex items-start justify-start text-white cursor-pointer"><MdOutlineArrowOutward size={32} /></motion.div>):(<div className="flex items-center justify-center text-white text-sm [font-family:var(--font-fragment-mono)]">{c.subtitle}</div>)}

                    </motion.div>
    )

                    }else{
                                                                return(

                    <motion.div key={index} style={{backgroundImage:`url(${c.image})`}} className={` bg-cover bg-center py-[21px] px-[13px] flex flex-col justify-between h-[413.34px]`} whileHover={{rotate:-1}} transition={{duration:0.5, ease:"easeOut"}} variants={item} initial="hidden" whileInView="show"> 
                        
                        <div className="text-sm text-white [font-family:var(--font-fragment-mono)]">{c.topText}</div>

                        <div className=" text-center text-3xl font-bold [font-family:var(--font-rubik)]">{c.title}</div>

                        {c.isButton? (    <motion.div whileHover={{x:10, y:-10}} transition={{duration:0.5,ease:"easeOut"}} className="flex items-start justify-start text-white cursor-pointer" ><MdOutlineArrowOutward size={32} /></motion.div>):(<div className="flex items-center justify-center text-white text-sm [font-family:var(--font-fragment-mono)]">{c.subtitle}</div>)}

                    </motion.div>
    )
                    }
 
    })}
</motion.div>
         

            <div className="grid grid-cols-2 gap-[10px] mt-[10px]">

                      <motion.div variants={item} initial="hidden" whileInView="show" whileHover={{rotate:1}} transition={{duration:0.5,ease:"easeOut"}}  style={{backgroundImage:`url('/n10.jpeg')`}} className={` bg-cover bg-center py-[21px] px-[13px] flex flex-col justify-between h-[413.34px]`}>
                       <div className="text-sm text-white [font-family:var(--font-fragment-mono)]"></div>
                        
                     

                        <div className=" text-center text-3xl font-bold [font-family:var(--font-rubik)]">RECORDS</div>
                           <div className="flex items-center justify-center text-white text-sm [font-family:var(--font-fragment-mono)]"></div>

                    

                    </motion.div>

                       <motion.div variants={item} initial="hidden" whileInView="show" whileHover={{rotate:-1}} transition={{duration:0.5,ease:"easeOut"}}  style={{backgroundImage:`url('/nf.jpeg')`}} className={` bg-cover bg-center py-[21px] px-[13px] flex flex-col justify-between h-[413.34px]`}>
                     <div className="text-sm text-white [font-family:var(--font-fragment-mono)]"></div>
                        
                      

                       

                     <div className="flex items-center justify-center text-white text-sm [font-family:var(--font-fragment-mono)]">Tees Spring 25'</div>

                    </motion.div>



            </div>


        </div>
    )
}