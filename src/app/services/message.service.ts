import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent, ModalAlertData, AlertType } from '../components/alert/alert.component';
import { ConfirmComponent, ModalConfirmData } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    public dialog: MatDialog
  ) { }

  getAlertTitle(alertType: AlertType) {
    switch (alertType) {
      case AlertType.INFO:
        return 'INFO';
      case AlertType.WARNING:
        return 'WARNING';
      case AlertType.ERROR:
        return 'ERROR';
    }
  }

  openAlertModal(message: string, alertType: AlertType) {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '30vw',
      data: new ModalAlertData({
        title: this.getAlertTitle(alertType),
        content: message,
        closeButtonLabel: 'Close',
        alertType
      })
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('After Close Modal', result);
    });
  }

  openInfoModal(message: string) {
    this.openAlertModal(message, AlertType.INFO);
  }

  openWarningModal(message: string) {
    this.openAlertModal(message, AlertType.WARNING);
  }

  openErrorModal(message: string) {
    this.openAlertModal(message, AlertType.ERROR);
  }

  openConfirmModal(message: string, callBackFunction: any) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '30vw',
      data: new ModalConfirmData({
        title: 'CONFIRM',
        content: message,
        confirmButtonLabel: 'OK',
        closeButtonLabel: 'Close'
      })
    });

    dialogRef.afterClosed().subscribe(result => callBackFunction(result));
  }
}
