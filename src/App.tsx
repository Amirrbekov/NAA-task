import { useState } from "react";
import { mockPosts, Post } from "./api/mock";
import Sidebar from "./components/sidebar/Sidebar";
import FilterBar from "./components/Filterbar/Filterbar";
import PostsTable from "./components/PostTable";
import Pagination from "./components/Pagination";
import Modal from "./components/Modals/CreateModal/CreateModal";
import { FiPlus } from "react-icons/fi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, deletePost, fetchPosts, updatePost } from "./api/posts";
import DeleteModal from "./components/Modals/DeleteModal";

type FilterChangeType = {
  type: string;
  status: string;
  search: string;
};

function App() {
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const postsPerPage = 6;

  const queryClient = useQueryClient();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  const handleFilterChange = ({ type, status, search }: FilterChangeType) => {
    let filtered = [...posts];

    if (type !== "All Posts") {
      filtered = filtered.filter((post) => post.type === type);
    }

    if (status !== "All Status") {
      filtered = filtered.filter((post) => post.status === status);
    }

    if (search) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.htmlContent?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  const handleEditClick = (post: Post) => {
    setPostToEdit(post);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (post: Post) => {
    setPostToDelete(post);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    if (postToDelete) {
      deleteMutation.mutate(postToDelete.id);
      setIsDeleteOpen(false);
      setPostToDelete(null);
    }
  };

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  if (isLoading) return null;

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <div className="hidden lg:block w-[318px] flex-shrink-0">
        <Sidebar />
      </div>

      <main className="flex-1 overflow-y-auto h-screen p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-medium text-gray-900">
              News & Announcements
            </h1>
            <p className="text-sm font-medium text-gray-500">
              {filteredPosts.length} posts
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 text-white bg-blue-900 rounded-full hover:bg-blue-800 transition"
          >
            <FiPlus className="w-4 h-4" /> Add News or Announcement
          </button>
        </div>
        <FilterBar onFilterChange={handleFilterChange} />
        <PostsTable
          posts={currentPosts}
          handleClick={handleEditClick}
          onClickDelete={(postId) => {
            const post = posts.find((p) => p.id === postId);
            if (post) handleDeleteClick(post);
          }}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setPostToEdit(null);
          }}
          onSave={(newPost) => {
            if (postToEdit) updateMutation.mutate(newPost);
            else mutation.mutate(newPost);
          }}
          postToEdit={postToEdit}
        />
        <DeleteModal
          isOpen={isDeleteOpen}
          onCancel={() => {
            setIsDeleteOpen(false);
          }}
          onDelete={confirmDelete}
          message={`Are you sure you want to delete the post "${
            postToDelete?.title || ""
          }"?`}
        />
      </main>
    </div>
  );
}

export default App;
