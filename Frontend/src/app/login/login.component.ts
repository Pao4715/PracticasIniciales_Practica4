import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      'registro_academico': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })
  }

  iniciarSesion() {
    console.log(this.formData.value)
    this.usuarioService.login(this.formData.value)
    .subscribe((res) => {
      Swal.fire({
        icon: "success",
        title: "Bienvenid@!",
      })
      this.router.navigate(['home'])
      console.log(res)
      localStorage.setItem('usuarioId', res.id)
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrectos!',
      });
    })
  }

  /**
   * SET Y GETS
   */
  get registro_academico() { return this.formData.get('registro_academico'); }
  get password() { return this.formData.get('password'); }
}

