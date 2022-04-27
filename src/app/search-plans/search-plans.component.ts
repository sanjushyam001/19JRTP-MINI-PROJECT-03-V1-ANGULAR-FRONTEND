import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Plan } from '../plan';
import { PlanResponse } from '../plan-response';
import { SearchPlanService } from '../search-plan.service';

@Component({
  selector: 'app-search-plans',
  templateUrl: './search-plans.component.html',
  styleUrls: ['./search-plans.component.css']
})
export class SearchPlansComponent implements OnInit {

   p:Plan=new Plan();
   planNames:string[]=[];
   planStatuses:string[]=[];
   planResponse:PlanResponse[]=[];
   
  constructor(private service:SearchPlanService) { }

  ngOnInit(): void {
    this.loadPlanNames();
    this.loadPlanStatuses();
  }
//#1. load plan names

  loadPlanNames(){
    this.service.getAllPlansNames().subscribe(
      data=>{
        console.log("Fetching plan names successfully..");
        
        console.log(data);
        this.planNames=data;
        
    },error=>{
      console.log("Failed to fetch plan names ");
    });
  }

  //#2. load plan status
  loadPlanStatuses(){
    this.service.getAllPlanStatuses().subscribe(
      data=>{
        console.log("Fetching plan statuses successfully..");
        
        console.log(data);
        this.planStatuses=data;
        
    },error=>{
      console.log("Failed to fetch plan statuses ");
    });
  }

  //#3.Testing change event of drop down
  onChangePlanName(e:any){
    console.log("onChangePlanNames() method called");
  }
  onChangePlanStatus(e:any){
    console.log("onChangePlanStatus() method called");
  }

  //#4. search plans
  loadSearchPlans(formValue:NgForm){
    //console.log(this.p);
    this.service.getAllSearchPlans(this.p).subscribe(
      data=>{
      console.log("loads all search plans successfully..");
      console.log(data);
      this.planResponse=data;
      
      
    },error=>{
        console.log("Failed to search plans");
        
    });
    
  }

  //#5. Download Excel
  downloadExcel(){
    console.log("Download Excel..");
    this.service.downloadExcelFile().subscribe(
      response=>{
    
        //let fileName: string = response.headers.get('Content-Disposition')!.split(';')[1].replace("","").split('=')[1].replace("","");
         let fileName:string='Plans.xlsx';
         console.log("File Name: "+fileName);
         
         let blob:Blob=response.body as Blob;
         let a=document.createElement('a');
        a.download=fileName;
        a.href=window.URL.createObjectURL(blob);
        a.click();
    });
  }
  //#7. Download Pdf
  downloadPdf(){
    console.log("Download Pdf..");

    this.service.downloadPdfFile().subscribe(
      response=>{
    
        //let fileName: string = response.headers.get('Content-Disposition')!.split(';')[1].replace("","").split('=')[1].replace("","");
         let fileName:string='Plans.pdf';
         console.log("File Name: "+fileName);
         
         let blob:Blob=response.body as Blob;
         let a=document.createElement('a');
        a.download=fileName;
        a.href=window.URL.createObjectURL(blob);
        a.click();
    });
    
  }

  
}
