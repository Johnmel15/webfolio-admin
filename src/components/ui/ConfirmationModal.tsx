import { FC } from "react";

interface ConfirmationModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-md text-start font-semibold mb-4">{title}</h2>
        <p className="text-start text-sm font-regular mb-4">{message}</p>
        <div className="flex justify-end space-x-2 mt-2">
          <button
            onClick={onConfirm}
            className="bg-purple-500 text-[12px] text-white font-semibold px-4 py-2 rounded hover:bg-purple-600"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-[12px] text-gray-800 font-semibold px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
