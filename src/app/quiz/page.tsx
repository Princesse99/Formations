import React from 'react'
import { Button } from "@/components/ui/button";
function page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    
        <form className='bg-white p-6 rounded-lg shadow-md max-w-5xl'>
            <div>
                <h2 className='text-center py-5'>Quelle est la capitale de la France ?</h2>
            </div>
          <div className='grid grid-cols-4 gap-6'>
          <Button variant="outline" className="py-4 w-96 ml-2">Paris</Button>
          <Button variant="outline" className="py-4 w-96 mt-16 -ml-60">Lyon</Button>
          <Button variant="outline" className="py-4 w-96 ml-2">Marseille</Button>
          <Button variant="outline" className="py-4 w-96 mt-16 -ml-60">Toulouse</Button>
          </div>
          <div className='gap-4  mt-6 '>
          <Button variant="outline" className="py-4 bg-red-950 text-white">Suivants</Button>
          </div>
        </form>
      
    </div>
  )
}

export default page
