import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
          break;
      case 'AdivinaMasListado':
        this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
          break;      
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
          break;
      case 'Ppt':
          this.router.navigate(['/Juegos/Ppt']);
          break;      
      case 'PptMasListado':
        this.router.navigate(['/Juegos/PptMasListado']);
        break;
      case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
          break;      
      case 'AnagramaMasListado':
          this.router.navigate(['/Juegos/AnagramaMasListado']);
          break; 

    }
  }

}
