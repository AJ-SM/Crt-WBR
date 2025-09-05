import axios from "axios"
import { headers } from "next/headers";




export  async function POST(request:Request,response:Response){
    
    const key = "2NCX3I9EYGIQTDBT";
    const url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=" + key;
    const data = await axios({
        method:"get",
        url:url,
        headers:{
            'User-Agent': 'request'
        }
        
    })
    
    console.log(data)
    // const main = JSON.stringify(data)
    return Response.json({data:data.data})
}