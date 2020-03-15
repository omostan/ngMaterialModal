import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngMaterialModal';

  constructor(
    private msgService: MessageService
  ) { }

  openInfoModal() {
    this.msgService.openInfoModal('Coronavirus is affecting people in all parts of the world!');
  }

  openWarningModal() {
    this.msgService.openWarningModal('Global warming is real... Do something about it!');
  }

  openErrorModal() {
    this.msgService.openErrorModal('Ahh... I made an error voting the wrong person to the oval office!');
  }

  openConfirmModal() {
    this.msgService.openConfirmModal(`Are you sure, you want another president?`, (answer: boolean) => {
      if (answer) {
        console.log('Yes, I really do.');
        return;
      }
      console.log(`No, I\'m happy!.`);
    });
  }
}
