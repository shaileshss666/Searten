import Mock from 'mockjs';

//-----------------------------Project List data--------------------------------------

const project_list=[]

for (let i = 1; i < 12; i++) {
  project_list.push({
      creatorId:'0',
      projectId: 60-i,
      title: `Project Title ${60-i}`,
      create_date:"04/02/20"+((100-i)<0? 0:(100-i)).toString(),
      last_edit:"04/02/20"+((100-i)<0? 0:(100-i)).toString(),
      date:{
        start_date:'04/07/2018',
        end_date:'04/12/2019'},
      content:
        'This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project.',
      percent:(100-i)<0? 0:(100-i),
      subjects:{
        s1:"002",
        s2:"001",
        s3:""
    },
      })
      project_list.push({
        creatorId:'1',
        projectId: 200-i,
        title: `Project Title ${200-i}`,
        create_date:"04/02/20"+((99-i)<0? 0:(99-i)).toString(),
        last_edit:"04/02/20"+((99-i)<0? 0:(99-i)).toString(),
        date:{
          start_date:'03/08/2018',
          end_date:'04/12/2050'},
        content:
          'This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project. This is the short description of the project.',
        percent:(100-i)<0? 0:i,
        subjects:{
          s1:"003",
          s2:"001",
          s3:""
      },
        })
  }
//-----------------------------Project List - Action List data--------------------------------------

  const projectlist_actionlist=[
    {
      title: '22/10/2021',
      description:"Lunan Nie creates a page"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie creates a page"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
    {
      title: '11/10/2021',
      description:"Lunan Nie fix a feature"
    },
  ];
//-----------------------------------------------------E N D--------------------------------------------------------------------




//here should be "get", but mockjs cannot use get to receive req.body in path, so I use post to test.
Mock.setup({timeout:'0'})

Mock.mock("/projectmanagement",'post', function (req) {

  var postdata=JSON.parse(req.body);
  var project_list_result = [];
  var projectlist_actionlist_result = [];
  project_list.forEach(element=>{
    if(element.creatorId===postdata.userId){
      project_list_result.push(element)
    }
  })
  if(project_list_result){
      return {
          result: 'Found List',
          status:0,
          dataset: {"projectlist": project_list_result, 
                     "actionlist": projectlist_actionlist}
      }
    }else{
      return {
          result:'No Project',
          status:1,
          dataset: {"projectlist":project_list_result, 
                    "actionlist":projectlist_actionlist_result}
      }
    }

})
