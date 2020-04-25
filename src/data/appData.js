const appData={
     cake:[ 
       {
    name: 'White Delight',
    image: '',
    flavour: 'Vanilla',
    desciption: 'Special Delectable Vanilla Cake',
    weight: '1',
    veg_flag: false,
    price: '700',
    id: 1,
  },
  {
    name: 'Yellow Delight',
    image: '',
    flavour: 'Butterscotch',
    desciption: 'Creamy Butterscotch Cake',
    weight: '0.5',
    veg_flag: true,
    price: '500',
    id: 2,
  },
  {
     name: 'Choc-Heaven',
    image: '',
    flavour: 'Chocolate',
    desciption: 'Tempting Choco Truffle',
    weight: '0.5',
    veg_flag: true,
    price: '545',
    id:3,
  }],
  userData:[

    {
      firstname: 'Kartikey',
      lastname: 'Soni',
      email: 'kartikey.soni@gmail.com',
      password: 'Soan@123',
      terms_conditions: false
    },
    {
      firstname: 'Kalyani',
      lastname: 'Bedre',
      email: 'kalyani.bedre@gmail.com',
      password: 'Asdf@123',
      terms_conditions: false
    },
  ],
  currentUserData:{

    currentUser:true,
    loggedUsername:'',

  }
}
  export default (appData);