import React from 'react';
import { FaMicrophone, FaBoxOpen, FaClipboardCheck } from 'react-icons/fa';

const VoiceCommands: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Voice-Activated Warehouse Commands</h2>
      <p className="mb-4">Streamline warehouse operations with hands-free, voice-activated commands powered by AI.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaMicrophone className="text-3xl text-red-500 mr-4" />
          <div>
            <h3 className="font-semibold">Voice Recognition</h3>
            <p>Natural language processing</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaBoxOpen className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="font-semibold">Inventory Updates</h3>
            <p>Hands-free stock management</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaClipboardCheck className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="font-semibold">Task Automation</h3>
            <p>Voice-activated workflows</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceCommands;