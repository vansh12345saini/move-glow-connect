
export type User = {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  followers: number;
  following: number;
  workouts: number;
};

export type WorkoutPost = {
  id: string;
  userId: string;
  user: User;
  image: string;
  description: string;
  likes: number;
  comments: number;
  timestamp: string;
  workout?: {
    type: WorkoutType;
    duration?: number; // in minutes
    distance?: number; // in kilometers
    calories?: number;
  };
  isLiked: boolean;
};

export type Comment = {
  id: string;
  userId: string;
  user: User;
  postId: string;
  text: string;
  timestamp: string;
};

export enum WorkoutType {
  Running = "Running",
  Cycling = "Cycling",
  Swimming = "Swimming",
  WeightLifting = "Weight Lifting",
  HIIT = "HIIT",
  Yoga = "Yoga",
  Other = "Other"
}
