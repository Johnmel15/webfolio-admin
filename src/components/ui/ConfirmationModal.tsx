import { FC } from 'react';

interface ConfirmationModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="px-4 py-4">
          <p className="text-md font-regular mb-4">{message}</p>
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onConfirm} className="bg-purple-500 text-white font-semibold px-4 py-2 rounded hover:bg-purple-600">Confirm</button>
          <button onClick={onCancel} className="bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
