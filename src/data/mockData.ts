import { User, WorkoutPost, Comment, WorkoutType } from "../types";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Vansh Saini",
    username: "vanshfit",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop",
    bio: "Fitness enthusiast | Marathon runner 🏃‍♀️ | Sharing my fitness journey",
    followers: 1542,
    following: 365,
    workouts: 87
  },
  {
    id: "2",
    name: "Ishaan Sharda",
    username: "ishaanfit",
    avatar: "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=1470&auto=format&fit=crop",
    bio: "Personal trainer | Weightlifting specialist 🏋️‍♂️ | Let's get stronger together",
    followers: 2318,
    following: 412,
    workouts: 156
  },
  {
    id: "3",
    name: "Tejas Mehra",
    username: "tejasfit",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop",
    bio: "Yoga instructor | Meditation advocate 🧘‍♀️ | Mind & body wellness",
    followers: 3245,
    following: 283,
    workouts: 112
  },
  {
    id: "4",
    name: "Utkarsh Kumar",
    username: "utkarshlift",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
    bio: "Crossfit athlete | Nutrition coach 🥗 | Push your limits",
    followers: 987,
    following: 564,
    workouts: 78
  },
  {
    id: "5",
    name: "Hardik Agarwal",
    username: "hardikhiit",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop",
    bio: "HIIT specialist | Former athlete 🏆 | Transform your body",
    followers: 4562,
    following: 321,
    workouts: 203
  }
];

export const mockPosts: WorkoutPost[] = [
  {
    id: "1",
    userId: "1",
    user: mockUsers[0],
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1470&auto=format&fit=crop",
    description: "Morning run complete! Pushed myself to a new personal best today on a 5K route. 🏃‍♀️💪 #FitnessGoals #MorningRun",
    likes: 243,
    comments: 28,
    timestamp: "2025-04-12T08:30:00Z",
    workout: {
      type: WorkoutType.Running,
      duration: 45,
      distance: 5,
      calories: 520
    },
    isLiked: false
  },
  {
    id: "2",
    userId: "2",
    user: mockUsers[1],
    image: "https://images.unsplash.com/photo-1526403646408-57b94c30d1d4?q=80&w=1470&auto=format&fit=crop",
    description: "Hit a new PR on conventional deadlifts today! 315lbs x 5 reps. Feeling strong and focused! 🏋️‍♂️ #Deadlifts #StrengthTraining #PersonalRecord",
    likes: 187,
    comments: 42,
    timestamp: "2025-04-11T16:45:00Z",
    workout: {
      type: WorkoutType.WeightLifting,
      duration: 75,
      calories: 450
    },
    isLiked: true
  },
  {
    id: "3",
    userId: "3",
    user: mockUsers[2],
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1470&auto=format&fit=crop",
    description: "Finding peace in my practice today. Remember that consistency is key to progress in yoga. 🧘‍♀️✨ #YogaJourney #Mindfulness",
    likes: 329,
    comments: 16,
    timestamp: "2025-04-10T18:20:00Z",
    workout: {
      type: WorkoutType.Yoga,
      duration: 60,
      calories: 250
    },
    isLiked: false
  },
  {
    id: "4",
    userId: "4",
    user: mockUsers[3],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    description: "Today's WOD was brutal but so worth it! Feeling stronger every day. 💯 #CrossFit #WorkoutOfTheDay #NoExcuses",
    likes: 271,
    comments: 31,
    timestamp: "2025-04-09T12:15:00Z",
    workout: {
      type: WorkoutType.HIIT,
      duration: 40,
      calories: 580
    },
    isLiked: true
  },
  {
    id: "5",
    userId: "5",
    user: mockUsers[4],
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop",
    description: "Beach workout vibes! There's nothing better than exercising with this view. 🏝️ Who's joining me tomorrow? #BeachWorkout #FitLife",
    likes: 412,
    comments: 47,
    timestamp: "2025-04-08T09:30:00Z",
    workout: {
      type: WorkoutType.Other,
      duration: 55,
      calories: 320
    },
    isLiked: false
  }
];

export const mockComments: Comment[] = [
  {
    id: "1",
    userId: "2",
    user: mockUsers[1],
    postId: "1",
    text: "Amazing progress! Keep it up! 💪",
    timestamp: "2025-04-12T09:15:00Z"
  },
  {
    id: "2",
    userId: "3",
    user: mockUsers[2],
    postId: "1",
    text: "What's your typical morning routine before runs?",
    timestamp: "2025-04-12T10:30:00Z"
  },
  {
    id: "3",
    userId: "5",
    user: mockUsers[4],
    postId: "1",
    text: "Impressive pace! We should run together sometime!",
    timestamp: "2025-04-12T11:05:00Z"
  },
  {
    id: "4",
    userId: "1",
    user: mockUsers[0],
    postId: "2",
    text: "That's some serious weight! Congrats on the PR! 🎉",
    timestamp: "2025-04-11T17:20:00Z"
  },
  {
    id: "5",
    userId: "4",
    user: mockUsers[3],
    postId: "2",
    text: "What's your deadlift program? I'm looking to improve mine.",
    timestamp: "2025-04-11T18:45:00Z"
  }
];

export const currentUser = mockUsers[0];
