
import Card from "./Card"
import { useRef } from "react"




function Foreground() {

    const ref = useRef(null)

    const data = [{
        desc:`text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only` , 
        filesize:'.9mb',
        close:true, 
        tag:{ isOpen: true , tagTitle: 'Download Now' , tagColor:'green'},
    
    }]



  return (
    <div ref={ref} className="w-full  h-full  top-0 left-0 z-[3] flex  gap-10 flex-wrap p-5" >
      {data.map((item , index ) => (
        <Card data={item} reference={ref} />
      )  )}
    </div>

  )
}

export default Foreground