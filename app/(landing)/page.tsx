"use client"
import { Button } from '@/components/ui/button'
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  const auth = useAuth()
  return (
    <div className='text-6xl text-amber-600'>
      LandingPage (unprotected)
      {auth.isSignedIn ?  <Link href='/dashboard'>
        <Button>Dashboard</Button>
      </Link>:
      <>
      <Link href='/sign-in'>
        <Button>Login</Button>
      </Link>
      <Link href='/sign-up'>
        <Button variant={'ghost'}>Register</Button>
      </Link>
      </>
}
    </div>
  )
}

export default LandingPage
