import { Component } from '@angular/core';

@Component({
  selector: 'app-cal-date',
  templateUrl: './cal-date.component.html',
  styleUrls: ['./cal-date.component.scss'],
})
export class CalDateComponent {
  public day: number | null = null;
  public month: number | null = null;
  public year: number | null = null;
  public age: { years: number; days: number; hours: number } | null = null;

  constructor() {}

  submit() {
    if (this.day !== null && this.month !== null && this.year !== null) {
      const birthDate = new Date(this.year, this.month - 1, this.day);
      const now = new Date();

      // Calculate years
      let years = now.getFullYear() - birthDate.getFullYear();

      // Adjust years if birthday hasn't occurred yet this year
      if (
        now.getMonth() < birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() &&
          now.getDate() < birthDate.getDate())
      ) {
        years--;
      }

      // Calculate days and hours
      const diff = Math.abs(now.getTime() - birthDate.getTime());
      const days = Math.floor(diff / (1000 * 3600 * 24));
      const hours = Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600));

      this.age = { years, days, hours };
    }
  }
}
