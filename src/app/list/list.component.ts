import { Component } from '@angular/core';
import { unselectedProviders } from '../providers'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
   unselectedProviders = unselectedProviders; 

share(){
  window.alert('nice!'); 
}
}
