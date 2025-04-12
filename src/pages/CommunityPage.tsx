
import Navbar from "@/components/Navbar";
import CommunitySection from "@/components/CommunitySection";

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-fitPurple-700/20">
      <Navbar />
      
      <main className="fit-container py-6">
        <CommunitySection />
      </main>
    </div>
  );
};

export default CommunityPage;
