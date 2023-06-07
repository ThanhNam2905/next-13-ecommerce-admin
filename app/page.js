import Image from 'next/image'

export default function Home() {
    return (
        <div className='bg-blue-800 w-screen h-screen flex items-center'>
            <div className='text-center w-full'>
                <button className='bg-white px-5 py-3 rounded-lg'>Login with Google</button>
            </div>
        </div>
    )
}
