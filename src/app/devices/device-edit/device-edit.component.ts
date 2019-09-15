import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GatewaysService } from '../../shared/services/gateways.service'

@Component({
  selector: 'app-device-edit',
  templateUrl: './device-edit.component.html',
  styleUrls: ['./device-edit.component.css']
})
export class DeviceEditComponent implements OnInit {

  error: any;
  deviceId: string = '';
  constructor(
    private devicesService: GatewaysService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.deviceId = params.get('deviceId');
    });
  }

  save(event: Event): void {
    this.error = null;
    this.devicesService.setEndpointUrl('devices')
    this.devicesService.updateItem(event, this.deviceId)
      .subscribe( () => {
        this.router.navigate(['devices', this.deviceId])
      },
      (error) => this.error = error
     );
  }
}
