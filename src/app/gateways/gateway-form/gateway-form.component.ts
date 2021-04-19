import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GatewaysService } from '../../shared/services/gateways.service'


@Component({
  selector: 'app-gateway-form',
  templateUrl: './gateway-form.component.html',
  styleUrls: ['./gateway-form.component.css']
})
export class GatewayFormComponent implements OnInit {
  @Input() creating: boolean = false;
  @Output() onSave = new EventEmitter<any>();
  @Output() onSetDevice = new EventEmitter<any>();

  gatewayForm: FormGroup;
  devices: any;
  gateway: any;

  constructor(
    private fb: FormBuilder,
    private gatewaysService: GatewaysService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    //Form Configuration
    this.gatewayForm = this.fb.group({
      serialNumber: ['', Validators.required],
      ip: ['', Validators.required],
      name: ['', Validators.required],
      devices: [[]]
    });

    this.gatewaysService.setEndpointUrl('devices');
    this.gatewaysService.getItems()
      .subscribe( devices => this.devices = devices,
        (error) => console.log(error)
      );

    if (!this.creating) {
      this.gatewaysService.setEndpointUrl('gateways');
      this.route.paramMap.subscribe(params => {
        const gatewayId = params.get('gatewayId');
        this.gatewaysService.getItemById(gatewayId)
          .subscribe( gateway => {
            this.gateway = gateway;
            const _gateway = {
              serialNumber: gateway.serialNumber,
              ip: gateway.ip,
              name: gateway.name,
              devices: gateway.devices
            }
            this.gatewayForm.setValue(_gateway);
          },
          (error) => console.log(error));
      });
    }
  }

  save(): void {
      if (this.gatewayForm.valid){
        //Delete empty objects
        if (this.gateway && this.gateway.devices) {
          this.gateway.devices.map( (el, i) => {
            if (!el._id)
              this.gateway.devices.splice(i,1);
          })
        }
        this.onSave.emit(this.gatewayForm.value);
      }
  }

  cancel(): void {
    this.location.back();
  }

  setDevice(event: Event, id: number): void {
    if (event.target['selectedIndex'] && (event.target['selectedIndex'] !== 0)){
      const device = this.devices[event.target['selectedIndex'] - 1];
      //don't link if already linked
      if (this.gateway.devices.find( el => el._id === device._id)){
        this.onSetDevice.emit(true);
        return null;
      }
      this.gateway.devices[id] = device;
    }
  }

  linkDevice(): void {
    this.gateway.devices.push({});
  }

  unlinkDevice(id: number): void {
    this.gateway.devices.splice(id, 1);
  }

}
