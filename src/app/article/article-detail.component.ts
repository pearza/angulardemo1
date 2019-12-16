import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
 
// กำหนด interface ให้สอดคล้องกับข้อมูลที่ส่งมา
interface Articles{
  'userId':number,
  'id':number,
  'title':string,
  'body':string  
}
 
@Component({
  // selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  public results:any;
  public urlSource:string = "https://jsonplaceholder.typicode.com";
  public postID:number;
  public activePage:number;
 
  constructor(
    private http:HttpClient,
    private route: ActivatedRoute,
    private router: Router       
  ) { }
 
  ngOnInit() {
 
    let params = this.route.snapshot.paramMap;
    if(params.has('id')){
      this.postID = +params.get('id');
    }
    this.route
    .queryParams
    .subscribe((data: { page: any }) => {
      if(data!=null && data.page!=null){
        this.activePage = +data.page;   
      }
    });   
     
    // ส่วนของการดึงข้อมูลด้วย HttpClient get() method
    this.http.get<Articles[]>(this.urlSource+'/posts')
    .subscribe(
      data => {
        // กรณี resuponse success
        this.results = data.filter( article => {
          return article.id == this.postID;
        });
      },
      ( err:HttpErrorResponse ) => {
        // กรณี error
        if (err.error instanceof Error) {
          // กรณี error ฝั่งผู้ใช้งาน หรือ การเชื่อมต่อเกิด error ขึ้น
          console.log('An error occurred:', err.error.message);
        }else{ // กรณี error ฝั่ง server ไม่พบไฟล์ ,server error 
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }       
      }
    );        
 
  }
 
}