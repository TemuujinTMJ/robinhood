export interface User {
  id: number;
  fist_name: string;
  email: string;
  badge: number;
  last_name: string;
  phone: string;
  role: number;
  status: number;
  subscription_type: number;
  trading_account: number;
  xp: number;
}
export interface Course {
  course_type: number;
  created_at: string;
  description: string;
  id: number;
  is_visible: number;
  lessons: [];
  name: string;
  thumbnail_path: string;
  updated_at: string;
  user_id: number;
}
export interface PipPair {
  pair: string;
  coefficient: number;
}

interface Answer {
  point: number;
  answer: string;
}
interface Question {
  id: number;
  quiz_id: number;
  question: string;
  answers: Answer[];
  created_at: string;
  updated_at: string;
}

export interface Result {
  id: number;
  name: string;
  result: string;
  point_range: [number, number];
  quiz_id: number;
  created_at: string;
  updated_at: string;
}
export interface Quiz {
  id: number;
  user_id: number;
  name: string;
  description: string;
  quiz_type: number;
  is_visible: number;
  image_path: string;
  created_at: string;
  updated_at: string;
  questions: Question[];
  results: Result[];
}
