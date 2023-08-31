import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGradeColor]',
})
export class GradeColorDirective implements OnInit {
  @Input() grade: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setBackgroundColor();
  }

  setBackgroundColor() {
    if (this.grade >= 9) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'darkgreen'
      );
    } else if (this.grade >= 8 && this.grade < 9) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'green'
      );
    } else if (this.grade >= 7 && this.grade < 8) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'lightgreen'
      );
    } else if (this.grade >= 6 && this.grade < 7) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'yellow'
      );
    } else if (this.grade >= 5 && this.grade < 6) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'lightyellow'
      );
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    }
  }
}
