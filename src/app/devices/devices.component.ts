import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GatewaysService } from '../shared/services/gateways.service'
import { DeleteModalComponent } from '../shared/components/delete-modal/delete-modal.component'

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: any;
  constructor(
    private devicesService: GatewaysService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.devicesService.setEndpointUrl('devices');
    this.devicesService.getItems()
      .subscribe( devices => {
        this.devices = devices;
      },
      (error) => console.log(error));
  }

  showDeviceDetails(id: string): void {
    this.router.navigate(['devices', id]);
  }

  deleteDevice(id: string): void {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.type = 'device';
    modalRef.result
    .then( (event)=>{
      if (event) {
        this.devicesService.setEndpointUrl('devices');
        this.devicesService.deleteItem( id)
        .subscribe( devices => {
          this.devices = devices;
        },
        (error) => console.log(error));
      }
    });
  }

}
