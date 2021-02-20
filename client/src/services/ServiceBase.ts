import react from 'react'
import axios, {AxiosRequestConfig} from 'axios'

export interface IRequestOptions {
    url: string,
    data? : any,
    method : "GET" | "POST" | "PUT" | "PETCH" | "DELETE"
}

export abstract class ServiceBase {
    public static async JsonRequest<T> (request : IRequestOptions) : Promise<T> {
        var axiosResult = null
        var result = null
        

        try {
            
            switch (request.method){
                
                case "GET":
                    console.log('in service base')
                    console.log(request.url)
                    axiosResult = await axios.get(request.url)
                    break
                case "POST":
                    axiosResult = await axios.post(request.url)
                    break
                case "PUT":
                    axiosResult = await axios.put(request.url)
                    break
                case "PETCH":
                    axiosResult = await axios.patch(request.url)
                    break
                case "DELETE":
                    axiosResult = await axios.delete(request.url)
                    break
            }
            result = axiosResult.data 
        }
        catch (error) {
            console.log(error)
        }
        return result
    }
} 