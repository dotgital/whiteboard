import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.firestore();

export const documentWriteListener = functions.firestore.document('applications/{appId}')
  .onWrite((change, context) => {


    // const docRef = db.collection('statistics').doc(docName);
    const increaseVal = admin.firestore.FieldValue.increment(1);
    const decreaseVal = admin.firestore.FieldValue.increment(-1);
    const keepVal = admin.firestore.FieldValue.increment(0);

    // let statsData = {}

    if (!change.before.exists) { // New document Created
      const data = change.after.data();
      if (data) {
        db.collection('users').doc(data.createById).get().then(res => {
          const userData = res.data();
          if(userData){
            const thisMonth = data.date.substring(0, 6);
            const statsData: any = {
              app: increaseVal,
              avatar: userData.avatar,
              price: !data.price ? admin.firestore.FieldValue.increment(0) : admin.firestore.FieldValue.increment(data.price),
              approved: data.approved === true ? increaseVal : keepVal,
              moneyIn: data.moneyIn === true ? increaseVal : keepVal,
              invoiceOut: data.invoiceOut === true ? increaseVal : keepVal,
              invoicePaid: data.invoicePaid === true ? increaseVal : keepVal,
              denied: data.denied === true ? increaseVal : keepVal,
              createBy: data.createBy,
              date: thisMonth,
            }
            console.log('this is statistic data', statsData);
            // const dayDocRef = db.collection('statistics').doc(`${data.date}_${data.createById}`);
            const month = data.date.substring(0, 6);
            const monthDocRef = db.collection('statistics').doc(`${month}_${data.createById}`);
            // statsData.range = 'daily';
            // dayDocRef.set({statsData, range: 'daily'}, {merge: true}).then;
            // statsData.range = 'monthly';
            monthDocRef.set({statsData, range: 'monthly'}, {merge: true}).then;
          }
        }).then
      }
    } else if (change.before.exists && change.after.exists) { // Updating existing document
      const dataBefore = change.before.data();
      const dataAfter = change.after.data();
      if (dataBefore && dataAfter) {
        const statsData = {
          // price: !dataAfter.price ? admin.firestore.FieldValue.increment(0) : admin.firestore.FieldValue.increment(dataAfter.price),
          approved: dataBefore.approved === dataAfter.approved ? keepVal : dataAfter.approved === true ? increaseVal : decreaseVal,
          moneyIn: dataBefore.moneyIn === dataAfter.moneyIn ? keepVal : dataAfter.moneyIn === true ? increaseVal : decreaseVal,
          invoiceOut: dataBefore.invoiceOut === dataAfter.invoiceOut ? keepVal : dataAfter.invoiceOut === true ? increaseVal : decreaseVal,
          invoicePaid: dataBefore.invoicePaid === dataAfter.invoicePaid ? keepVal : dataAfter.invoicePaid === true ? increaseVal : decreaseVal,
          denied: dataBefore.denied === dataAfter.denied ? keepVal : dataAfter.denied === true ? increaseVal : decreaseVal,
        }
        // const dayDocRef = db.collection('statistics').doc(`${dataBefore.date}_${dataBefore.createById}`);
        const month = dataBefore.date.substring(0, 6);
        const monthDocRef = db.collection('statistics').doc(`${month}_${dataBefore.createById}`);
        // dayDocRef.set(statsData, {merge: true}).then;
        monthDocRef.set({statsData, range: 'monthly'}, {merge: true}).then;
      }
    } else if (!change.after.exists) { // Deleted existing document
      const data = change.before.data();
      if (data) {
        const statsData = {
          app: decreaseVal,
          approved: data.approved === true ? decreaseVal : keepVal,
          price: !data.price ? admin.firestore.FieldValue.increment(0) : admin.firestore.FieldValue.increment(-data.price),
          moneyIn: data.moneyIn === true ? decreaseVal : keepVal,
          invoiceOut: data.invoiceOut === true ? decreaseVal : keepVal,
          invoicePaid: data.invoicePaid === true ? decreaseVal : keepVal,
          denied: data.denied === true ? decreaseVal : keepVal,
        }
        // const dayDocRef = db.collection('statistics').doc(`${data.date}_${data.createById}`);
        const month = data.date.substring(0, 6);
        const monthDocRef = db.collection('statistics').doc(`${month}_${data.createById}`);
        // dayDocRef.set(statsData, {merge: true}).then;
        monthDocRef.set({statsData, range: 'monthly'}, {merge: true}).then;
      }
    }

    const appsData = change.after.data() ? change.after.data() : change.before.data();
    console.log('this is the appsdata: ', appsData);
    const monthData =  appsData ? appsData.date.substring(0, 6) : null;
    console.log('this is the month: ', monthData);
    const appsRef = db.collection('references');
    const collRef = db.collection('applications').orderBy('timestamp', 'desc')
      .get()
      .then(querySnapshot => {
        const applicationArr: Array<any> = [];
        const applicationArrIncompleted: Array<any> = [];
        // const agentsArr: Array<any> = [];
        const counts: { [key: string]: number} = {};
        const countsIncompleted: { [key: string]: number} = {};

        querySnapshot.forEach(doc => {
          counts[doc.data().createById] = 1 + (counts[doc.data().createById] || 0);
          if(!doc.data().completed) {
            countsIncompleted[doc.data().createById] = 1 + (countsIncompleted[doc.data().createById] || 0);
            applicationArrIncompleted.push( doc.data() )
          }
          applicationArr.push( doc.data() )
          // agentsArr.push( doc.data().createById)
        });

        const top = Object.keys(counts).sort((a,b) => {return counts[b]-counts[a]});
        // const topImcompleted = Object.keys(countsIncompleted).sort((a,b) => {return countsIncompleted[b]-countsIncompleted[a]});
        // for (const i of agentsArr) {
        //     counts[agentsArr[i]] = 1 + (counts[agentsArr[i]] || 0);
        // }

        const dataIncompleted = {data: applicationArrIncompleted, topAgents: top, date: monthData};
        const data = {data: applicationArr, topAgents: top, date: monthData};
        appsRef.doc('incompleted').set(dataIncompleted, {merge: true}).then;
        appsRef.doc(monthData).set(data, {merge: true}).then;
        // console.log(apprefp);
      }
    )
    console.log(collRef);

    return 0;
  });
