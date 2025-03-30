'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type * as React from 'react'

const queryClient = new QueryClient()

export default function TanstackProvider(props: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}
