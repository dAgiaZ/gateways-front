import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GatewaysService } from '../shared/services/gateways.service'
import { DeleteModalComponent } from '../shared/components/delete-modal/delete-modal.component'

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.css']
})
export class GatewaysComponent implements OnInit {

  gateways: any;

  constructor(
    private gatewaysService: GatewaysService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.gatewaysService.setEndpointUrl('gateways');
    this.gatewaysService.getItems()
      .subscribe( gateways => {
        this.gateways = gateways;
      },
      (error) => console.log(error));

  }

  showGatewayDetails(id: string): void {
    this.router.navigate(['gateways', id]);
  }

  deleteGateway(id: string): void {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.type = 'gateway';
    modalRef.result
    .then( (event)=>{
      if (event) {
        this.gatewaysService.setEndpointUrl('gateways');
        this.gatewaysService.deleteItem( id)
        .subscribe( gateways => {
          this.gateways = gateways;
        },
        (error) => console.log(error));
      }
    });
  }
}
