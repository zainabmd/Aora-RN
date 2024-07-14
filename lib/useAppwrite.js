import { useState,useEffect } from "react"
const Appwrite=(fn)=>{
    const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
    const fetchData=async()=>{
      setIsLoading(true);
      try{
        const response= await getAllPosts();
        setData(response);
      }
      catch(error){
        Alert.alert('error',error.message)
      } finally{
        setIsLoading(false)
      }
    }
    fetchData()
  },[])
  return {data}
}
export default Appwrite;