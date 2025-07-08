"use client"

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs';
  import { Heart, ShoppingCart, User } from 'lucide-react';
  
  
  const Header = () => {
     
    



    return (
      <div className="w-full flex items-center justify-between px-12 py-4 mt-4 relative z-10">
        
      <nav>
        
      </nav>
  
        <SignedIn>
          <div className="flex items-center gap-6 ">
            <div className='flex items-center gap-4 bg-black text-white w-[110px] h-[44px] rounded-full px-4 cursor-pointer transition hover:opacity-90 shadow-lg'>
         
          <div className="w-px h-6 bg-white opacity-40" />
        
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
            <div className="flex items-center gap-4 bg-black text-white w-[60px] h-[44px] rounded-full px-4 cursor-pointer transition hover:opacity-90 shadow-lg">
             
              <div className="w-px h-6 bg-white opacity-40" />
              
            </div>
          </SignInButton>
        </SignedOut>
      </div>
    );
  };
  
  export default Header;
  