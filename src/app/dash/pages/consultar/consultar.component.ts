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

  personalDepartamento: any[] = [];

  //! hidden
  flagSubdireccionesHidden: boolean = false;
  //! ngif
  flagDepartamentoHidden: boolean = true;

  constructor(private _myServices: MyService) {}

  ngOnInit(): void {
    this._myServices.getPersonas().subscribe((data) => {
      this.personas = data;
    });

    this._myServices.getSubdireccion().subscribe((data) => {
      this.subdirecciones = data;
    });
  }

  showSubdireccion(subdireccionId: Subdireccion): void {
    this.selectSubdirecccion = [subdireccionId];
    const const_sub_id = subdireccionId.sub_id;

    this._myServices
      .getDepartamentosPorSubdireccion(const_sub_id.toString())
      .subscribe((data) => {
        this.departamentos = data;
        console.log(data);
      });

    //!la bandera funciona para ocultar las sub y mostrar la seleccionada
    this.flagSubdireccionesHidden = true;
  }

  showDepartamento(departamentoId: Departamentos): void {
    console.log('entraste a getEmpleados', departamentoId);
    this.flagDepartamentoHidden = false;
    this.selectDepartamento = [departamentoId];
    const const_id_departamento = departamentoId.id_departamento;

    console.log(this.selectDepartamento);
    this.personalDepartamento = this.selectDepartamento[0].equipo;
    console.log(this.personalDepartamento)
  }

  //! REGRESOS
  regresarSubdireccion() {
    this.flagSubdireccionesHidden = false;
    this.selectSubdirecccion = [];

    this.flagDepartamentoHidden = true;
    this.selectDepartamento = [];
  }
  regresarDepartamentos() {
    this.flagDepartamentoHidden = true;
    this.selectDepartamento = [];
  }
}
