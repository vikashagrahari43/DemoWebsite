
import { useEffect, useState } from "react"


function Github() {
    const [data, setdata] = useState([])
    const api =  useEffect(()=>{
        fetch("https://api.github.com/users/vikashagrahari43")
        .then((res) => res.json())
        .then((res) => setdata(res))
    },[]

    )
  return (
    <div className='p-2 bg-gray-700 text-white grid grid-cols-2 '>
        <div>
            <h1 className="text-3xl">Full Name : {data.name}</h1>
            <h1 className="text-3xl">Github Follower : {data.followers}</h1>
        </div>
        <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default Github