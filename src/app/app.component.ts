import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public primes: number[] = [];
  public runTime!: number;
  public show: boolean = false;

  constructor() {}

  ngOnInit() {}

  findPrimes(value: string) {
    const num = +value;
    this.primes = [];
    this.show = false;

    const date1 = new Date().getTime();
    for (let i = 2; i <= num; i++) {
      if (this.isPrime(i)) {
        this.primes.push(i);
      }
    }
    const date2 = new Date().getTime();

    this.show = true;
    this.runTime = date2 - date1;
    console.log(this.runTime);
  }

  isPrime(num: number): boolean {
    if (num < 2) {
      return false;
    }

    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  }
}
