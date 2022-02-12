import { Component, Input, OnInit } from '@angular/core';
import { CalorieRecord } from '../../../models/calorie-record';

@Component({
  selector: 'app-calorie-records-grid',
  templateUrl: './calorie-records-grid.component.html',
  styleUrls: ['./calorie-records-grid.component.scss']
})
export class CalorieRecordsGridComponent {

  @Input()
  records!: CalorieRecord[];
}
