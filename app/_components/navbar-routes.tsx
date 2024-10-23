"use client"

import { NavbarItems } from "./navbar-items"

const guestRoutes = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About Us",
        href: "/aboutus"
    },
    {
        label: "Courses",
        href: "/courses"
    },
    {
        label: "Resources",
        href: "/resources"
    },
    {
        label: "Support Center",
        href: "/support"
    },
]
export const NavbarRoutes = () => {
    return (
        <div className="lg:flex hidden gap-x-8 z-20 relative">
            {
                guestRoutes.map((routes) => (
                    <NavbarItems
                        key={routes.href}
                        label={routes.label}
                        href={routes.href}
                    />
                ))
            }
        </div>
    )
}