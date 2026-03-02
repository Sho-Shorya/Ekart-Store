import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/redux/userSlice'
import axios from 'axios'
import { toast } from 'sonner'

const navbar = () => {
  const {user} = useSelector(store=>store.user)
  const accessToken = localStorage.getItem('accessToken')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async ()=>{
    try {
      const res = await axios.post("http://localhost:8000/api/v1/user/logout", {},{
        headers:{
          Authorization:`Bearer ${accessToken}`
        }
      })
      if(res.data.success){
        toast.success(res.data.message)
        dispatch(setUser(null))
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <header className='bg-emerald-50 fixed w-full z-20 border-b border-emerald-200'>
      <div className='max-w-5xl mx-auto flex justify-between items-center py-3 '>
        {/* Logo section */}
        <div >
          <img src='/Ekart1.png' className='w-[60px]' />
        </div>
        <nav className='flex gap-10 justify-between items-center px-3 '>
          <ul className='flex gap-7 items-center text-sm font-semibold'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li>Products</li></Link>
            {
              user && <Link to={`/profile/:${user._id}`}><li>Hello, {user.firstName}</li></Link>
            }
            <Link to='/cart'>
              <div className="relative inline-block">
                <ShoppingCart className="text-2xl" />

                <span className="absolute -top-3 -right-3 
                     bg-emerald-500 text-white 
                     text-xs font-bold 
                     rounded-full 
                     w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
            {
              user? <Button onClick={logoutHandler} className='bg-emerald-600 text-white cursor-pointer hover:bg-emerald-500'>Logout</Button> : <Button onClick={()=>navigate('/login')} className='bg-gradient-to-tl from-blue-600 to-purple-600 text-white cursor-pointer hover:bg-emerald-500'>Login</Button>
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default navbar