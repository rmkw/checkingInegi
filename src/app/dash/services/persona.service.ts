import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environments";

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor() {}

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  getPersonas(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/personas`);
  }
}
