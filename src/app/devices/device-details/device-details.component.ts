import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GatewaysService } from '../../shared/services/gateways.service'

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  device: any;

  constructor(
    private devicesService: GatewaysService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.devicesService.setEndpointUrl('devices');
    this.route.paramMap.subscribe(params => {
      const deviceId = params.get('deviceId');
      this.devicesService.getItemById(deviceId)
        .subscribe( device => {
          this.device = device;
        },
        (error) => console.log(error));
    });
  }

}
