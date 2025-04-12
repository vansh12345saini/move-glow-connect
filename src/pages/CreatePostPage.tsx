
import Navbar from "@/components/Navbar";
import CreatePostForm from "@/components/CreatePostForm";

const CreatePostPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-fitPurple-700/20">
      <Navbar />
      
      <main className="fit-container py-6">
        <h1 className="text-3xl font-bold mb-6">Share Your Workout</h1>
        <CreatePostForm />
      </main>
    </div>
  );
};

export default CreatePostPage;
