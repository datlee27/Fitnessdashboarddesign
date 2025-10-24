export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  instructions: string;
  reps: number;
  calories: number;
  duration: number; // in minutes
  imageUrl?: string;
}

export type MuscleGroup = 'Tay' | 'Ngực' | 'Vai' | 'Chân' | 'Bụng' | 'Lưng';

export interface WorkoutSession {
  id: string;
  date: Date;
  exercises: WorkoutExercise[];
  totalCalories: number;
  totalDuration: number;
  saved: boolean;
}

export interface WorkoutExercise {
  exercise: Exercise;
  sets: number;
  actualDuration?: number;
}

export interface SavedWorkout {
  id: string;
  name: string;
  date: Date;
  muscleGroup: MuscleGroup;
  exercises: WorkoutExercise[];
  totalCalories: number;
  totalDuration: number;
}
