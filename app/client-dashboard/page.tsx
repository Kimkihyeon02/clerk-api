'use client'
import { useAuth, useUser } from '@clerk/nextjs'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {}
export default function DashboardClientPage({}: Props) {
  const { isLoaded: isLoadedAuth, userId, sessionId } = useAuth()
  const { isLoaded: isLoadedUser, isSignedIn, user } = useUser()
  if (!isLoadedAuth || !userId) {
    return null
  }
  if (!isLoadedUser || !isSignedIn) {
    return null
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4"> Dashboard (Client-side)</h1>
      <p>Hello, {user.fullName}</p>
      <p>Your first name is {user.firstName}</p>
      <p>Your user ID: {userId}</p>
      <p>Your current active session: {sessionId}</p>
    </div>
  )
}
