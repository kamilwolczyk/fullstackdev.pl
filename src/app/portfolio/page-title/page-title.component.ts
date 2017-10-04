import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kw-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  items = ['Hello, my name is Kamil Wołczyk',
    'I am full stack developer',
    'Thank you for your interest',
    'More content coming soon.....'];
  interval = 190;

  private currentItemIndex = 0;
  private display = '';

  constructor() {
  }

  typing() {
    const currentItem = this.items[this.currentItemIndex];
    const totalLength = currentItem.length;
    const currentLength = this.display.length;

    if (currentLength < totalLength) {
      this.display += currentItem[currentLength];
    } else {
      this.display = '';
      this.currentItemIndex++;
      if (this.currentItemIndex === this.items.length) {
        this.currentItemIndex = 0;
      }
    }
    setTimeout(() => { this.typing(); }, this.interval);
  }

  ngOnInit() {
    // this.title = 'Hello, my name is Kamil Wołczyk.';
    this.typing();
  }




  // private text = 'Thank you for your interest';
  // private display = '';

  // constructor() {
  // }

  // typingCallback(that) {
  //   const totalLength = that.text.length;
  //   const currentLength = that.display.length;

  //   if (currentLength < totalLength) {
  //     that.display += that.text[currentLength];
  //   } else {
  //     that.display = '';
  //   }
  //   setTimeout(that.typingCallback, 150, that);
  // }

  // ngOnInit() {
  //   // this.title = 'Hello, my name is Kamil Wołczyk.';
  //   this.typingCallback(this);
  // }

}
