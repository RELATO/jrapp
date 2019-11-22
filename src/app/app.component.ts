import { Component, Optional, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AlertService } from '@addapptables/alert';
import { NotifierService, NotifierType } from '@addapptables/notifier';
import { FormModalComponent } from './form-modal/form-modal.component';
import { ModalService } from '@addapptables/modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ModalService ]
})
export class AppComponent {
  title = 'jrapp';


  constructor(private _alertService: AlertService,
              private readonly _translateService: TranslateService,
              private notifierService: NotifierService,
              // private _modalService: ModalService
              )
              {
                this.initDefaultLanguage();
              }

  initDefaultLanguage() {
    this._translateService.addLangs(['en', 'es']);
    this._translateService.setDefaultLang('en');
    const browserLang = this._translateService.getBrowserLang();
    const lang = browserLang.match(/en|es/) ? browserLang : 'en';
    this._translateService.use(lang);
  }

  openDialog() {
    this._alertService.showSimple('Alert', 'Simple alert');
  }

  openDialogSuccess() {
    this._alertService.showSuccess('Success', 'Saved successfully');
  }

  openDialogInfo() {
    this._alertService.showInfo('Info', 'Information');
  }

  openDialogWarning() {
    this._alertService.showWarning('Warn', 'Warning');
  }

  openDialogError() {
    this._alertService.showError('Error', 'Error');
  }

  openDialoConfirmation() {
    const dialog = this._alertService.showConfirmation('Confirmation', 'Are you sure delete alert?');
    dialog.beforeClose().subscribe((result) => {
      if (!result) { return; }
      switch (result.result) {
        case 'ok':
          console.log('ok');
          break;
        case 'cancel':
          console.log('cancel');
          break;
      }
    });
  }

  // showModal() {
  //   this._modalService.show(FormModalComponent);
  // }

  openNotifierSuccess() {
    this.notifierService.open({
      type: NotifierType.success,
      message: 'Notifier success'
    });
  }

  openNotifierInfo() {
    this.notifierService.open({
      type: NotifierType.info,
      message: 'Notifier info'
    });
  }

  openNotifierWarning() {
    this.notifierService.open({
      type: NotifierType.warning,
      message: 'Notifier warning'
    });
  }

  openNotifierDanger() {
    this.notifierService.open({
      type: NotifierType.danger,
      message: 'Notifier danger'
    });
  }

  openNotifierPrimary() {
    this.notifierService.open({
      type: NotifierType.primary,
      message: 'Notifier primary'
    });
  }

  openNotifierAccent() {
    this.notifierService.open({
      type: NotifierType.accent,
      message: 'Notifier accent'
    });
  }
}
