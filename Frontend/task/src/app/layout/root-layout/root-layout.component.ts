import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-root-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './root-layout.component.html',
  styleUrl: './root-layout.component.css',
})
export class RootLayoutComponent {}
