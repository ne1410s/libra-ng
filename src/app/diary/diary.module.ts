import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChartModule } from 'primeng/chart';

import { CalorieRecordsGridComponent } from './components/ui/calorie-records-grid/calorie-records-grid.component';
import { WeightRecordsGridComponent } from './components/ui/weight-records-grid/weight-records-grid.component';
import { DiaryComponent } from './components/shell/diary-shell.component';
import { SharedModule } from '../shared/shared.module';
import { DiaryEffects } from './state/diary.effects';
import { diaryReducer, diaryStateStoreName } from './state/diary.reducer';
import { WeightRecordsChartComponent } from './components/ui/weight-records-chart/weight-records-chart.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([    
      // Component routes
      // { path: 'calorie-records', component: CalorieRecordsGridComponent },
      // { path: 'weight-records', component: WeightRecordsGridComponent },   
      { path: '', component: DiaryComponent },
    ]),
    StoreModule.forFeature(diaryStateStoreName, diaryReducer),
    EffectsModule.forFeature([DiaryEffects]),
    ChartModule,
  ],
  declarations: [
    CalorieRecordsGridComponent,
    WeightRecordsGridComponent,
    DiaryComponent,
    WeightRecordsChartComponent,
  ]
})
export class DiaryModule {}