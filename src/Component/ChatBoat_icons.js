import React, { useState } from 'react';

export default function Chatboaticons() {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full py-4 text-right p-10 cursor-pointer">
        <div className="inline-block">
          <img 
            src="/images/chatboatimage.png" 
            height={50} 
            width={50} 
            className="shake-on-hover"
            alt="Chatboat Image"
            onClick={handleImageClick} // Open the module when image is clicked
          />
        </div>
      </div>

      {isOpen && (
        <div className="fixed bottom-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white  rounded-lg p-20">
            <p>Login Page .</p>
            {/* <button onClick={handleClose}>X</button> */}

            <div>
            <button className='p-2 rounded-sm bg-blue-700 text-white'onClick={handleClose} >Close</button>
          </div>
          </div>
         
        </div>
      )}
    </div>
  )
}
