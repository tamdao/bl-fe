import { AppShell } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarSimple } from '../navbar/navbar'

export function Layout() {
  return (
    <AppShell padding="md" navbar={<NavbarSimple />}>
      <Outlet />
    </AppShell>
  )
}
