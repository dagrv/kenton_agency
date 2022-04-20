import React, {useState, useCallback} from 'react'
import Image from 'next/image'

const ContactUs: React.FC = () => {
    // Appeler Julie Fortin
    return (
        <div className='bg-black text-white flex flex-col justify-center items-center pt-10 min-h-screen'>
            <div className='flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6'>
                <div className='pb-10'>
                    <Image src="/assets/logo.svg" width={70} height={70} />
                </div>
                <h2 className='text-6xl font-bold '>Contact Us</h2>

                <form action="" className='flex flex-col gap-4 mt-10 lg:mt_10 min-w-full lg:min-w-[500px]'>
                    <input id="companyName" name="companyName" required maxLength={128} type="text" placeholder='Company' className='bg-gray-800 p-3 rounded-lg outline-none'/>
                    <input id="email" name="email" required maxLength={128} type="text" placeholder='Email' className='bg-gray-800 p-3 rounded-lg outline-none'/>
                    <textarea className='rounded-lg bg-gray-800 p-3 min-h-[16em]' placeholder='Leave us a message or just say hello' name="message" required maxLength={140193} id="message"></textarea>

                    <div className="text-center mt-4">
                        <button type='submit' className='bg-green-500 text-black p-3 w-full rounded-lg font-normal'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs