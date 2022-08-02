import Mock from 'mockjs';

const detail = {
    title:"This is the project title",
    subject:{
        s1:"001",
        s2:"002",
        s3:""
    },   
    start_end_date:[
        "2021-10-14",
        "2021-11-17"
    ],
    description:"This is the descrition. What is long-des or short-des? need to be done. XXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXX XXXXXXXXXXXXXXXXX XXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXX XXXXXXXXXX XXXXXXXX",
    creator:"Lunan Nie",
    creator_email: "lnie8288@uni.sydney.edu.au",
    estimated_budget: 123,
    actual_budget:0,
    outcomes:[
        "Outcome 1",
        "Outcome 2"
    ],
    visible: true

};

 const members = [
  {   
      'name':"Lunan Nie",
      "email":"AB's Email"
  },
  {
      'name':"Lunan Nie",
      "email":"AD's Email"
  },
  {
      'name':"Lunan Nie",
      "email":"AE's Email"
  },
  {
      'name':"Lunan Nie",
      "email":"QW's Email"
  },
  {
      'name':"Lunan Nie",
      "email":"VF's Email"
  },
  {
      'name':"Lunan Nie",
      "email":"VS's Email"
  }
];

 const milestone =[
  {
    id: 7,
    start_date: "2020-11-07",
    text: "Milestone Test 01",
    type: "milestone",
    member:"Lunan Nie"
  },
  {
    id: 8,
    start_date: "2020-11-07",
    text: "Milestone Test 02",
    type: "milestone",
    member:"Lunan Nie"
  },
  {
    id: 9,
    start_date: "2020-11-07",
    text: "Milestone Test 03",
    type: "milestone",
    member:"Lunan Nie"
  }
 ]




Mock.setup({timeout:'0'})

Mock.mock("/projectmanagement/project/detail", 'get', {
        detail,members,milestone
})