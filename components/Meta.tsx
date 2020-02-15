import * as React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

export const Meta = ({ title }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Not a random colour generator, but a tool to help you build a usable palette yourself"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Alef|Libre+Baskerville&display=swap"
        rel="stylesheet"
      ></link>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Head>
  </>
)
