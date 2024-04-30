import { getServerSession } from 'next-auth'
import React from 'react'

export default async function ServerPage() {
  const session = await getServerSession();
  return (
    <div className='m=10'>
      <h1 className='text 2-xl font-bold'>Congratulations!! <span className='text-blue-700'>welcome to the server page</span></h1>
      <div>
        {/* this is for session */}
        {JSON.stringify(session)}
      </div>
    </div>
  )
}
