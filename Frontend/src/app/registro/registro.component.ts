import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formData:any;

  constructor(
    private usuarioService: UsuarioService, 
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.inicializarFormulario()
  }

  inicializarFormulario(): void {
    this.formData = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'apellido': new FormControl('', [Validators.required]),
      'correo': new FormControl('', [Validators.required]),
      'registro_academico': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })
  }

  registro() {
    console.log(this.formData.value)
    this.usuarioService.registrar(this.formData.value)
    .subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Usuario Registrado con éxito :)",
      })
      this.router.navigate(['login'])
      console.log(res)
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un error :(',
      });
    })
  }

  /**
   * SET Y GETS
   */
  get nombre() { return this.formData.get('nombre'); }
  get apellido() { return this.formData.get('apellido'); }
  get correo() { return this.formData.get('correo'); }
  get registro_academico() { return this.formData.get('registro_academico'); }
  get password() { return this.formData.get('password'); }
}

