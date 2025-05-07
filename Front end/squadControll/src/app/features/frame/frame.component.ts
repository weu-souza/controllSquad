import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  
  logout(){
      this.auth.signOut()
  }

}
