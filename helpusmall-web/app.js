db.collection('shoppings').get().then((snapshot) => {
      console.log(snapshot.docs);

})