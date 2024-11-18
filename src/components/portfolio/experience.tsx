import React from 'react'

function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 ">
      <div className="text-center mt-10">
        <h1 className="font-brush text-4xl text-orange-500 mb-4">Education</h1>
      </div>
      
      <div className="flex justify-center w-full max-w-3xl">
        <div className="bg-orange-500 rounded-lg shadow-lg p-6 w-full max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-xl text-white font-semibold mb-2">Licence EMIT Fianarantsoa</h2>
          <p className="text-white text-base">3ème année de Licence : 2023-2024</p>
          <p className="text-white text-base">2ème année de Licence : 2022-2023</p>
          <p className="text-white text-base">1ère année de Licence : 2021-2022</p>
        </div>
      </div>
      <div >
        <div>
            <h1 className='font-brush text-orange-500 text-4xl'>Experience</h1>
        </div>
        <div>
            <p>Developpement web</p>
        </div>
      </div>
    </div>
  )
}

export default Experience;
