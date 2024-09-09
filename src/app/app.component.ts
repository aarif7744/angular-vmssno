import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seats = [
    ['1A', '1B', '1C', '1D', '1E', '1F', '1G'],
    ['2A', '2B', '2C', '2D', '2E', '2F', '2G'],
    ['3A', '3B', '3C', '3D', '3E', '3F', '3G'],
    ['4A', '4B', '4C', '4D', '4E', '4F', '4G'],
    ['5A', '5B', '5C', '5D', '5E', '5F', '5G'],
    ['6A', '6B', '6C', '6D', '6E', '6F', '6G'],
    ['7A', '7B', '7C', '7D', '7E', '7F', '7G'],
    ['8A', '8B', '8C', '8D', '8E', '8F', '8G'],
    ['9A', '9B', '9C', '9D', '9E', '9F', '9G'],
    ['10A', '10B', '10C', '10D', '10E', '10F', '10G'],
    ['11A', '11B', '11C', '11D', '11E', '11F', '11G'],
    ['12A', '12B', '12C'] // Last row with only 3 seats
  ];

  bookedSeats: string[] = [];
  numOfSeats: number;

  reserveSeats() {
    for (let i = 0; i < this.seats.length; i++) {
      const availableSeats = this.seats[i].filter(seat => !this.bookedSeats.includes(seat));
      if (availableSeats.length >= this.numOfSeats) {
        this.bookSeats(i, this.numOfSeats);
        return;
      }
    }
    console.log('Not enough seats available in one row.');
  }

  bookSeats(rowIndex: number, numOfSeats: number) {
    let booked = 0;
    for (let seat of this.seats[rowIndex]) {
      if (!this.bookedSeats.includes(seat) && booked < numOfSeats) {
        this.bookedSeats.push(seat);
        booked++;
      }
    }
    console.log('Booked seats:', this.bookedSeats);
  }
}
