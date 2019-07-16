import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styles: []
})
export class ContactSectionComponent implements OnInit {
  contactForm: FormGroup;
  loading = false;
  showResults = false;
  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', Validators.required]
    });
  }

  onSubmit(){
    this.loading = true;
    this.afs.doc(`user-contacts/${this.revisedRandId()}`).set(this.contactForm.value).then((state) => {
      this.contactForm.reset();
      this.loading = false;
      this.showResults = true;

      setTimeout(() => {
        this.showResults = false;
      }, 10000);
    });
  }

revisedRandId() {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const uniqid = randLetter + Date.now();
  return uniqid;
}
}
