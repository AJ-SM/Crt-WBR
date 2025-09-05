
"use client"
import axios from "axios"
import { useEffect, useState } from "react"



export default function Dashboard(){
    const [data,setdata] = useState<object>({})
    
    async function ge(){
    const res = await axios.get("http://localhost:3008/")
    // console.log(res.data)
    setdata(res.data)

}
    
    useEffect(()=>{
        const res:object = ge();
        

        
        
    },[])
    

    return (
  
        <div>
            {JSON.stringify(data)}
        </div>
    )
}