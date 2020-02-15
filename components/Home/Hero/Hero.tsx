import React from 'react'

import Creativity from './undraw_creativity.svg'

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center">
    <div className="container p-4 relative z-10">
      <div className="text-6xl">Not another random generator</div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-lg transition-colors duration-300 ease-in-out mr-4">
          give it a try
        </button>
        <button className="bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded text-lg transition-colors duration-300 ease-in-out">
          learn more
        </button>
      </div>
    </div>
    <Creativity className="absolute right-0 bottom-0 z-0" />
  </section>
)
