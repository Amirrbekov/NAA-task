import { useState } from "react";
import { mockPosts } from "./api/mock";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/Header";
import FilterBar from "./components/Filterbar/Filterbar";
import PostsTable from "./components/PostTable";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const totalPages = Math.ceil(mockPosts.length / postsPerPage);
  const currentPosts = mockPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header count={mockPosts.length} />
        <FilterBar />
        <PostsTable posts={currentPosts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
}

export default App;
