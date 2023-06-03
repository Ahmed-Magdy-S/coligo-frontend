import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard-service';
import { Announcement } from '../models/announcement.model';
import { Quiz } from '../models/quiz.model';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  announcements: Announcement[] = [];
  quizzes: Quiz[] = [];

  constructor(private dashboardService: DashboardService){}

  ngOnInit(): void {
    this.dashboardService.getAllAnnouncements().subscribe((res)=>{
      this.announcements = res.results;
    });
    this.dashboardService.getAllQuizzes().subscribe((res)=>{
      this.quizzes = res.results;
      console.log(res.results)
    });


  }



}
