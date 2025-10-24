import { Exercise, WorkoutSession, SavedWorkout } from '../types/workout';

const EXERCISES_KEY = 'fitness_exercises';
const SESSIONS_KEY = 'fitness_sessions';
const SAVED_WORKOUTS_KEY = 'fitness_saved_workouts';

export const storageUtils = {
  // Exercises
  getExercises: (): Exercise[] => {
    const data = localStorage.getItem(EXERCISES_KEY);
    return data ? JSON.parse(data) : getDefaultExercises();
  },
  
  saveExercises: (exercises: Exercise[]) => {
    localStorage.setItem(EXERCISES_KEY, JSON.stringify(exercises));
  },
  
  addExercise: (exercise: Exercise) => {
    const exercises = storageUtils.getExercises();
    exercises.push(exercise);
    storageUtils.saveExercises(exercises);
  },
  
  // Workout Sessions
  getSessions: (): WorkoutSession[] => {
    const data = localStorage.getItem(SESSIONS_KEY);
    if (!data) return [];
    const sessions = JSON.parse(data);
    return sessions.map((s: any) => ({ ...s, date: new Date(s.date) }));
  },
  
  saveSessions: (sessions: WorkoutSession[]) => {
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
  },
  
  addSession: (session: WorkoutSession) => {
    const sessions = storageUtils.getSessions();
    sessions.push(session);
    storageUtils.saveSessions(sessions);
  },
  
  // Saved Workouts
  getSavedWorkouts: (): SavedWorkout[] => {
    const data = localStorage.getItem(SAVED_WORKOUTS_KEY);
    if (!data) return [];
    const workouts = JSON.parse(data);
    return workouts.map((w: any) => ({ ...w, date: new Date(w.date) }));
  },
  
  saveSavedWorkouts: (workouts: SavedWorkout[]) => {
    localStorage.setItem(SAVED_WORKOUTS_KEY, JSON.stringify(workouts));
  },
  
  addSavedWorkout: (workout: SavedWorkout) => {
    const workouts = storageUtils.getSavedWorkouts();
    workouts.push(workout);
    storageUtils.saveSavedWorkouts(workouts);
  },
  
  deleteSavedWorkout: (id: string) => {
    const workouts = storageUtils.getSavedWorkouts();
    const filtered = workouts.filter(w => w.id !== id);
    storageUtils.saveSavedWorkouts(filtered);
  }
};

function getDefaultExercises(): Exercise[] {
  return [
    {
      id: '1',
      name: 'Push-up',
      muscleGroup: 'Ngực',
      instructions: 'Nằm sấp, đặt tay rộng bằng vai, đẩy người lên xuống',
      reps: 15,
      calories: 7,
      duration: 2,
      imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400'
    },
    {
      id: '2',
      name: 'Squat',
      muscleGroup: 'Chân',
      instructions: 'Đứng thẳng, chân rộng bằng vai, ngồi xuống như ngồi ghế',
      reps: 20,
      calories: 10,
      duration: 3,
      imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400'
    },
    {
      id: '3',
      name: 'Plank',
      muscleGroup: 'Bụng',
      instructions: 'Chống tay hoặc khuỷu tay, giữ thẳng người',
      reps: 1,
      calories: 5,
      duration: 1,
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
    },
    {
      id: '4',
      name: 'Bicep Curl',
      muscleGroup: 'Tay',
      instructions: 'Cầm tạ, uốn cong tay về phía vai',
      reps: 12,
      calories: 6,
      duration: 2,
      imageUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400'
    },
    {
      id: '5',
      name: 'Shoulder Press',
      muscleGroup: 'Vai',
      instructions: 'Đẩy tạ từ vai lên trên đầu',
      reps: 10,
      calories: 8,
      duration: 2,
      imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400'
    },
    {
      id: '6',
      name: 'Pull-up',
      muscleGroup: 'Lưng',
      instructions: 'Treo xà đơn, kéo người lên đến khi cằm qua xà',
      reps: 8,
      calories: 9,
      duration: 2,
      imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400'
    },
    {
      id: '7',
      name: 'Crunch',
      muscleGroup: 'Bụng',
      instructions: 'Nằm ngửa, gập bụng lên',
      reps: 20,
      calories: 5,
      duration: 2,
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
    },
    {
      id: '8',
      name: 'Lunge',
      muscleGroup: 'Chân',
      instructions: 'Bước chân về phía trước, hạ thấp người xuống',
      reps: 15,
      calories: 8,
      duration: 3,
      imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400'
    }
  ];
}
