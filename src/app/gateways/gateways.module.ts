import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { GatewaysComponent } from './gateways.component';
import { GatewayDetailsComponent } from './gateway-details/gateway-details.component';
import { GatewayFormComponent } from './gateway-form/gateway-form.component';
import { GatewayCreateComponent } from './gateway-create/gateway-create.component';
import { GatewayEditComponent } from './gateway-edit/gateway-edit.component';
import { DeleteModalModule } from '../shared/components/delete-modal/delete-modal.module'

@NgModule({
  declarations: [GatewaysComponent, GatewayDetailsComponent, GatewayFormComponent, GatewayCreateComponent, GatewayEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgSelectModule,
    DeleteModalModule
  ]
})
export class GatewaysModule { }
