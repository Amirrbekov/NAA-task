import { FiChevronDown, FiEdit2, FiTrash2 } from "react-icons/fi";
import { Post } from "../api/mock";
import { useState } from "react";

type Props = {
  posts: Post[];
  handleClick: (post: Post) => void;
  onClickDelete: (val: string) => void;
};

const stripHtmlTags = (html: string): string => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

export default function PostsTable({
  posts,
  handleClick,
  onClickDelete,
}: Props) {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-x-auto">
      <table className="w-full border-collapse min-w-[700px] sm:min-w-[900px]">
        <thead>
          <tr>
            <th className="text-left p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6 font-semibold">
                Post
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6 font-semibold">
                Type
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6 font-semibold">
                Sharing time
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6 font-semibold">
                Status
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6 font-semibold">
                Publish Status
              </span>
            </th>
            <th className="text-center p-3 border-r border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6 font-semibold">
                Author
              </span>
            </th>
            <th className="text-center p-3 border-b border-[#F5F5F5]">
              <span className="text-[#243C7B] font-lato text-sm leading-6 font-semibold">
                Actions
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post: Post) => (
            <tr
              key={post.id}
              className="border-t border-gray-100 hover:bg-gray-50/50 transition-colors"
            >
              <td className="p-3.5 align-top">
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
                      {stripHtmlTags(post.htmlContent).substring(0, 57) + "..."}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-3.5 text-center">
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
              <td className="p-3.5">
                <div className="flex flex-col justify-center items-center gap-1">
                  <span className="text-[#222222] font-lato text-base font-medium leading-6">
                    {post.sharingTime.split("\n")[0]}
                  </span>
                  <span className="text-[#AAAAAA] font-lato text-xs font-medium leading-4">
                    {post.sharingTime.split("\n")[1]}
                  </span>
                </div>
              </td>
              <td className="p-3.5 text-center">
                <div className="flex justify-center items-center">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium ${
                      post.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        post.status === "Active" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    {post.status}
                  </span>
                </div>
              </td>
              <td className="p-3.5 text-center relative">
                <div className="flex justify-center items-center relative">
                  <button
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === post.id ? null : post.id)
                    }
                    className="flex items-center justify-between px-3 py-2 border border-[#E5E7EB] rounded-[10px] bg-white min-w-[146px] hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-[#374151] font-inter flex items-center gap-1.5 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          post.publishStatus === "Publish"
                            ? "bg-green-500"
                            : "bg-[#F57C11]"
                        }`}
                      ></span>
                      {post.publishStatus}
                    </span>
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        dropdownOpen === post.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen === post.id && (
                    <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 w-[146px] bg-white border border-[#F7F7F7] rounded-xl shadow-[0_0_10.9px_rgba(235,235,235,0.25)] z-50 py-3 px-3 flex flex-col gap-3">
                      <button
                        onClick={() => {
                          post.publishStatus = "Publish";
                          setDropdownOpen(null);
                        }}
                        className="flex items-center gap-1 text-left text-sm text-gray-700 hover:text-[#243C7B] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        <span className="text-green-500">Publish</span>
                      </button>
                      <button
                        onClick={() => {
                          post.publishStatus = "Draft";
                          setDropdownOpen(null);
                        }}
                        className="flex items-center gap-1 text-left text-sm text-gray-700 hover:text-[#243C7B] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-[#F57C11] rounded-full"></span>
                        <span className="text-[#F57C11]">Draft</span>
                      </button>
                    </div>
                  )}
                </div>
              </td>
              <td className="p-3.5 text-center">
                <span className="text-[#0A0A0A] font-inter text-base font-normal leading-6">
                  {post.author}
                </span>
              </td>
              <td className="p-3.5">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleClick(post)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onClickDelete(post.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
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
