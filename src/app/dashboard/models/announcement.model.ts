interface Employee {
  id: number;
  name: string;
  department: string;
}

export interface Announcement {
  id: number;
  description: string;
  employee: Employee;
}

export interface AllAnnouncementsApiRsponse {
  status: string;
  errors: { field: string; errorMessage: string }[];
  results: Announcement[];
}
