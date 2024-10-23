"use client"

import Link from "next/link"

import { List } from 'lucide-react';

export const Courses = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 p-16">
            <Link href="/">
                <div className="flex w-full justify-center items-center">
                    <div className="bg-[#17191C] w-96 p-3 rounded-lg">
                        <div>
                            <img src="thumb.webp" className="rounded-sm" alt="" />
                            <h1 className="pt-3">
                                All Functional MERN Stack LMS / Learning Management system series with next 13, TypeScript | Full Course
                            </h1>
                            <div className="flex justify-between pt-3 items-center">
                                <span><sub className="text-lg">15.99 </sub><del className="text-slate-300">9.99$</del></span>
                                <div className="flex gap-x-2 items-center"><List size="20px" /> 55 Chapters</div>
                            </div>
                            <div className="pt-3 text-md">
                                <span className="text-slate-200">David Ambokadze</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}