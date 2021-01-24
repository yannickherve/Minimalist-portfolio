import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss']
})
export class ContactHomeComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  @ViewChild('emailBlur') emailError;
  @ViewChild('nameBlur') nameError;
  @ViewChild('msgBlur') msgError;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.contactForm.controls; }

  contactMe(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
  }

  focusOnIfError(): void{
    if (this.contactForm.controls.name.invalid) {
      this.nameError.nativeElement.classList.add('nameBlur');
    }
    if (this.contactForm.controls.email.invalid) {
      this.emailError.nativeElement.classList.add('emailBlur');
    }
    if (this.contactForm.controls.message.invalid) {
      this.msgError.nativeElement.classList.add('msgBlur');
    }

    setTimeout(() => {
      this.nameError.nativeElement.classList.remove('nameBlur');
      this.emailError.nativeElement.classList.remove('emailBlur');
      this.emailError.nativeElement.classList.remove('msgBlur');
    }, 1000);
  }


}
