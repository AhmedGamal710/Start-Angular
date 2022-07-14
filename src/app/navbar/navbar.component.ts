import { Component, OnInit } from '@angular/core';
declare let $ : any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });
  }




}



