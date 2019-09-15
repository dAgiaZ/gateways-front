import { Component, OnInit } from '@angular/core';
import { GatewaysService } from '../../shared/services/gateways.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gateway-create',
  templateUrl: './gateway-create.component.html',
  styleUrls: ['./gateway-create.component.css']
})
export class GatewayCreateComponent implements OnInit {

  error: any = null;

  constructor(
    private gatewaysService: GatewaysService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  save(event): void {
    this.error = null;
    this.gatewaysService.setEndpointUrl('gateways');
    this.gatewaysService.createItem(event)
      .subscribe( gateway => {
        this.router.navigate(['gateways']);
      },
      (error) => this.error = error
     );
  }
}
