import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
