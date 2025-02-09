import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.scss',
})
export class TemplateFormsComponent {
  user = {
    name: '',
    email: '',
  };

  onSubmit() {
    console.log('Form Submitted!', this.user);
  }
}
