import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import img from '../img/code-editor-icon-vector-1979771.jpg'
import Footer from './footer'
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/feature' },
    // { name: 'Marketplace', href: '#' },
    // { name: 'Company', href: '#' },
]
function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                        className="h-8 w-auto"
                        src={img}
                        alt=""
                    />
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    {/* //lateron */}
                </a>
            </div>
        </nav>
    )
}

export default Header
