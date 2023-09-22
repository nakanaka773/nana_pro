import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={`flex  flex-col p-20`}>
            <h1 className='mb-5'>普通ボタン</h1>
            <div className='flex gap-10'>
                <button className="bg-sky-500 h-14 text-white px-5">ボタンを押す</button>
                <button className="bg-sky-500 h-14 text-white px-5 rounded-xl">ボタンを押す</button>
                <button className="bg-sky-500 h-14 text-white px-5 rounded-full">ボタンを押す</button>
            </div>
            <div className='flex gap-10 mt-10'>
                <button className="bg-sky-500 hover:border-b-0 hover:h-13 hover:mt-1  h-14 text-white px-5 rounded-b border-solid border-b-8 border-sky-600">ボタンを押す</button>
                <button className="bg-sky-500 hover:bg-sky-300 hover:shadow-xl  h-14 text-white px-5 rounded-xl">ボタンを押す</button>
            </div>

        </main>
    )
}
