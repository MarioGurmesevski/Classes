import { Component, OnInit } from '@angular/core';
import { NotificationMessage } from 'src/app/interfaces/notification-message';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  notification: NotificationMessage | null = null;
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit() {
    this.notificationsService.pushNotification(
      'This is a test from navbar',
      'success'
    );
    this.notificationsService.notification$.subscribe((notification) => {
      this.notification = notification;
    });
  }
}
