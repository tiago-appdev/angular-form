import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fb = inject(FormBuilder)

  form: FormGroup
    = this.fb.group({
      name: ['', { validators: [Validators.required, Validators.min(3)] }],
      email: ['', { validators: [Validators.required, Validators.email] }]
    })


  consoleStrech() {
    console.log(`Felicidades ${this.form.get('name')?.value}, ahora puedes ingresar con tu correo ${this.form.get('email')?.value}`)
  }
}
