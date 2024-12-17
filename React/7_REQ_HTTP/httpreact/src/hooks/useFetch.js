import {useEffect, useState} from 'react'

// 4 - Custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - Refatorando POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callfetch, setCallFetch] = useState(null)

    // 6 - Loading 
    const [loading, setLoading] = useState(null)

    // 7 - Treating errors
    const [error, setError] = useState(null)

    // 8 - Desafio 6
    const [itemId,setItemId] = useState(null)

    const httpConfig = (data, method) =>{
        if(method === "POST"){
            setConfig(
                {
                    method,
                    headers: {
                        "Content-type" : "application/json"
                    },
                    body: JSON.stringify(data)
                })

                setMethod(method);
        }else if(method === "DELETE"){
            setConfig(
                {
                    method,
                    headers: {
                        "Content-type":"application/json"
                    }
                })
                setMethod(method)
                setItemId(data )
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            }catch(error){
                console.log(error.message)
                setError("Houve um erro ao carregar os dados!")
            }
            
            setLoading(false)
        }

        fetchData()
    }, [url, callfetch])

    // 5 - refatorando POST 
    useEffect(() => {
        const httpRequest = async() => {
            if(method === "POST"){
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
            
                const json = await res.json()
                setCallFetch(json)
            }else if(method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config) 
                const json = await res.json()
                setCallFetch(json)
            }
        } 

        httpRequest();
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}