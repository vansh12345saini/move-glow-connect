
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Camera, Clock, Dumbbell, MapPin } from "lucide-react";
import { WorkoutType } from "@/types";
import { useToast } from "@/hooks/use-toast";

const CreatePostForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [description, setDescription] = useState("");
  const [workoutType, setWorkoutType] = useState<string>("");
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!description) {
      toast({
        title: "Missing information",
        description: "Please add a description for your post",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would post to a server
    // For now, just show success and redirect
    toast({
      title: "Post created!",
      description: "Your workout has been posted successfully",
    });
    
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="animate-slide-up">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-2 border-dashed border-fitPurple-200 dark:border-fitPurple-600 rounded-lg p-8 text-center">
              <div className="flex flex-col items-center">
                <Camera className="h-10 w-10 text-muted-foreground mb-3" />
                <h3 className="text-lg font-medium">Upload Photo or Video</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  Drag and drop or click to upload
                </p>
                <Input
                  type="file"
                  className="max-w-xs"
                  accept="image/*,video/*"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Share details about your workout..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1"
                rows={4}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <Dumbbell className="mr-2 h-5 w-5 text-fitPurple-400" />
                <h3 className="text-lg font-medium">Workout Details</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="workout-type">Workout Type</Label>
                  <Select onValueChange={setWorkoutType} value={workoutType}>
                    <SelectTrigger id="workout-type" className="mt-1">
                      <SelectValue placeholder="Select workout type" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(WorkoutType).map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="duration">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Duration (minutes)
                  </Label>
                  <Input
                    id="duration"
                    placeholder="e.g. 45"
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="distance">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Distance (km)
                  </Label>
                  <Input
                    id="distance"
                    placeholder="e.g. 5.2"
                    type="number"
                    step="0.1"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="calories">
                    <Dumbbell className="inline h-4 w-4 mr-1" />
                    Calories Burned
                  </Label>
                  <Input
                    id="calories"
                    placeholder="e.g. 350"
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" type="button" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <Button type="submit" className="bg-fitPurple-400 hover:bg-fitPurple-500">
            Post Workout
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreatePostForm;
