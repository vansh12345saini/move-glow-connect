import Navbar from "@/components/Navbar";
import UserProfile from "@/components/UserProfile";
import { mockUsers, currentUser } from "@/data/mockData";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>();
  
  // If no username is provided, show current user profile
  // Otherwise find the user with matching username
  const profileUser = username 
    ? mockUsers.find(user => user.username === username) || currentUser 
    : currentUser;
  
  const isCurrentUser = profileUser.id === currentUser.id;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-fitPurple-700/20">
      <Navbar />
      
      <main className="fit-container py-6">
        <UserProfile user={profileUser} isCurrentUser={isCurrentUser} />
      </main>
    </div>
  );
};

export default ProfilePage;
