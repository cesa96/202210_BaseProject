import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';


@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  counts: {[key: string]: number} = {};

  constructor(private vehiculoService: VehiculoService) { }


  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.counts = {};

      this.vehiculos.forEach((el) => {
        this.counts[el.marca] = this.counts[el.marca] ? (this.counts[el.marca] += 1) : 1;
      });
    });
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
