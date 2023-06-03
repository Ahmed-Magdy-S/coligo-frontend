export interface Quiz {
  id: number;
  unit: number;
  course: string;
  topic: string;
  dueTo: string;
}

export interface AllQuizzesApiResponse {
  status: string;
  errors: { field: string; errorMessage: string }[];
  results: Quiz[];
}
