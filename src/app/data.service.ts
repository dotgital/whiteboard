import { Users } from './users/users';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Application } from './applications/application';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user: Users;
  private userId: string;

  constructor(
    private afStore: AngularFirestore,
    private apollo: Apollo,
  ) {
  }

  getData(query) {
    return this.apollo.query<any>({
      query: gql`${query}`,
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    });
  }

  createData(data) {
    return this.apollo.mutate({
      mutation: gql`${data}`,
    });
  }

  updateData(data) {
    return this.apollo.mutate({
      mutation: gql`${data}`,
    });
  }

  createUser(user: Users) {
    return this.afStore.collection('users').doc(user.id).set(user);
  }

  async createUserAndTeam(user: Users) {
    return await this.createTeam().then(res => {
      user.teamId = res.id;
      this.afStore.collection('users').doc(user.id).set(user);
    }).catch(err => console.log(err));
  }

  createTeam() {
    return this.afStore.collection('teams').add({});
  }


  getUser(userId) {
    return this.afStore.collection('users').doc<Users>(userId);
  }

  getUsers() {
    return this.afStore.collection<Users>('users').valueChanges();
  }

  // createApp(appData: Application) {
  //   return this.afStore.collection('applications').doc(appData.id).set(appData);
  // }

  getApplications(docName: string) {
    return this.afStore.collection('references').doc<Application>(docName).valueChanges();
  }

  getAllApps() {
    return this.afStore.collection('applications').valueChanges();
  }

  getAdminApplications(start, end) {
    return this.afStore.collection<Application>('applications', ref =>
      ref.orderBy('date').startAt(start).endAt(end)
    ).valueChanges();
  }

  getUserApplications(userId) {
    return this.afStore.collection<Application>('applications', ref =>
      ref.where('createById', '==', userId).where('completed', '==', false)
    ).valueChanges();
  }

  getStats(thisMonth: string) {
    return this.afStore.collection('statistics', ref =>
      ref.orderBy('statsData.app', 'desc')
      .where('range', '==', 'monthly')
      .where('statsData.date', '==', thisMonth)
    )
    .valueChanges();
  }

  updateApp(app: Application) {
    console.log(app);
    return this.afStore.collection('applications').doc(app.id).set(app, {merge: true});
  }

  saveMessage(message: string) {
    return this.afStore.collection('message').doc('dashboard-message').set({message}, {merge: true});
  }

  getMessage() {
    return this.afStore.collection('message').doc<string>('dashboard-message').valueChanges();
  }
}
