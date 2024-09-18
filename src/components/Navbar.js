import Link from 'next/link';
import React from 'react'

const Navbar = () => {

  const links = [
    { label: 'Client', link: '/client' },
    { label: 'Drinks', link: '/drinks' },
    { label: 'Tasks', link: '/tasks' },
    { label: 'Prisma Example', link: '/prisma-example' },
  ];

  return (
    <nav
      className='bg-base-300 py-4'
    >
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href='/' className='btn btn-primary'>
          Next.js
        </Link>
        <ul className='menu menu-horizontal md:ml-8'>
          {
            links.map(link => (
              <li key={link.link}>
                <Link
                  href={link.link}
                  className='capitalize'
                >
                  {link.label}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar