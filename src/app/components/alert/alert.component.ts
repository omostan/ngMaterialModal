import { Component, OnInit, ChangeDetectorRef, Inject, AfterViewChecked } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewChecked {

  color: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ModalAlertData,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() { // <== used to solve AfterViewChecked error
    this.changeDetector.detectChanges();
  }

  getAlertIcon() {
    switch (this.data.alertType) {
      case AlertType.INFO:
        this.color = '#01B0FD';
        return 'info';
      case AlertType.WARNING:
        this.color = '#FFC000';
        return 'warning';
      case AlertType.ERROR:
        this.color = '#FF0000';
        return 'error';
    }
  }
}

export class ModalAlertData {
  title: string;
  content: string;
  alertType: AlertType;
  closeButtonLabel: string;

  constructor(data?: any) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.alertType = data.alertType;
      this.closeButtonLabel = data.closeButtonLabel;
    }
  }
}

export enum AlertType {
  INFO, WARNING, ERROR
}
