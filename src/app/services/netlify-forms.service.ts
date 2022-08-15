/* import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { denunciaForm } from '../components/formulario/fomulario-interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetlifyFormsService {

  constructor(private http: HttpClient) { }

  submitFeedback(fbEntry: denunciaForm): Observable {
    const entry = new HttpParams({ fromObject: {
      'form-name': 'feedbackForm',
      ...fbEntry
    }});

    return this.submitEntry(entry);
  }

  private submitEntry(entry: HttpParams): Observable {
    return this.http.post(
      '/',
      entry.toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'text'
      }
    ).pipe(catchError(this.handleError));
  }

}
 */


