
import Navbar from "@/components/Navbar";
import ExploreSection from "@/components/ExploreSection";

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-fitPurple-700/20">
      <Navbar />
      
      <main className="fit-container py-6">
        <ExploreSection />
      </main>
    </div>
  );
};

export default ExplorePage;
