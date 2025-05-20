import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
        src="https://cdn.jsdelivr.net/gh/redadesigner10/photo@921da29f9249892634d28ec795fb949ab3674b19/aba9e17c-4ed2-4abd-b288-13732206829d.jpeg"
        alt="Princesses Logo"
        className="h-310 w-310 mr-2 object-contain"
      />
      <div className="flex flex-col">
        <span className="font-bold text-xl text-purple-700">Princesses</span>
        <span className="text-xs text-gray-600">Natural oils to treat hair</span>
      </div>
    </div>
  );
};

export default Logo;
