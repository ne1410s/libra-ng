import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalorieRecordsGridComponent } from './components/calorie-records-grid/calorie-records-grid.component';
import { WeightRecordsGridComponent } from './components/weight-records-grid/weight-records-grid.component';
import { DiaryComponent } from './components/diary/diary.component';

@NgModule({
  imports: [
    RouterModule.forChild([    
      // Component routes
      { path: 'calorie-records', component: CalorieRecordsGridComponent },
      { path: 'weight-records', component: WeightRecordsGridComponent },   
      { path: '', component: DiaryComponent },   
      // Fallback route
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
  ],
  declarations: [
    CalorieRecordsGridComponent,
    WeightRecordsGridComponent,
    DiaryComponent,
  ]
})
export class DiaryModule {}