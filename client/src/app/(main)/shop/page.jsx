import Image from 'next/image'
import back from '../../../assets/background.png'



const page = () => {
  return (
    
    <div className="relative w-full h-screen">
    <Image
      src={back}
      alt="Background"
      fill
      className="object-cover"
      quality={100}
      priority
    />
  </div>

    
  )
}

export default page
