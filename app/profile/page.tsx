"use client"


import { useRouter } from 'next/navigation'

import React from 'react'

const page = () => {
    const router = useRouter()

    const handelNavigation = ()=>{

        router.push("/")
    }
  return (
    <div>
        <h1> Profile component - client component</h1>

        <button
        onClick={handelNavigation}
        >
            Navigate to home page
        </button>
    </div>
  )
}

export default page