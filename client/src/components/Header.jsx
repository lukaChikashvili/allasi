import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs';
  import { ShoppingCart, User } from 'lucide-react';
  import React from 'react';
  import logo from '../assets/logo.png';
  import Image from 'next/image';
  
  const Header = () => {
    return (
      <div className="w-full flex items-center justify-between px-12 py-4 mt-4 relative z-10">
    
        <div>
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={120}
            className="absolute -top-2"
          />
        </div>
  
  
        <SignedIn>
          <div className="flex items-center gap-6">
            
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
  