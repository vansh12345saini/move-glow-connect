
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, Home, Users, PlusSquare, User, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currentUser } from "@/data/mockData";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-fitPurple-700 shadow-sm sticky top-0 z-50">
      <div className="fit-container py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-fitPurple-400">FitSocial</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-fitPurple-500 hover:text-fitPurple-400 transition-colors">
              <Home className="h-6 w-6" />
            </Link>
            <Link to="/explore" className="text-fitPurple-500 hover:text-fitPurple-400 transition-colors">
              <Search className="h-6 w-6" />
            </Link>
            <Link to="/create" className="text-fitPurple-500 hover:text-fitPurple-400 transition-colors">
              <PlusSquare className="h-6 w-6" />
            </Link>
            <Link to="/community" className="text-fitPurple-500 hover:text-fitPurple-400 transition-colors">
              <Users className="h-6 w-6" />
            </Link>
            <Button variant="ghost" size="icon" className="text-fitPurple-500 hover:text-fitPurple-400">
              <Bell className="h-6 w-6" />
            </Button>
            <Link to="/profile">
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatar} alt={currentUser.username} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-fitPurple-100 dark:hover:bg-fitPurple-600 transition-colors" onClick={toggleMobileMenu}>
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link to="/explore" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-fitPurple-100 dark:hover:bg-fitPurple-600 transition-colors" onClick={toggleMobileMenu}>
                <Search className="h-5 w-5" />
                <span>Explore</span>
              </Link>
              <Link to="/create" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-fitPurple-100 dark:hover:bg-fitPurple-600 transition-colors" onClick={toggleMobileMenu}>
                <PlusSquare className="h-5 w-5" />
                <span>Create Post</span>
              </Link>
              <Link to="/community" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-fitPurple-100 dark:hover:bg-fitPurple-600 transition-colors" onClick={toggleMobileMenu}>
                <Users className="h-5 w-5" />
                <span>Community</span>
              </Link>
              <Link to="/notifications" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-fitPurple-100 dark:hover:bg-fitPurple-600 transition-colors" onClick={toggleMobileMenu}>
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </Link>
              <Link to="/profile" className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-fitPurple-100 dark:hover:bg-fitPurple-600 transition-colors" onClick={toggleMobileMenu}>
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
