import { Component, OnInit } from '@angular/core';
import { GatewaysService } from '../../shared/services/gateways.service';
import { DeviceFormComponent } from '../device-form/device-form.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {


  error: any = null;

  constructor(
    private devicesService: GatewaysService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  save(event): void {
    this.error = null;
    this.devicesService.setEndpointUrl('devices');
    this.devicesService.createItem(event)
      .subscribe( device => {
        this.router.navigate(['devices']);
      },
      (error) => this.error = error
     );
  }

}
