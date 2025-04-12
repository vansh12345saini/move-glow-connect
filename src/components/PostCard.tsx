
import { useState } from "react";
import { Heart, MessageCircle, Share2, MoreHorizontal, Calendar, Clock, Flame } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { WorkoutPost } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardContent, Card, CardHeader, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PostCardProps {
  post: WorkoutPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const formattedTime = formatDistanceToNow(new Date(post.timestamp), { addSuffix: true });

  return (
    <Card className="fit-card mb-6 animate-slide-up">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={post.user.avatar} alt={post.user.username} />
              <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{post.user.name}</div>
              <div className="text-sm text-muted-foreground">@{post.user.username}</div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-sm text-muted-foreground mr-2">{formattedTime}</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Save Post</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
                <DropdownMenuItem>Unfollow</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      
      <div className="relative">
        <img 
          src={post.image} 
          alt="Workout" 
          className="w-full h-64 md:h-96 object-cover"
        />
        {post.workout && (
          <div className="absolute bottom-3 left-3">
            <Badge variant="secondary" className="bg-black/70 text-white backdrop-blur-sm">
              {post.workout.type}
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="pt-4">
        <p className="text-sm md:text-base mb-3">{post.description}</p>
        
        {post.workout && (
          <div className="bg-fitPurple-100 dark:bg-fitPurple-600/30 rounded-lg p-3 flex justify-between items-center mb-2">
            {post.workout.duration && (
              <div className="flex flex-col items-center">
                <div className="flex items-center text-fitPurple-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-xs">Time</span>
                </div>
                <span className="font-semibold">{post.workout.duration} min</span>
              </div>
            )}
            
            {post.workout.distance && (
              <div className="flex flex-col items-center">
                <div className="flex items-center text-fitPurple-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-xs">Distance</span>
                </div>
                <span className="font-semibold">{post.workout.distance} km</span>
              </div>
            )}
            
            {post.workout.calories && (
              <div className="flex flex-col items-center">
                <div className="flex items-center text-fitPurple-400">
                  <Flame className="h-4 w-4 mr-1" />
                  <span className="text-xs">Calories</span>
                </div>
                <span className="font-semibold">{post.workout.calories}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="w-full">
          <Separator className="my-2" />
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center space-x-1" 
              onClick={handleLike}
            >
              <Heart 
                className={`h-5 w-5 ${isLiked ? 'text-red-500 fill-red-500' : ''} ${isLiked ? 'animate-heart-beat' : ''}`} 
              />
              <span>{likeCount}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center space-x-1">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
