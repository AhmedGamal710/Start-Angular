import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Portfolio Page');
  }

  portfolioImages:string[] = [
    'assets/images/cabin.png',
    'assets/images/cake.png',
    'assets/images/circus.png',
    'assets/images/game.png',
    'assets/images/safe.png',
    'assets/images/submarine.png',

  ] 

}
