import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-home-coponent',
  templateUrl: './home-coponent.component.html',
  styleUrls: ['./home-coponent.component.css']
})
export class HomeCoponentComponent implements OnInit {
  // ใน HomeCoponentComponent เราจะกำหนดตัวแปลอะไรบ้างก็ได้ใส่ลงไป
  public results:string[];// กำหนดตัวแปร เพื่อรับค่า
  public results2:any;// กำหนดตัวแปร เพื่อรับค่า
  public results3:any;
  public results4:any;
   // Inject HttpClient มาใช้ใน component หรือ service.
  public headerDatas:any; // ต้องการดูค่า header ที่มีการกำหนดเพื่มเติมส่งกลับมาหหรือต้องการดู status code เช่น 200 หรือ 404 เป็นต้น
  public jsonData:any; 

  constructor(private http:HttpClient) { }

  ngOnInit() {
  // ทำการเรียกใช้ HTTP request ผ่าน get() method 
  // ซึ่งจะได้ข้อมูลกลับมาในรูปแบบ Observable เราต้อง subscibe ตัว observer จึงจะทำงาน
  // พอรอค่าที่จะถูกส่งกลับมาแล้วทำงาน
    this.http.get('/assets/data/data1.json').subscribe(data => {
    // อ่านค่า result จาก JSON response ที่ส่งออกมา
    this.results = data['results'];
    });
    this.http.get('/assets/data/data2.json').subscribe(data => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
    this.results2 = data;
    },err => {
       // กรณี error
      console.log('Something went wrong!');
    });
    this.http.get('/assets/data/data2.json', {observe: 'response'})
    .subscribe(resp => {
      console.log(resp);// ดูโครงสร้างของ json ทั้งหมดผ่าน console
      console.log(resp.status); // ดู status code ได้ค่า 200
      this.jsonData = resp;
      // this.headerDatas = resp.headers.get('ชื่อ property ส่วน header ที่ต้องการ');
      // ใช้ข้อมูลในส่วนของ response body  ที่ส่งออกมา
      this.results3 = resp.body;
    });    
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      this.results4 = data;
      });
  }
}

