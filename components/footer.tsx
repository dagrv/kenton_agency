import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => (
    <footer className='min-h-full flex gap-8 items-center justify-center bg-black p-20 text-orange-300 hover:text-orange-500'>
        <Image src="/assets/logo.svg" width={18} height={18} alt="logo" />
        <Link href="/terms">Term & Conditions</Link>
        <Link href="/privacy">Privacy Policy</Link>
    </footer>
)

export default Footer