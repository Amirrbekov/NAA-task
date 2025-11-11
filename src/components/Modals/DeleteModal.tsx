type Props = {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
  message?: string;
};

export default function DeleteModal({
  isOpen,
  onCancel,
  onDelete,
  message,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center gap-4 max-w-md">
        <h3 className="text-2xl font-semibold text-gray-900">Delete Post</h3>
        <p className="text-gray-600 text-center">{message}</p>
        <div className="flex gap-3 mt-6 w-full">
          <button
            onClick={onCancel}
            className="flex-1 h-11 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="flex-1 h-11 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
