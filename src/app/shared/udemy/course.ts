export interface Course {
  id: number;
  title: string;
  url: string;
  created: string;
  favorite_time: string;
  avg_rating: number;
  completion_ratio: number;
  desciption: string;
  is_paid: boolean;
  price: string;
  price_detail: null;
  price_serve_tracking_id: string;
  visible_instructors: VisibleInstructors[];
  image_100x100: string;
  image_125_H: string;
  image_240x135: string;
  image_75x75: string;
  image_50x50: string;
  primary_category: CourseCategory;
  primary_subcategory: CourseSubcategory;
  image_480x270: string;
  headline: string;
  status_label: string;
  num_subscribers: string;
  num_reviews: number;
  num_quizzes: number;
  num_lectures: number;
  locale: string;
  is_wishlisted: boolean;
  is_private: boolean;
  is_in_any_ufb_content_collection: boolean;
  image_96x54: string;
  image_48x27: string;
  image_200_H: string;
  tracking_id: string;
  predictive_score: any;
  relevancy_score: any;
  input_features: any;
  lecture_search_result: any;
  curriculum_lectures: any[];
  order_in_results: any;
  curriculum_items: any[];
  instructor_name: any;
}

export interface VisibleInstructors {
  _class: string;
  title: string;
  name: string;
  display_name: string;
  job_title: string;
  image_50x50: string;
  image_100x100: string;
  initials: string;
  url: string;
}

export interface CourseCategory {
  sort_order: string;
  title: string;
  title_cleaned: string;
}

export interface CourseReview {
  content: string;
  course: Course;
  created: string;
  rating: number;
  title: string;
  user: User;
}

export interface CourseSubcategory {
  category: CourseCategory;
  sort_order: string;
  title: string;
  title_cleaned: string;
}

export interface Lecture {
  title: string;
}

export interface User {
  created: string;
  has_activated: boolean;
  image_100x100: string;
  image_125_H: string;
  image_200_H: string;
  image_50x50: string;
  image_75x75: string;
  is_disable: boolean;
  is_generated: boolean;
  job_title: string;
  locale: string;
  name: string;
  num_subscribed_courses: number;
  surname: string;
  time_zone: string;
  title: string;
  url: string;
  url_title: string;
}

export interface UdemyResponse{
  count: number
  next: string
  previous: any
  results: Course[]
}