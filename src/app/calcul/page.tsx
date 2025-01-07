import React from "react";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80">
       
        <div className="mb-4">
          <input
            type="text"
            placeholder="0"
            className="w-full text-right text-2xl font-bold p-2 border border-gray-300 rounded-lg bg-gray-50"
            readOnly
          />
        </div>
       
        <div className="grid grid-cols-4 gap-2">
          <Button variant="outline" className="py-4 bg-red-600">C</Button>
          <Button variant="outline" className="py-4 bg-orange-600">/</Button>
          <Button variant="outline" className="py-4 bg-orange-600">*</Button>
          <Button variant="outline" className="py-4 bg-orange-600">-</Button>
          <Button variant="outline" className="py-4 bg-gray-800">7</Button>
          <Button variant="outline" className="py-4 bg-gray-800">8</Button>
          <Button variant="outline" className="py-4 bg-gray-800">9</Button>
          <Button variant="outline" className="py-4 bg-orange-600">+</Button>
          <Button variant="outline" className="py-4 bg-gray-800">4</Button>
          <Button variant="outline" className="py-4 bg-gray-800">5</Button>
          <Button variant="outline" className="py-4 bg-gray-800">6</Button>
          <Button variant="outline" className="py-4 row-span-2 bg-orange-600">=</Button>
          <Button variant="outline" className="py-4 bg-gray-800">1</Button>
          <Button variant="outline" className="py-4 bg-gray-800">2</Button>
          <Button variant="outline" className="py-4 bg-gray-800">3</Button>
          <Button variant="outline" className="py-4 col-span-2 bg-gray-800">0</Button>
          <Button variant="outline" className="py-4 bg-orange-600">.</Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
