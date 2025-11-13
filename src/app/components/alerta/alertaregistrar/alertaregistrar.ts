import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Alerta } from '../../../models/Alerta';
import { AlertaService } from '../../../services/alerta-service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-alertaregistrar',
  imports: [ ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,],
  templateUrl: './alertaregistrar.html',
    providers: [provideNativeDateAdapter()],
  styleUrl: './alertaregistrar.css',
})
export class Alertaregistrar {
  form: FormGroup = new FormGroup({});
  ar: Alerta = new Alerta();

  edicion: boolean = false;
  id: number = 0;

  constructor(
    private aS: AlertaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      codigo:[''],
      nombre: ['', Validators.required],
      responsable: ['', Validators.required],
      estado: [false, Validators.required],
      fecha: ['', Validators.required],
      presupuesto: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.ar.idAlerta=this.form.value.codigo
      this.ar.mensajeAlerta = this.form.value.mensaje;
      this.ar.tipoAlerta = this.form.value.tipo;
      this.ar.fechaAlerta = this.form.value.fecha;
      this.ar.horaAlerta = this.form.value.hora;
      this.ar.vistoAlerta = this.form.value.visto;
      if(this.edicion){
        this.aS.update(this.ar).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      }else{
        this.aS.insert(this.ar).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      }
      this.router.navigate(['alertas']);
    }
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idAlerta),
          mensaje: new FormControl(data.mensajeAlerta),
          tipo: new FormControl(data.tipoAlerta),
          fecha: new FormControl(data.fechaAlerta),
          hora: new FormControl(data.horaAlerta),
          visto: new FormControl(data.vistoAlerta),
        });
      });
    }
  }
}
