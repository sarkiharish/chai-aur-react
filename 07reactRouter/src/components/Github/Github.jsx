import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/sarkiharish')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log("DATA",data)
    //         setData(data)
    //     })
    //     console.log("RES", data)
    // }, [])

  return (
    <div
        className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'
    >
        Github followers : {data.followers}
        <br/>
        Github following : {data.following}
        <img src={data.avatar_url} alt='Git pic' width={300} className="rounded-full mx-auto" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sarkiharish')
    return response.json();
}