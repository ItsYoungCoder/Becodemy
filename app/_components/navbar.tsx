import Link from "next/link";
import { NavbarRoutes } from "./navbar-routes"

import { MessageCircleMore, Bell, CircleUserRound } from 'lucide-react';

export const Navbar = () => {
    return (
        <div className="flex lg:justify-around justify-between text-lg p-5 items-center font-normal sticky top-0 bg-[#0a0e14c2] z-50">


            <div className="text-2xl">
                <Link href="/">Becodemy</Link>
            </div>

            <div className="relative z-20">
                <NavbarRoutes />
            </div>

            <div className="flex gap-x-8">
                <div className="cursor-pointer">
                    <MessageCircleMore />
                </div>
                <div className="cursor-pointer">
                    <Bell />
                </div>
                <div className="cursor-pointer">
                    <CircleUserRound />
                </div>
            </div>

        </div>
    )
}