import React, { Fragment, useState } from 'react'

import { Shades } from './Shades/Shades'

const initialColours = [
  {
    name: 'Primary',
    shades: {
      100: '#b0fff4',
      200: '',
      300: '#38ffe4',
      400: '',
      500: '#34ebd2',
      600: '',
      700: '#1d8577',
      800: '',
      900: '#125249',
    },
  },

  {
    name: 'Accent',
    shades: {
      100: '#b0fff4',
      200: '',
      300: '#38ffe4',
      400: '',
      500: '#34ebd2',
      600: '',
      700: '#1d8577',
      800: '',
      900: '#125249',
    },
  },

  {
    name: 'Greys',
    shades: {
      100: '#b0fff4',
      200: '',
      300: '#38ffe4',
      400: '',
      500: '#34ebd2',
      600: '',
      700: '#1d8577',
      800: '',
      900: '#125249',
    },
  },
]

export const Builder = () => {
  const [colours] = useState(initialColours)

  return (
    <section className="container m-auto">
      <h1 className="text-4xl">Colour Palette Builder</h1>
      <div className="grid grid-cols-9 col-gap-8 row-gap-1">
        {colours.map(({ name, shades }) => (
          <Fragment key={name}>
            <h3 className="text-2xl col-span-9 m-auto">{name}</h3>
            <Shades shades={shades} />
          </Fragment>
        ))}
      </div>
    </section>
  )
}
