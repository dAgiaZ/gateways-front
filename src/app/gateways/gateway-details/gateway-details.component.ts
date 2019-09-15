import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GatewaysService } from '../../shared/services/gateways.service'

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.css']
})
export class GatewayDetailsComponent implements OnInit {

  gateway: any;

  constructor(
    private gatewaysService: GatewaysService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.gatewaysService.setEndpointUrl('gateways');
    this.route.paramMap.subscribe(params => {
      const gatewayId = params.get('gatewayId');
      this.gatewaysService.getItemById(gatewayId)
        .subscribe( gateway => {
          this.gateway = gateway;
        },
        (error) => console.log(error));
    });
  }

}
