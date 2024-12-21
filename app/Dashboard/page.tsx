import Sidebar from '@/components/Sidebar'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='flex'>
      {/* Sidebar with fixed width */}
      <div className='w-64'>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className='flex-1 bg-slate-500 min-h-screen p-4'>
        <h1 className='text-white text-xl mb-4'>Dashboard</h1>
        <div className='p-4 bg-white rounded shadow'>
          <p>Ini adalah div baru! Sekarang pasti kelihatan 🥰</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
