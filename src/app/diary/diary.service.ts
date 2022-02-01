import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { CalorieRecord } from "./models/calorie-record";
import { WeightRecord } from "./models/weight-record";

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  private readonly calorieRecordsUrl = 'api/diary_cals';
  private readonly weightRecordsUrl = 'api/diary_kgs';

  constructor(private http: HttpClient) {}

  getCalorieRecords(): Observable<CalorieRecord[]> {
    return this.http.get<CalorieRecord[]>(this.calorieRecordsUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
  }

  getWeightRecords(): Observable<WeightRecord[]> {
    return this.http.get<WeightRecord[]>(this.weightRecordsUrl)
      .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}