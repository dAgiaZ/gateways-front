import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GatewaysService } from '../../shared/services/gateways.service'

@Component({
  selector: 'app-gateway-edit',
  templateUrl: './gateway-edit.component.html',
  styleUrls: ['./gateway-edit.component.css']
})
export class GatewayEditComponent implements OnInit {

  error: any;
  gatewayId: string = '';
  constructor(
    private gatewaysService: GatewaysService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gatewayId = params.get('gatewayId');
    });
  }

  save(event: Event): void {
    this.error = null;
    this.gatewaysService.setEndpointUrl('gateways')
    this.gatewaysService.updateItem(event, this.gatewayId)
      .subscribe( () => {
        this.router.navigate(['gateways', this.gatewayId])
      },
      (error) => this.error = error
     );
  }

  setDevice(event: Event): void {
    this.error = null
    if (event)
      this.error = {
        error: {
          message: 'Device already linked'
        }
      }
  }

}
