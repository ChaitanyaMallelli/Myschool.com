import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor() { }
  reloadPage(): void {
    window.location.reload();
  }
}
