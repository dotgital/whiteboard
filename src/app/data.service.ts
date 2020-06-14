import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Users } from './users/users';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Application } from './applications/application';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user: Users;
  private userId: string;

  constructor(
    private afStore: AngularFirestore,
    private apollo: Apollo,
    private http: HttpClient,
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

  deleteApp(id: string){
    return this.http.delete(`https://backend.apartmentsource.com/applications/${id}`).pipe(map(res => {
      return res;
    }));
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

  sendNotification(formData, user: User, to: string) {
    console.log(formData);
    const email = {
      to,
      data: 'this is the email body',
      subject: formData.commissionType === 'Commission Form' ? `Commission Form ${formData.address}` :
      `Rental of ${formData.address} to ${formData.tenant} for $${formData.price} (${new Date().toLocaleString()} lease date) by The Apartment Source agent ${user.user.fullName}`,
      html: null,
    };
    email.html = formData.commissionType === 'Commission Form' ? `<div class="pagebreak" style="page-break-before: always;">
              <p><img src="https://backend.apartmentsource.com/uploads/4f170f1170a946a28d4c09eae652eeda.png"
                      style="width: 92px; display: block; vertical-align: top; margin: 5px auto; height: 92.3128px;"></p>
              <table class="fr-dashed-borders fr-alternate-rows" style="width: 100%;">
                  <tbody>
                      <tr>
                          <td colspan="4" style="width: 99.073%;">
                              <hr>
                              <div style="text-align: center;"><strong><span style="font-size: 18px;">Commission
                                          Form</span></strong></div>
                              <hr>
                          </td>
                      </tr>
                      <tr>
                          <td colspan="2" style="width: 49.1309%;"><strong>Agent Name</strong>: ${user.user.fullName}<br></td>
                          <td colspan="2" style="width: 49.7103%;"><strong>Date</strong>: ${new Date().toLocaleString()}<br></td>
                      </tr>
                      <tr>
                          <td><br></td>
                          <td><br></td>
                          <td><br></td>
                          <td><br></td>
                      </tr>
                      <tr>
                          <td colspan="2" style="width: 51.1008%;"><strong>Client Names</strong>: ${formData.tenant}<br></td>
                          <td colspan="4" style="width: 99.3048%;"><strong>Landlord/Management Co</strong>: ${formData.landlord}<br></td>
                      </tr>
                      <tr>
                          <td><br></td>
                          <td><br></td>
                          <td><br></td>
                          <td><br></td>
                      </tr>
                      <tr>
                          <td colspan="4" style="width: 73.5805%;"><strong>Address</strong>: ${formData.address}<br></td>
                      </tr>
                      <tr>
                          <td><br></td>
                          <td><br></td>
                          <td><br></td>
                          <td><br></td>
                      </tr>
                      <tr>
                          <td colspan="2" style="width: 49.1309%;"><strong>1st Month's Rent Amount:&nbsp;</strong> $${formData.monthRent}
                          <br></td>
                          <td colspan="2" style="width: 49.7103%;"><strong>TAS Commission</strong>: ${formData.commissionPorcentage}%
                          <br></td>
                      </tr>
                      <tr>
                          <td><br></td>
                          <td><br></td>
                          <td><br></td>
                          <td><br></td>
                      </tr>
                      <tr>
                          <td><strong>Application Fees:&nbsp;</strong> ${formData.applicationFeeNumber}<br></td>
                          <td><strong>At: </strong>$${formData.applicationFeeAmount}</td>
                          <td colspan="2" style="width: 49.5944%;"><strong>Total: </strong>$${formData.applicationFeeTotal}<br></td>
                      </tr>
                  </tbody>
              </table>
              <div class="pagebreak" style="page-break-before: always;"><br></div>
          </div>
          <div class="pagebreak" style="page-break-before: always;"><strong>Notes:&nbsp;</strong> ${formData.notes}</div>
          <div class="pagebreak" style="page-break-before: always;"><br></div>` :
          `<div class="pagebreak" style="page-break-before: always;">
          <p><img src="https://backend.apartmentsource.com/uploads/4f170f1170a946a28d4c09eae652eeda.png"
                      style="width: 92px; display: block; vertical-align: top; margin: 5px auto; height: 92.3128px;"></p>
          <table class="fr-dashed-borders fr-alternate-rows" style="width: 100%;">
            <tbody>
              <tr>
                <td colspan="4" style="width: 99.073%;">
                  <hr>
                  <div style="text-align: center;"><strong><span style="font-size: 18px;">Invoice Request Form</span></strong></div>
                  <hr>
                </td>
              </tr>
              <tr>
                <td colspan="2" style="width: 49.1309%;"><strong>Agent Name</strong>: ${user.user.fullName}<br></td>
                <td colspan="2" style="width: 49.7103%;"><strong>Date</strong>: ${new Date().toLocaleString()}
                  <br>
                </td>
              </tr>
              <tr>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td colspan="4" style="width: 99.3048%;"><strong>Client Names</strong>: ${formData.tenant}
                  <br>
                </td>
              </tr>
              <tr>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td colspan="4" style="width: 73.5805%;"><strong>Address</strong>: ${formData.address}<br></td>
              </tr>
              <tr>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td style="width: 24.6813%;"><strong>Price:&nbsp;</strong> $${formData.price}<br></td>
                <td style="width: 24.6813%;"><div data-empty="true"><br></div>
                </td>
                <td colspan="2" style="width: 49.7103%;"><strong>Landlord/Management Co</strong>: ${formData.landlord}
                  <br></td>
              </tr>
              <tr>
                <td><br></td>
                <td><br></td>
                <td><br></td>
                <td><br></td>
              </tr>
              <tr>
                <td colspan="2" style="width: 49.5944%;"><strong>Bonuses:&nbsp;</strong> ${formData.bonuses}</td>
                <td colspan="2" style="width: 49.5944%;"><strong>Landlord Commissions Rate:</strong>
                ${formData.landlordCommissionRate}%<br></td>
              </tr>
            </tbody>
          </table>
          <p><br></p>
        </div>
        <div class="pagebreak" style="page-break-before: always;"><br></div>
        <div class="pagebreak" style="page-break-before: always;"><br></div>`;

    return this.http.post(`https://backend.apartmentsource.com/applications/send-notification/`, email)
      .pipe(map(newUser => {
        return newUser;
      }));
  }
}
