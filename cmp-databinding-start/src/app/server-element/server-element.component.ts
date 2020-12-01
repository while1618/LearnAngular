import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input("serverElement") element: {
    type: string;
    name: string;
    content: string;
  };
  @ViewChild("header", { static: true }) header: ElementRef;
  @ContentChild("ngContentParagraph", { static: true }) content: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnDestroy(): void {
    console.log("Destroyed");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    console.log(
      "Text Content: " + (<HTMLElement>this.header.nativeElement).textContent
    );
    console.log(
      "Ng Content: " + (<HTMLElement>this.content.nativeElement).textContent
    );
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentChecked(): void {
    console.log("afterContentCheck");
  }

  ngAfterContentInit(): void {
    console.log("afterInit called");
  }

  ngDoCheck(): void {
    console.log("doCheck called");
  }

  ngOnInit(): void {
    console.log("onInit called");
    console.log(
      "Text Content: " + (<HTMLElement>this.header.nativeElement).textContent
    );
    console.log(
      "Ng Content: " + (<HTMLElement>this.content.nativeElement).textContent
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
