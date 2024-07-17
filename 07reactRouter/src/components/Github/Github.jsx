import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom" 

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState(null)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[]) // This effect runs only once, after the initial render of the component.

    return ( 
        <div className="text-center m-4 bg-gray-600 text-white
        p-4 text-3xl">Github followers: {data.followers}
        <img src={data.avatar_url} width={300} alt="" />
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
/*
User navigates to /github:

The browser URL changes to /github.
React Router matches /github route:

React Router identifies that /github corresponds to the route configured with the Github component and githubInfoLoader.
*/