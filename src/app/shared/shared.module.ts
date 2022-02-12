import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FallbackPipe } from './pipes/fallback.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FallbackPipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FallbackPipe,
  ]
})
export class SharedModule {}