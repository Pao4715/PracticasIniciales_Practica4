import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  formData:any;
  arreglo : any[]=[];

  constructor(
    private cursosService: CursosService, 
  ) {
  }

  ngOnInit(): void {
    this.inicializarFormulario()
    this.obtenerCursos()
  }

  inicializarFormulario(): void {
    this.formData = new FormGroup({
      'codigo': new FormControl('', [Validators.required]),
      'nombre': new FormControl('', [Validators.required]),
      'creditos': new FormControl('', [Validators.required]),
      'fecha': new FormControl('', [Validators.required]),
      'nota': new FormControl('', [Validators.required]),
      'usuarioId': new FormControl(localStorage.getItem('usuarioId'), [Validators.required])
    })
  }

  registroCursos() {
    console.log(this.formData.value)
    this.cursosService.registrar(this.formData.value)
    .subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Curso agregado :)",
      })
      console.log(res)
      this.obtenerCursos();
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error :(',
      });
    })
  }

  obtenerCursos() {
    console.log(this.formData.value)
    this.cursosService.obtenerTodos()
    .subscribe((res) => {
      console.log(res)
      this.arreglo = res;
    });
  }

  /**
   * SET Y GETS
   */
  get codigo() { return this.formData.get('codigo'); }
  get nombre() { return this.formData.get('nombre'); }
  get creditos() { return this.formData.get('creditos'); }
  get fecha() { return this.formData.get('fecha'); }
  get nota() { return this.formData.get('nota'); }
  get usuarioId() { return this.formData.get('usuarioId'); }
}



