import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-disply',
  templateUrl: './disply.component.html',
  styleUrls: ['./disply.component.css']
})
export class DisplyComponent implements OnInit {

 @Input() public primesP: number[] = [];
 @Input()  public runTimeP!: number;
 @Input() public valueP!:any;
 public text = "Checking Primes from 1 to:"
 public count = "Prime Count:"
 public runTime ="Run Time:"
  constructor() { }

  ngOnInit(): void {
  }

   
}
