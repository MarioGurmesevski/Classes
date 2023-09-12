import { NotificationsService } from './notifications.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Roles, User } from '../interfaces/user.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private firestore: AngularFirestore,
    private notificationsService: NotificationsService
  ) {}

  searchUsers(userName: string): Observable<User[]> {
    return this.firestore
      .collection<User>('users')
      .valueChanges()
      .pipe(
        map((users) =>
          users.filter((user) =>
            user.name.toLowerCase().includes(userName.toLowerCase())
          )
        )
      );
  }
  async updateUserRoles(id: string, roles: Roles) {
    const userRef = this.firestore.collection<User>('users').doc(id);

    try {
      await userRef.update({ roles });
      this.notificationsService.pushNotification(
        'User role updated successfully',
        'success'
      );
    } catch (error: any) {
      this.notificationsService.pushNotification(
        error.message || 'Error while updated user roles',
        'error'
      );
    }
  }
}
