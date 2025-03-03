import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { useEffect } from 'react'
import { useUserContext } from '@/context/AuthContext'
import { sidebarLinks } from '@/constants'
import { INavLink } from '@/types'

const LeftSidebar = () => {
    const { mutate: signOut, isSuccess } = useSignOutAccount()
    const navigate = useNavigate();
    const {user} = useUserContext();
    const {pathname} = useLocation();

    useEffect(() => {  
    if (isSuccess) 
      navigate(0)
    },[isSuccess])

  return (
        <nav className='leftsidebar'>
            <div className= 'flex flex-col gap-11'>
            <Link to= "/" className = 'flex gap-3 items-center'>
             <img
                src = "/assets/images/logo.svg"
                alt = "logo"
                width = {85}
                height = {36}
                />
                <h2 className="h2-bold md:h2-bold pt-5 sm:pt-8 mb-10">SnapX</h2>
            </Link>

            <Link to={`/profile/${user.id}`} className='flex gap-3 items-center'>
            <img src = {user.imageUrl || 'assets/icons/profile-placeholder.svg'}
            alt = "profile" 
            className='h-14 w-14 rounded-br-3xl rounded-tr-2xl rounded-tl-2xl'
            />
            <div className='flex flex-col'>
                <p className='body-bold'>{user.name}</p>
                <p className='small-regular text-gray-400 text-sm'>@{user.username}</p>
            </div>
            </Link>
            <ul className='flex flex-col gap-6'>
                {sidebarLinks.map((link:INavLink) => {
                    const isActive = pathname === link.route;
                    return (
                        <li key={link.label}
                        className={`leftsidebar-link group ${isActive && 'bg-primary-500' }`}>
                        <NavLink
                        to = {link.route}
                        className = 'flex gap-3 items-center p-2'
                        >
                            <img src={link.imgURL} alt={link.label} className = {`group-hover:invert-white ${isActive && 'invert-white'}`}/>
                            {link.label}
                        </NavLink>
                        </li>
                    )
                })}
            </ul>
            </div>
            <Button variant = "ghost" className = "shad-button_ghost"
            onClick = {() => signOut()}>
                <img src = "/assets/icons/logout.svg" alt= "logout" />
                <p className='small-medium lg:base-medium'>
                SignOut</p>
            </Button>
        </nav>  
    )
}

export default LeftSidebar