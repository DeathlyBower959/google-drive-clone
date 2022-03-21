import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Public = () => {
  const { currentUser } = useAuth()
  const { state } = useLocation()

  if (currentUser) {
    return <Navigate to={state?.from?.pathname || '/'} />
  }

  return <Outlet />
}

export default Public
