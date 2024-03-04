import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe',
})
export class AgePipePipe implements PipeTransform {
  transform(value: any): { years: number; days: number; hours: number } | null {
    const birthDate = new Date(value);
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

    const diff = Math.abs(now.getTime() - birthDate.getTime());
    const days = Math.floor(diff / (1000 * 3600 * 24));
    const hours = Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600));

    return { years, days, hours };
  }
}
