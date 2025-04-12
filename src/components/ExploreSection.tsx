
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorkoutType } from "@/types";
import { Badge } from "@/components/ui/badge";

const ExploreSection = () => {
  const popularTags = [
    "RunningCommunity", 
    "FitnessGoals", 
    "StrengthTraining", 
    "YogaLife", 
    "HIITworkout"
  ];

  const workoutTypes = Object.values(WorkoutType);

  return (
    <div className="animate-slide-up">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Explore</h1>
        <p className="text-muted-foreground">Discover new workouts and connect with the fitness community</p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search for users, workouts, or hashtags..." 
          className="pl-10"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-fitPurple-100 text-fitPurple-500 hover:bg-fitPurple-200 cursor-pointer"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="people">People</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
          </TabsList>
          
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
        
        <TabsContent value="all">
          <div className="space-y-4">
            <h3 className="font-medium">Trending Workouts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {workoutTypes.slice(0, 4).map((type) => (
                <div 
                  key={type} 
                  className="aspect-square bg-fitPurple-100 dark:bg-fitPurple-600/30 rounded-lg flex flex-col items-center justify-center p-4 hover:bg-fitPurple-200 dark:hover:bg-fitPurple-600/50 transition-colors cursor-pointer"
                >
                  <div className="text-fitPurple-400 text-2xl font-bold mb-2">
                    {type === WorkoutType.Running ? "🏃‍♂️" : 
                     type === WorkoutType.Cycling ? "🚴‍♀️" : 
                     type === WorkoutType.Swimming ? "🏊‍♀️" : 
                     type === WorkoutType.WeightLifting ? "🏋️‍♀️" : 
                     type === WorkoutType.HIIT ? "⚡" : 
                     type === WorkoutType.Yoga ? "🧘‍♀️" : "💪"}
                  </div>
                  <div className="text-center font-medium">{type}</div>
                  <div className="text-xs text-muted-foreground mt-1">325 posts</div>
                </div>
              ))}
            </div>
            
            <h3 className="font-medium mt-6">Suggested Users</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-fitPurple-700 rounded-lg p-4 shadow-sm flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-fitPurple-200 flex items-center justify-center text-lg font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">User {i}</div>
                      <div className="text-xs text-muted-foreground">@user{i}</div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-fitPurple-400 hover:bg-fitPurple-500">Follow</Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="people">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white dark:bg-fitPurple-700 rounded-lg p-4 shadow-sm flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-fitPurple-200 flex items-center justify-center text-lg font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">User {i}</div>
                    <div className="text-xs text-muted-foreground">@user{i}</div>
                  </div>
                </div>
                <Button size="sm" className="bg-fitPurple-400 hover:bg-fitPurple-500">Follow</Button>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="workouts">
          <div className="grid grid-cols-2 gap-4">
            {workoutTypes.map((type) => (
              <div 
                key={type} 
                className="bg-white dark:bg-fitPurple-700 rounded-lg flex items-center p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="mr-3 text-3xl">
                  {type === WorkoutType.Running ? "🏃‍♂️" : 
                   type === WorkoutType.Cycling ? "🚴‍♀️" : 
                   type === WorkoutType.Swimming ? "🏊‍♀️" : 
                   type === WorkoutType.WeightLifting ? "🏋️‍♀️" : 
                   type === WorkoutType.HIIT ? "⚡" : 
                   type === WorkoutType.Yoga ? "🧘‍♀️" : "💪"}
                </div>
                <div>
                  <div className="font-medium">{type}</div>
                  <div className="text-xs text-muted-foreground">View all posts</div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExploreSection;
