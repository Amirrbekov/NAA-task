import { FiPlus } from "react-icons/fi";

type Props = {
  count: number;
};

export default function Header({ count }: Props) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-medium text-gray-900">
          News & Announcements
        </h1>
        <p className="text-sm font-medium text-gray-500">{count} posts</p>
      </div>

      <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-800">
        <FiPlus className="w-4 h-4" /> Add News or Announcement
      </button>
    </div>
  );
}
