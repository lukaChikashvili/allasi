import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs';
  import { Heart, ShoppingCart, User } from 'lucide-react';
  import React from 'react';
  import logo from '../assets/logo.png';
  import Image from 'next/image';
import Link from 'next/link';
  
  const Header = () => {
     
    // routes
    const routes = [
        {
            id: 1,
            title: "Shop",
            href: "/shop"
        },

        {
            id: 2,
            title: "Blog",
            href: "/shop"
        },

        {
            id: 3,
            title: "Parfume",
            href: "/shop"
        },

        {
            id: 4,
            title: "Gallery",
            href: "/shop"
        },
       


    ];


  


    return (
      <div className="w-full flex items-center justify-between px-12 py-4 mt-4 relative z-10">
    
        <div>
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={120}
            className="absolute -top-6"
          />
        </div>

        <nav>
        <div className='flex items-center ml-12 gap-12 text-md uppercase text-slate-800'>
            {routes.map((route) => (
                <div key={route.id}>
                   <Link href = {route.href}>{route.title}</Link>
                   
                    </div>
            ))}
        </div>
        </nav>
  
        <SignedIn>
          <div className="flex items-center gap-6 ">
            <div className='flex items-center gap-4 bg-black text-white w-[110px] h-[44px] rounded-full px-4 cursor-pointer transition hover:opacity-90 shadow-lg'>
          <ShoppingCart size={20} />
          <div className="w-px h-6 bg-white opacity-40" />
          <Heart size={20} />
          </div>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                },
              }}
            />
          </div>
        </SignedIn>
  
      
        <SignedOut>
          <SignInButton forceRedirectUrl="/">
            <div className="flex items-center gap-4 bg-black text-white w-[110px] h-[44px] rounded-full px-4 cursor-pointer transition hover:opacity-90 shadow-lg">
              <User size={20} />
              <div className="w-px h-6 bg-white opacity-40" />
              <ShoppingCart size={20} />
            </div>
          </SignInButton>
        </SignedOut>
      </div>
    );
  };
  
  export default Header;
  