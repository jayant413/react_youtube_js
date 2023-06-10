import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { fetchApiData } from "../api/api";
import { getApiData } from "../store/results";


const useFetch = (url) => {
    const [loading , setLoading] = useState(false);

    const dispatch = useDispatch();

    useEffect(()=>{
        setLoading(true);

        fetchApiData(url).then((res)=>{
            setLoading(false)
            dispatch(getApiData(res))
            console.log(res)
        })
    },[url])

    return {loading}
};


export default useFetch