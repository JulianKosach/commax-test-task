import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { ToolbarComponent, } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    ToolbarComponent,
  ]
})
export class SharedModule { }
