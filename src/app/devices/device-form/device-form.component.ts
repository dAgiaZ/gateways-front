import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GatewaysService } from '../../shared/services/gateways.service'

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  @Input() creating: boolean = false;
  @Output() onSave = new EventEmitter<any>();

  deviceForm: FormGroup;
  device: any;

  constructor(
    private fb: FormBuilder,
    private devicesService: GatewaysService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    //Form Configuration
    this.deviceForm = this.fb.group({
      uid: [null, Validators.required],
      vendor: ['', Validators.required],
      online: [false, Validators.required]
    });


    if (!this.creating) {
      this.devicesService.setEndpointUrl('devices');
      this.route.paramMap.subscribe(params => {
        const deviceId = params.get('deviceId');
        this.devicesService.getItemById(deviceId)
          .subscribe( device => {
            this.device = device;
            const _device = {
              uid: device.uid,
              vendor: device.vendor,
              online: device.online
            }
            this.deviceForm.setValue(_device);
          },
          (error) => console.log(error));
      });
    }
  }

  save(): void {
      if (this.deviceForm.valid){
        this.onSave.emit(this.deviceForm.value);
      }
  }

  cancel(): void {
    this.location.back();
  }

}
