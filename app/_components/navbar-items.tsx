"use client"

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface navbarItemsProps {
    label: string;
    href: string
}
export const NavbarItems = ({
    label,
    href
}: navbarItemsProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const onClick = () => {
        router.push(href)
    }

    const isActive = (pathname === "/" && href === "/" || pathname == href || pathname?.startsWith(`${href}/`))
    return (
        <div
        onClick={onClick}
        className={cn("cursor-pointer hover:text-slate-100 transition-all",
            isActive && "text-[#37B668]"
        )}
        >
            {label}
        </div>
    )
}