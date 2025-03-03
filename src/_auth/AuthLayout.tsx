import {Outlet, Navigate} from 'react-router-dom';

const AuthLayout = () => {
  const isAuthenticated = false;
  

  return (
    <>
      {isAuthenticated ? (
        < Navigate to = "/" />
      ):(
        <>
        <section className='flex flex-1 justify-center items-center flex-col'>
          <Outlet />
        </section>
        
        {/* <img 
  src="/assets/images/Poly+Lakeside.png" 
  alt="auth-bg" 
  className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat border-4 border-black float-right rounded-s-xl"/> */}

        </>
      )
    }
    </>
  )
}

export default AuthLayout