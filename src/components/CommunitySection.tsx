
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock, Dumbbell, MapPin, Users } from "lucide-react";
import { mockUsers } from "@/data/mockData";

const CommunitySection = () => {
  // Mock upcoming events
  const upcomingEvents = [
    {
      id: "1",
      title: "5K Group Run",
      location: "Central Park",
      dateTime: "2025-04-15T08:00:00Z",
      participants: 28,
      type: "Running"
    },
    {
      id: "2",
      title: "HIIT Bootcamp",
      location: "Fitness Hub Gym",
      dateTime: "2025-04-18T18:30:00Z",
      participants: 12,
      type: "HIIT"
    },
    {
      id: "3",
      title: "Yoga in the Park",
      location: "Riverside Park",
      dateTime: "2025-04-20T09:00:00Z",
      participants: 15,
      type: "Yoga"
    }
  ];

  // Mock challenges
  const challenges = [
    {
      id: "1",
      title: "30-Day Push-up Challenge",
      participants: 156,
      daysLeft: 22,
      progress: 32
    },
    {
      id: "2",
      title: "Weekly Distance Challenge",
      participants: 89,
      daysLeft: 4,
      progress: 65
    },
    {
      id: "3",
      title: "Strength Training Streak",
      participants: 112,
      daysLeft: 18,
      progress: 48
    }
  ];

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatEventTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <div className="animate-slide-up">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Community</h1>
        <p className="text-muted-foreground">Connect with others and join fitness events</p>
      </div>

      <Tabs defaultValue="events" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="events" className="flex-1">Events</TabsTrigger>
          <TabsTrigger value="challenges" className="flex-1">Challenges</TabsTrigger>
          <TabsTrigger value="leaderboard" className="flex-1">Leaderboard</TabsTrigger>
        </TabsList>
        
        <TabsContent value="events">
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Button className="bg-fitPurple-400 hover:bg-fitPurple-500">Create Event</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2 text-fitPurple-400" />
                        <span>{formatEventDate(event.dateTime)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-fitPurple-400" />
                        <span>{formatEventTime(event.dateTime)}</span>
                      </div>
                      <div className="flex items-center">
                        <Dumbbell className="h-4 w-4 mr-2 text-fitPurple-400" />
                        <span>{event.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-fitPurple-400" />
                        <span>{event.participants} going</span>
                      </div>
                      
                      <div className="pt-2">
                        <Button className="w-full bg-fitPurple-400 hover:bg-fitPurple-500">
                          Join Event
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Button variant="outline">View All Events</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="challenges">
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Active Challenges</h2>
              <Button className="bg-fitPurple-400 hover:bg-fitPurple-500">Create Challenge</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle>{challenge.title}</CardTitle>
                    <CardDescription>{challenge.participants} participants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="w-full bg-fitPurple-100 dark:bg-fitPurple-600/30 rounded-full h-2.5">
                        <div 
                          className="bg-fitPurple-400 h-2.5 rounded-full" 
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>{challenge.progress}% complete</span>
                        <span>{challenge.daysLeft} days left</span>
                      </div>
                      
                      <div className="flex -space-x-2 overflow-hidden pt-3">
                        {[1, 2, 3, 4].map((i) => (
                          <Avatar key={i} className="border-2 border-white dark:border-fitPurple-700 w-8 h-8">
                            <AvatarFallback>{i}</AvatarFallback>
                          </Avatar>
                        ))}
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-fitPurple-100 dark:bg-fitPurple-600 text-xs border-2 border-white dark:border-fitPurple-700">
                          +{challenge.participants - 4}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button className="w-full bg-fitPurple-400 hover:bg-fitPurple-500">
                          Join Challenge
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <Button variant="outline">View All Challenges</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="leaderboard">
          <div className="space-y-4 mt-4">
            <h2 className="text-xl font-semibold">Weekly Leaderboard</h2>
            
            <div className="bg-white dark:bg-fitPurple-700 rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Dumbbell className="h-5 w-5 mr-2 text-fitPurple-400" />
                  <span className="font-medium">Most Active Users</span>
                </div>
                <Button variant="outline" size="sm">This Week</Button>
              </div>
              
              <div className="space-y-4">
                {mockUsers.slice(0, 5).map((user, index) => (
                  <div key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 text-center font-bold">
                        {index + 1}
                      </div>
                      <Avatar className="ml-2">
                        <AvatarImage src={user.avatar} alt={user.username} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">@{user.username}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{120 - index * 15} points</div>
                      <div className="text-xs text-muted-foreground">{10 - index} workouts</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <Button variant="outline" className="w-full">View Full Leaderboard</Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunitySection;
