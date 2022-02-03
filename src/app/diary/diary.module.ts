import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CalorieRecordsGridComponent } from './components/calorie-records-grid/calorie-records-grid.component';
import { WeightRecordsGridComponent } from './components/weight-records-grid/weight-records-grid.component';
import { DiaryComponent } from './components/diary/diary.component';
import { SharedModule } from '../shared/shared.module';
import { diaryReducer } from './state/diary.reducer';
import { DiaryEffects } from './state/diary.effects';
import { diaryStateStoreName } from './state/diary.state';

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
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  declarations: [
    CalorieRecordsGridComponent,
    WeightRecordsGridComponent,
    DiaryComponent,
  ]
})
export class DiaryModule {}