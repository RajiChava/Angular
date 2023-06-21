import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(private fb: FormBuilder) { }
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
  });

  submit(){
    console.log(this.profileForm.value)
  }
}
