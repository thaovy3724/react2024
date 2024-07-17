import React from 'react'
import { useParams } from 'react-router'

function User(){
    const {userid} = useParams() // hook, parameter from the path

    return (
        <div className='bg-orange-500 text-black text-3xl text-center py-5'>
            User: {userid}
        </div>
    )
}

export default User