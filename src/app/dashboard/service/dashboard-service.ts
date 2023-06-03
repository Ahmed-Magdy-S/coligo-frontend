import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllAnnouncementsApiRsponse } from '../models/announcement.model';
import { AllQuizzesApiResponse } from '../models/quiz.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  BASE_URL: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }


  getAllAnnouncements(): Observable<AllAnnouncementsApiRsponse>{
    return this.http.get<AllAnnouncementsApiRsponse>(`${this.BASE_URL}/announcements`);
  }

  getAllQuizzes(): Observable<AllQuizzesApiResponse>{
    return this.http.get<AllQuizzesApiResponse>(`${this.BASE_URL}/quizzes`);
  }

}
