import { Component, OnInit } from "@angular/core";


interface station {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})

export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  selected = 'option1';
  value = 'Clear me';

  percipitation! : string;
  percipis: string[] = ['Si', 'No'];
  showTable: boolean = false;
  toggleShowTable(): void {
    this.showTable = !this.showTable;
}
}
