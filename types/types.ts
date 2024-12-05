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
