import React from 'react';
import { Scissors } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="text-purple-700 mr-2">
        <Scissors size={24} />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl text-purple-700">Princesses</span>
        <span className="text-xs text-gray-600">Natural oils to treat hair</span>
      </div>
    </div>
  );
};

export default Logo;