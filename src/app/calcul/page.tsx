"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

function Page() {
  const [input,setInput]= useState('');
   
  const handleClick= (value:string)=>{
      setInput((prevInput)=> prevInput + value);    
  };
  const handleClear =()=>{
    setInput('');
  }
  const handleEvaluater =()=>{
    try {
      setInput(eval(input).toString());
    } catch (error) {
      console.log('erreur de expression',error);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-80">
       
        <div className="mb-4">
          <input
            type="text"
            placeholder="0"
            className="w-full text-right text-2xl font-bold p-2 border border-gray-300 rounded-lg bg-gray-50"
            disabled
            value={input}
          />
        </div>
       
        <div className="grid grid-cols-4 gap-2">
          <Button variant="outline" className="py-4 bg-red-600" onClick={handleClear}>C</Button>
          <Button variant="outline" className="py-4 bg-orange-600"onClick={()=>handleClick('/')}>/</Button>
          <Button variant="outline" className="py-4 bg-orange-600"onClick={()=>handleClick('*')}>*</Button>
          <Button variant="outline" className="py-4 bg-orange-600"onClick={()=>handleClick('-')}>-</Button>
          <Button variant="outline" className="py-4 bg-gray-800" onClick={()=> handleClick ('7')}>7</Button>
          <Button variant="outline" className="py-4 bg-gray-800" onClick={()=>handleClick('8')}>8</Button>
          <Button variant="outline" className="py-4 bg-gray-800" onClick={()=> handleClick('9')}>9</Button>
          <Button variant="outline" className="py-4 bg-orange-600" onClick={()=>handleClick('+')}>+</Button>
          <Button variant="outline" className="py-4 bg-gray-800" onClick={()=>handleClick('4')}>4</Button>
          <Button variant="outline" className="py-4 bg-gray-800" onClick={()=>handleClick('5')}>5</Button>
          <Button variant="outline" className="py-4 bg-gray-800" onClick={()=>handleClick('6')}>6</Button>
          <Button variant="outline" className="py-4 row-span-2 bg-orange-600" onClick={handleEvaluater}>=</Button>
          <Button variant="outline" className="py-4 bg-gray-800" onClick={()=>handleClick('1')}>1</Button>
          <Button variant="outline" className="py-4 bg-gray-800" onClick={()=>handleClick('2')}>2</Button>
          <Button variant="outline" className="py-4 bg-gray-800" onClick={()=>handleClick('3')}>3</Button>
          <Button variant="outline" className="py-4 col-span-2 bg-gray-800" onClick={()=>handleClick('0')}>0</Button>
          <Button variant="outline" className="py-4 bg-orange-600" onClick={()=>handleClick('.')}>.</Button>
        </div>
      </form>
    </div>
  );
}

export default Page;
