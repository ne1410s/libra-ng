import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiaryService } from '../../diary.service';
import { CalorieRecord } from '../../models/calorie-record';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  calorieRecords$!: Observable<CalorieRecord[]>;

  constructor(private diaryService: DiaryService) { }

  ngOnInit(): void {
    this.calorieRecords$ = this.diaryService.getCalorieRecords();
  }

}
