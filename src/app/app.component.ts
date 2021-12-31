import { Component, VERSION, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  ngOnInit() {
    of(2, 4, 6).subscribe(console.log);

    // This deprecation was introduced in RxJS 6.4
    from([1, 5, 9]).subscribe({
      next: (item) => console.log(`item found : ${item}`),
      error: (error) => console.log(`Error occurred : ${error}`),
      complete: () => console.log(`No more apples to process!!`),
    });
  }
}
