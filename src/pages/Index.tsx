
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Dumbbell, TrendingUp, Zap } from "lucide-react";
import { mockPosts } from "@/data/mockData";
import { WorkoutPost } from "@/types";

const Index = () => {
  const [posts, setPosts] = useState<WorkoutPost[]>(mockPosts);
  const [filter, setFilter] = useState<string>("all");

  const filteredPosts = filter === "all" 
    ? posts 
    : posts.filter(post => post.workout?.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-fitPurple-700/20">
      <Navbar />
      
      <main className="fit-container py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Feed Section */}
          <div className="flex-1">
            <div className="mb-6 flex items-center space-x-4 overflow-x-auto pb-2 scrollbar-hide">
              <Button 
                variant={filter === "all" ? "default" : "outline"} 
                className={filter === "all" ? "bg-fitPurple-400 hover:bg-fitPurple-500" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button 
                variant={filter === "running" ? "default" : "outline"} 
                className={filter === "running" ? "bg-fitPurple-400 hover:bg-fitPurple-500" : ""}
                onClick={() => setFilter("running")}
              >
                Running
              </Button>
              <Button 
                variant={filter === "weight lifting" ? "default" : "outline"} 
                className={filter === "weight lifting" ? "bg-fitPurple-400 hover:bg-fitPurple-500" : ""}
                onClick={() => setFilter("weight lifting")}
              >
                Weights
              </Button>
              <Button 
                variant={filter === "yoga" ? "default" : "outline"} 
                className={filter === "yoga" ? "bg-fitPurple-400 hover:bg-fitPurple-500" : ""}
                onClick={() => setFilter("yoga")}
              >
                Yoga
              </Button>
              <Button 
                variant={filter === "hiit" ? "default" : "outline"} 
                className={filter === "hiit" ? "bg-fitPurple-400 hover:bg-fitPurple-500" : ""}
                onClick={() => setFilter("hiit")}
              >
                HIIT
              </Button>
            </div>
            
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))
            ) : (
              <div className="bg-white dark:bg-fitPurple-700 rounded-lg p-8 text-center">
                <Dumbbell className="h-12 w-12 mx-auto text-fitPurple-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                <p className="text-muted-foreground mb-4">
                  There are no posts with the selected filter. Try a different category.
                </p>
                <Button 
                  className="bg-fitPurple-400 hover:bg-fitPurple-500"
                  onClick={() => setFilter("all")}
                >
                  View All Posts
                </Button>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="md:w-72 lg:w-80">
            <div className="space-y-6">
              <div className="bg-white dark:bg-fitPurple-700 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Daily Motivation</h3>
                <div className="p-3 bg-fitPurple-100 dark:bg-fitPurple-600/30 rounded-lg mb-3">
                  <p className="text-fitPurple-500 dark:text-fitPurple-200 italic">
                    "The only bad workout is the one that didn't happen."
                  </p>
                </div>
                <div className="text-center">
                  <Button className="w-full bg-fitPurple-400 hover:bg-fitPurple-500">
                    <Zap className="h-4 w-4 mr-2" />
                    Get Workout Ideas
                  </Button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-fitPurple-700 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Trending Workouts</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-fitPurple-100 dark:bg-fitPurple-600/30 flex items-center justify-center mr-3">
                        🏃‍♂️
                      </div>
                      <span>5K Training</span>
                    </div>
                    <span className="text-xs text-fitPurple-400 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      12%
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-fitPurple-100 dark:bg-fitPurple-600/30 flex items-center justify-center mr-3">
                        🏋️‍♀️
                      </div>
                      <span>Strength HIIT</span>
                    </div>
                    <span className="text-xs text-fitPurple-400 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      8%
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-fitPurple-100 dark:bg-fitPurple-600/30 flex items-center justify-center mr-3">
                        🧘‍♀️
                      </div>
                      <span>Power Yoga</span>
                    </div>
                    <span className="text-xs text-fitPurple-400 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      6%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-fitPurple-700 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Your Progress</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>This Week</span>
                      <span>3/5 workouts</span>
                    </div>
                    <div className="w-full bg-fitPurple-100 dark:bg-fitPurple-600/30 rounded-full h-2">
                      <div className="bg-fitPurple-400 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Monthly Goal</span>
                      <span>12/20 workouts</span>
                    </div>
                    <div className="w-full bg-fitPurple-100 dark:bg-fitPurple-600/30 rounded-full h-2">
                      <div className="bg-fitPurple-400 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-2">
                    <Button variant="outline" className="w-full">
                      View Full Stats
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
