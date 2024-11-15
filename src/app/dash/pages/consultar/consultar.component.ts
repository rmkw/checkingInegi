import { Component, OnInit } from '@angular/core';
import { MyService } from '../../services/my.service';
import { Subdireccion } from 'src/app/auth/interfaces';
import { Departamentos } from 'src/app/auth/interfaces/departamentos.interface';

@Component({
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
})
export class ConsultarComponent implements OnInit {
  personas: any[] = [];
  subdirecciones: any[] = [];
  departamentos: any[] = [];

  selectSubdirecccion: any[] = [];
  selectDepartamento: any[] = [];

  flagSubdireccionesHidden: boolean = false;
  flagDepartamentoHidden: boolean = false;

  constructor(private _myServices: MyService) {}

  ngOnInit(): void {
    this._myServices.getPersonas().subscribe((data) => {
      this.personas = data;
    });

    this._myServices.getSubdireccion().subscribe((data) => {
      this.subdirecciones = data;
      console.log(data);
    });
  }

  getDepartamentos(subdireccionId: Subdireccion): void {
    this.selectSubdirecccion = [subdireccionId];
    const const_sub_id = subdireccionId.sub_id;

    this._myServices
      .getDepartamentosPorSubdireccion(const_sub_id.toString())
      .subscribe((data) => {
        this.departamentos = data;
        console.log(data);
      });
    this.flagSubdireccionesHidden = true;
    console.log(this.selectSubdirecccion);
  }
  regresarSubdireccion() {
    this.flagSubdireccionesHidden = false;
    this.selectSubdirecccion = [];
  }
  getEmpleados(departamentoId: Departamentos): void {
    console.log(departamentoId);
    this.flagDepartamentoHidden = true;
    this.selectDepartamento = [departamentoId];
    const const_id_departamento = departamentoId.id_departamento;
    console.log(this.selectDepartamento);

  }
}
