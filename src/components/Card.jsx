import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"




function Card({data , reference}) {
  return (
  
      <motion.div drag  dragConstraints={reference}  dragTransition={{bounceStiffness:600 , bounceDamping:30 }}  whileDrag={{scale:1.2}} dragElastic={{scale: 1.2}}  className="relative w-60 h-72 rounded-[50px] bg-zinc-900/90 px-8 py-10 overflow-hidden text-white p-5">
      <FaRegFileAlt />
      <p className="text-sm font-semibold mt-5 leading-tight ">
        {data.desc}
      </p>
      <div className="absolute bottom-0 footer   w-full  left-0" > 
      <div className="flex items-center justify-between px-8  mb-3 ">
       <h4> {data.filesize}</h4>
       <span className="w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center ">
         {data.close ? <IoClose /> : <MdOutlineFileDownload  size='.7rem' color="#fff"  /> }      
       </span>
      </div>
  { data.tag.isOpen &&  ( <div className={`tag w-full flex items-center justify-center py-4 ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'}`}>
        <h3 className="text-sm" >{data.tag.tagTitle}</h3>
       </div>)  } 

       
      </div>
    </motion.div>


  );
}

export default Card;
