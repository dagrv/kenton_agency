import React, {useState, useCallback} from 'react'
import Image from 'next/image'
import axios from 'axios'

const ContactUs: React.FC = () => {
    // Appeler Julie Fortin
    
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: {error: false, msg: null}
    })

    const [inputs, setInputs] = useState({
        companyName: '',
        email: '',
        message: ''
    })

    const handleOnChange = useCallback(e => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: {error: false, msg: null}
        })
    }, [])

    const handleServerResponse = useCallback((ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: {error: false, msg}
            })
            setInputs({
                companyName: '',
                email: '',
                message: ''
            })
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: {error: true, msg}
            })
        }
    }, [])

    const handleSubmit = useCallback( 
        e => {
            e.preventDefault()
            setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
            axios({
                method: 'POST',
                url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
                data: inputs
            }).then(_response => {
                handleServerResponse(true, 'Message successfully sent !')
            })
    }, [inputs, handleServerResponse])
    
    return (
        <div className='bg-black text-white flex flex-col justify-center items-center pt-10 min-h-screen'>
            <div className='flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6'>
                <div className='pb-10'>
                    <Image src="/assets/logo.svg" width={70} height={70} />
                </div>
                <h2 className='text-6xl font-bold '>Contact Us</h2>

                <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-10 lg:mt_10 min-w-full lg:min-w-[500px]'>
                    
                    {status.info.error && (
                        <div className='bg-red-100 text-red-500 px-4 py-2 rounded relative'>
                            <strong className='font-bold'>Error</strong>
                            <span className='block sm:inline'>{status.info.msg}</span>
                        </div>
                    )}

                    {status.submitted ? (
                        <div className='text-green-400 text-xl font-bold px-4 py-3 rounded-md relative' role="alert">
                            Sent !
                        </div>
                    ) : (
                        <>
                            <input id="companyName" name="companyName" required maxLength={128} type="text" placeholder='Company' className='bg-gray-800 p-3 rounded-lg outline-none' onChange={handleOnChange} value={inputs.companyName} />
                            <input id="email" name="email" required maxLength={128} type="text" placeholder='Email' className='bg-gray-800 p-3 rounded-lg outline-none' onChange={handleOnChange} value={inputs.email} />
                            <textarea className='rounded-lg bg-gray-800 p-3 min-h-[16em]' placeholder='Leave us a message or just say hello' name="message" required maxLength={140193} id="message" onChange={handleOnChange} value={inputs.message}></textarea>

                            <div className="text-center mt-4">
                                <button type='submit' className='bg-green-500 text-black p-3 w-full rounded-lg font-normal'>
                                    {!status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...'}
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    )
}

export default ContactUs