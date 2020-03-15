import { Component, OnInit, ChangeDetectorRef, Inject, AfterViewChecked } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit, AfterViewChecked {

  color: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ModalConfirmData,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.color = '#28a745';
    this.changeDetector.detectChanges();
  }

}

export class ModalConfirmData {
  title: string;
  content: string;
  confirmButtonLabel: string;
  closeButtonLabel: string;

  constructor(data?: any) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.confirmButtonLabel = data.confirmButtonLabel;
      this.closeButtonLabel = data.closeButtonLabel;
    }
  }
}
