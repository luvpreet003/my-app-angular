import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss',
})
export class DirectiveComponent {
  canDeactivate(): boolean {
    return confirm('You have unsaved changes. Do you really want to leave?');
  }
}
