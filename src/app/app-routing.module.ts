import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatewaysComponent } from './gateways/gateways.component';
import { GatewayDetailsComponent } from './gateways/gateway-details/gateway-details.component';
import { GatewayCreateComponent } from './gateways/gateway-create/gateway-create.component';
import { GatewayEditComponent } from './gateways/gateway-edit/gateway-edit.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceDetailsComponent } from './devices/device-details/device-details.component';
import { DeviceEditComponent } from './devices/device-edit/device-edit.component';
import { DeviceCreateComponent } from './devices/device-create/device-create.component';

const routes: Routes = [
  {
    path: 'gateways',
    children: [
      {
        path: '',
        component: GatewaysComponent
      },
      {
        path: 'create',
        component: GatewayCreateComponent,
        pathMatch: 'full'
      },
      {
        path: ':gatewayId',
        children: [
          {
            path: '',
            component: GatewayDetailsComponent
          },
          {
            path: 'edit',
            component: GatewayEditComponent
          }
        ]
      }
    ]
  },
  {
    path: 'devices',
    children: [
      {
        path: '',
        component: DevicesComponent
      },
      {
        path: 'create',
        component: DeviceCreateComponent,
        pathMatch: 'full'
      },
      {
        path: ':deviceId',
        children: [
          {
            path: '',
            component: DeviceDetailsComponent
          },
          {
            path: 'edit',
            component: DeviceEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
