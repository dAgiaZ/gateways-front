import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './delete-modal.component'

@NgModule({
  declarations: [DeleteModalComponent],
  exports: [DeleteModalComponent],
  bootstrap: [DeleteModalComponent],
  entryComponents: [DeleteModalComponent],
  imports: [
    CommonModule,
    BrowserModule, 
    NgbModule
  ]
})
export class DeleteModalModule { }
