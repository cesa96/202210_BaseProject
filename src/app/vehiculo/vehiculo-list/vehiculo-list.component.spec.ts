/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ VehiculoService ],
      declarations: [ VehiculoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl()
      ),
      new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl()
      ),
      new Vehiculo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl()
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element ', () => {
    let trs = fixture.nativeElement.querySelectorAll('tr');
    expect(trs).toBeTruthy();
    expect(trs.length).toBe(4);
  });
});
