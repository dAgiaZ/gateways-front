import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevicesComponent } from './devices.component';
import { DeleteModalModule } from '../shared/components/delete-modal/delete-modal.module';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { DeviceCreateComponent } from './device-create/device-create.component';
import { DeviceEditComponent } from './device-edit/device-edit.component'

@NgModule({
  declarations: [DevicesComponent, DeviceDetailsComponent, DeviceFormComponent, DeviceCreateComponent, DeviceEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DeleteModalModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DevicesModule { }
