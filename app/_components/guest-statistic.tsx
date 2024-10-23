"use client"
import { UsersRound, Star, Globe } from 'lucide-react';
export const GuestStatistic = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
            <div className="bg-indigo-800 hover:bg-indigo-700 transition-all w-72 h-36 flex items-center gap-x-5 p-5 rounded-2xl cursor-pointer">
                <UsersRound size="60px" />
                <div className='leading-tight'>
                    <span className='text-3xl font-semibold'>10K</span>
                    <div>
                        Registred Users
                    </div>
                </div>
            </div>
            <div className="bg-violet-600 hover:bg-violet-500 transition-all w-72 h-36 flex items-center gap-x-5 p-5 rounded-2xl cursor-pointer">
                <Star size="60px" />
                <div className='leading-tight'>
                    <span className='text-3xl font-semibold'>4.9</span>
                    <div>
                        Student's ratings
                    </div>
                </div>
            </div>
            <div className="bg-teal-600 hover:bg-teal-500 transition-all w-72 h-36 flex items-center gap-x-5 p-5 rounded-2xl cursor-pointer">
                <Globe size="60px" />
                <div className='leading-tight'>
                    <span className='text-3xl font-semibold'>5k+</span>
                    <div>
                        Daily Visitors
                    </div>
                </div>
            </div>
        </div>
    )
}