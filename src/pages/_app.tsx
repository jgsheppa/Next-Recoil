import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { RecoilRoot, atom } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
