import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  declarations: [
    AlertComponent,
    ConfirmComponent
  ],
  entryComponents: [
    AlertComponent,
    ConfirmComponent
  ]
})
export class MaterialModule { }
