import React from 'react'

type ShadesType = {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

type Props = {
  shades: ShadesType
}

export const Shades = ({ shades }: Props) => {
  const sortedEntries = Object.entries(shades).sort(
    ([weightA], [weightB]) => parseInt(weightB) - parseInt(weightA)
  )
  return (
    <>
      {sortedEntries.map(([weight, hex]) => (
        <div
          key={weight}
          className="h-12 w-full border-2 border-gray-500 rounded-sm m-auto"
          style={{ backgroundColor: hex }}
        ></div>
      ))}

      {sortedEntries.map(([weight]) => (
        <div key={weight} className="m-auto">
          {weight}
        </div>
      ))}
    </>
  )
}
