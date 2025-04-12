
import { User } from "@/types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, Users, Calendar, Camera, Medal } from "lucide-react";

interface UserProfileProps {
  user: User;
  isCurrentUser?: boolean;
}

const UserProfile = ({ user, isCurrentUser = false }: UserProfileProps) => {
  return (
    <div className="animate-slide-up">
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-fitPurple-300 to-fitPurple-400"></div>
        <CardContent className="pt-0">
          <div className="flex flex-col items-center -mt-16">
            <Avatar className="h-32 w-32 border-4 border-white dark:border-fitPurple-700">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-4xl">{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-muted-foreground">@{user.username}</p>
              
              {user.bio && (
                <p className="mt-3 max-w-md text-center">{user.bio}</p>
              )}
            </div>
            
            <div className="flex justify-center gap-8 mt-6 w-full">
              <div className="text-center">
                <p className="text-2xl font-bold">{user.workouts}</p>
                <p className="text-sm text-muted-foreground">Workouts</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{user.followers}</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{user.following}</p>
                <p className="text-sm text-muted-foreground">Following</p>
              </div>
            </div>
            
            <div className="mt-6 w-full flex justify-center">
              {isCurrentUser ? (
                <Button variant="outline" className="w-full md:w-auto">Edit Profile</Button>
              ) : (
                <Button className="w-full md:w-auto bg-fitPurple-400 hover:bg-fitPurple-500">Follow</Button>
              )}
            </div>
            
            <div className="mt-8 w-full">
              <Tabs defaultValue="posts" className="w-full">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="posts" className="flex items-center justify-center">
                    <Camera className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Posts</span>
                  </TabsTrigger>
                  <TabsTrigger value="workouts" className="flex items-center justify-center">
                    <Dumbbell className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Workouts</span>
                  </TabsTrigger>
                  <TabsTrigger value="achievements" className="flex items-center justify-center">
                    <Medal className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Achievements</span>
                  </TabsTrigger>
                  <TabsTrigger value="calendar" className="flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Calendar</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="posts">
                  <div className="grid grid-cols-3 gap-1">
                    {Array(9).fill(0).map((_, i) => (
                      <div key={i} className="aspect-square bg-muted"></div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="workouts">
                  <div className="flex flex-col items-center justify-center py-12">
                    <Dumbbell className="h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-lg font-medium">Workout History Coming Soon</p>
                    <p className="text-muted-foreground">Track your fitness journey over time</p>
                  </div>
                </TabsContent>
                <TabsContent value="achievements">
                  <div className="flex flex-col items-center justify-center py-12">
                    <Medal className="h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-lg font-medium">Achievements Coming Soon</p>
                    <p className="text-muted-foreground">Earn badges and celebrate milestones</p>
                  </div>
                </TabsContent>
                <TabsContent value="calendar">
                  <div className="flex flex-col items-center justify-center py-12">
                    <Calendar className="h-12 w-12 text-muted-foreground mb-2" />
                    <p className="text-lg font-medium">Calendar View Coming Soon</p>
                    <p className="text-muted-foreground">Visualize your workout consistency</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
