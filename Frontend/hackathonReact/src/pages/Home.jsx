import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[url("https://www.pmn.org.pk/img/footer/footer-bg.jpg")]   bg-cover bg-center h-screen w-screen '>
      <div className='flex flex-col  justify-center  items-center h-screen w-screen gap-10 '>
        <div className='  flex items-center  justify-center '>
          <div className=''>
            <h1 className='text-6xl '> Welcome Saylani Microfinance App</h1>
          </div>
        </div>
        <div className='bg-amber-100 w-56 h-10 flex items-center justify-center border-0 rounded-3xl text-lg cursor-pointer'>
         <button className=' cursor-pointer' onClick={()=> navigate('/Categories') }> Select Loan  Categories</button>
        </div>
      </div>
    </div>
  )
}

export default Home