import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full'>
        <div className="flex items-center justify-between w-full">
            <div>
                <h2>
                    Your Future Starts with Joblin!
                </h2>
            </div>
            <Image height={694} width={591} src="/hero.svg" alt="Logo" />
        </div>
    </div>
  )
}

export default Hero