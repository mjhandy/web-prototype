import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSignalService  {

  constructor() { }

  private data = signal('');

  setData(update: string) {
    console.log('data recieved:', update);
    this.data.set(update);
  }

  getData(){
    console.log('data sent:', this.data);
    return this.data;
  }

}
