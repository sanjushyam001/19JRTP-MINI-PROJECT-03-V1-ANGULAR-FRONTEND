import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from './plan';
import { PlanResponse } from './plan-response';

@Injectable({
  providedIn: 'root'
})
export class SearchPlanService {

  baseUrl:string="http://localhost:9090";
  constructor(private httpClient:HttpClient) { }


  getAllPlansNames():Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.baseUrl}/plans-names`);
  }
  getAllPlanStatuses():Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.baseUrl}/plans-statuses`);
  }
  getAllSearchPlans(plan:Plan):Observable<PlanResponse[]>{
    return this.httpClient.post<PlanResponse[]>(`${this.baseUrl}/plans`,plan);
  }
  downloadExcelFile(){
    return this.httpClient.get(`${this.baseUrl}/excel`,{observe:'response',responseType:'blob'});
  }
  downloadPdfFile(){
    return this.httpClient.get(`${this.baseUrl}/pdf`,{observe:'response',responseType:'blob'});
  }
  

}
