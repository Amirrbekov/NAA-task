import { FiChevronDown, FiEdit2, FiTrash2 } from "react-icons/fi";
import { Post } from "../api/mock";

type Props = {
  posts: Post[];
};

export default function PostsTable({ posts }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full border-collapse">
        <thead className="text-blue-900 font-semibold">
          <tr>
            <th className="text-left p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6">
                Post
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6">
                Type
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6">
                Sharing time
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6">
                Status
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6">
                Publish Status
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6">
                Author
              </span>
            </th>
            <th className="text-center p-3 border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6">
                Actions
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: Post) => (
            <tr key={post.id} className="hover:bg-gray-50 transition-colors">
              <td className="p-[14px] align-top">
                <div className="flex items-start gap-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-24 rounded-[10px] object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col justify-start items-start gap-1.5">
                    <h3 className="text-[#2A2A2A] font-inter text-base font-semibold leading-6">
                      {post.title.substring(0, 20) + "..."}
                    </h3>
                    <p className="text-[#6A7282] font-inter text-sm font-normal leading-5 tracking-[-0.15px]">
                      {post.description.substring(0, 55) + "..."}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-[14px] text-center">
                <div className="flex justify-center items-center">
                  <span
                    className={`inline-flex px-3 py-1 rounded-md text-xs font-medium ${
                      post.type === "News"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {post.type}
                  </span>
                </div>
              </td>
              <td className="p-[14px] align-top">
                <div className="flex flex-col justify-center items-center gap-1">
                  <span className="text-[#222222] font-lato text-base font-medium leading-6">
                    {post.sharingTime.split("\n")[0]}
                  </span>
                  <span className="text-[#AAAAAA] font-lato text-xs font-medium leading-4">
                    {post.sharingTime.split("\n")[1]}
                  </span>
                </div>
              </td>
              <td className="p-[14px] text-center">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  {post.status}
                </span>
              </td>
              <td className="p-[14px] text-center">
                <div className="flex justify-center items-center">
                  <div className="flex items-center justify-between px-3 py-2 border border-[#E5E7EB] rounded-[10px] bg-white min-w-[146px]">
                    <span className="text-[#374151] font-inter text-sm">
                      {post.publishStatus}
                    </span>
                    <FiChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </td>
              <td className="p-[14px] text-center">
                <span className="text-[#0A0A0A] font-inter text-base font-normal leading-6">
                  {post.author}
                </span>
              </td>
              <td className="p-[14px]">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
