import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CalorieRecordsGridComponent } from './components/ui-only/calorie-records-grid/calorie-records-grid.component';
import { WeightRecordsGridComponent } from './components/ui-only/weight-records-grid/weight-records-grid.component';
import { DiaryComponent } from './components/diary-shell/smart-diary.component';
import { SharedModule } from '../shared/shared.module';
import { DiaryEffects } from './state/diary.effects';
import { diaryReducer, diaryStateStoreName } from './state/diary.reducer';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([    
      // Component routes
      { path: 'calorie-records', component: CalorieRecordsGridComponent },
      { path: 'weight-records', component: WeightRecordsGridComponent },   
      { path: '', component: DiaryComponent },   
      // Fallback route
      { path: '**', redirectTo: '', pathMatch: 'full' },      
    ]),
    StoreModule.forFeature(diaryStateStoreName, diaryReducer),
    EffectsModule.forFeature([DiaryEffects]),
  ],
  declarations: [
    CalorieRecordsGridComponent,
    WeightRecordsGridComponent,
    DiaryComponent,
  ]
})
export class DiaryModule {}