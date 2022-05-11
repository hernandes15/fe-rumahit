import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'menu-message',
  templateUrl: './menu-message.component.html',
  styleUrls: ['./menu-message.component.css']
})
export class MenuMessageComponent implements OnInit {

  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.currentMessage.subscribe(data => {
      if (data !== []) {
        this.messages = data;
      }
    });    
  }

  clearMessage() {
    this.messageService.clearMessage();
  }

}
