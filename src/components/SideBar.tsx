'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import React from 'react'
import { usePathname } from 'next/navigation'
import logo from '../public/icons/logo.svg'

const SideBar = ({user}:SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href="/"
                className="mb-12 cursor-pointer items-center gap-2 flex">
                    <Image 
                        src={logo}
                        width={34}
                        height={34}
                        alt="logo"
                        className="size-[24px] max-xl:size-14"/>
                    <h1 className="sidebar-logo">Horizon</h1> 
            </Link>
            {sidebarLinks.map((item)=>{
                const isActive = pathname === item.route||pathname.startsWith(`${item.route}/`)
              return(
                  <Link 
                      href={item.route} 
                      key={item.label}
                      className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
                        <div className="relative size-6">	
                          <Image 
                            src={item.imgURL} 
                            alt={item.label}
                            fill
                            className={cn({'brightness-[3] invert-0 ':isActive})} />
                          <p className={cn('sidebar-label',{'!text-white':isActive})}>{item.label}</p>
                        </div>
                  </Link>
              )
            })}
        </nav>
    </section>
  )
}

export default SideBar