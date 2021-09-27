import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';
import { PublicacionService } from '../services/publicacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formData:any;
  arreglo : any[]=[];

  constructor(
    private usuarioService: UsuarioService, 
    private publicacionService : PublicacionService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.inicializarFormulario()
    this.obtenerPublicaciones()
  }

  inicializarFormulario(): void {
    this.formData = new FormGroup({
      'curso': new FormControl('', [Validators.required]),
      'catedratico': new FormControl('', [Validators.required]),
      'mensaje': new FormControl('', [Validators.required]),
      'fecha_hora': new FormControl(new Date(), [Validators.required]),
      'usuarioId': new FormControl(localStorage.getItem('usuarioId'), [Validators.required])
    })
  }

  publicacion() {
    console.log(this.formData.value)
    this.publicacionService.registrar(this.formData.value)
    .subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Publicacion Creada :)",
      })
      console.log(res)
      this.obtenerPublicaciones()
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error :(',
      });
    })
  }

  obtenerPublicaciones() {
    console.log(this.formData.value)
    this.publicacionService.obtenerTodos()
    .subscribe((res) => {
      console.log(res)
      this.arreglo = res;
    });
  }

  /**
   * SET Y GETS
   */
  get curso() { return this.formData.get('curso'); }
  get catedratico() { return this.formData.get('catedratico'); }
  get mensaje() { return this.formData.get('mensaje'); }
  get fecha_hora() { return this.formData.get('fecha_hora'); }
  get usuarioId() { return this.formData.get('usuarioId'); }
}

