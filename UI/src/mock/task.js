import Mock from 'mockjs';

  const tasks = [
    {
      id: 1,
      open: true,
      start_date: "2020-11-06",
      duration: 8,
      text: "React Gantt Widget",
      progress: 60,
      type: "project",
      member:"Lunan Nie"
    },
    {
      id: 2,
      parent: 1,
      start_date: "2020-11-06",
      duration: 4,
      text: "Lib-Gantt",
      progress: 80,
      member:"Lunan Nie"
    },
    {
      id: 3,
      parent: 1,
      start_date: "2020-11-08",
      duration: 4,
      text: "UI Layer",
      progress: 30,
      member:"Lunan Nie"
    },
    {
      id: 4,
      start_date: "2020-11-07",
      duration: 8,
      text: "Documentation",
      progress: 10,
      type: "project",
      member:"Lunan Nie"
    },
    {
      id: 5,
      parent: 4,
      start_date: "2020-11-07",
      duration: 1,
      text: "Overview",
      progress: 30,
      member:"Lunan Nie"
    },
    {
      id: 6,
      parent: 4,
      start_date: "2020-11-07",
      duration: 8,
      text: "API reference",
      progress: 0,
      member:"Lunan Nie"
    },
    {
      id: 7,
      start_date: "2020-11-07",
      text: "Milestone Test 01",
      type: "milestone",
      member:"Lunan Nie"
    },
    {
      id: 8,
      start_date: "2020-11-10",
      text: "Milestone Test 02",
      type: "milestone",
      member:"Lunan Nie"
    },
    {
      id: 9,
      start_date: "2020-11-12",
      text: "Milestone Test 03",
      type: "milestone",
      member:"Lunan Nie"
    },
    {
      id: 10,
      start_date: "2020-11-07",
      text: "Project Test 03",
      type: "project",
      duration:10,
      member:"Lunan Nie",
      open:true,
    },
    {
      id: 11,
      start_date: "2020-11-07",
      text: "Task Test 01",
      type: "task",
      duration:2,
      parent:10,
      member:"Lunan Nie"
    },
    {
      id: 12,
      start_date: "2020-11-09",
      text: "Task Test 02",
      type: "task",
      duration:3,
      member:"Lunan Nie",
      parent:10,
    }
    
  ];


  const links = [
    { source: 2, target: 3, type: 2 },
    { source: 1, target: 4, type: 1 },
    { source: 5, target: 6, type: 2 },
    { source: 8, target: 9, type: 0 },
    { source: 11,target:12, type: 0 }
  ];
  
  
Mock.setup({timeout:'0'})

Mock.mock("/projectmanagement/project/task", 'get', {
        tasks,
        links
})

/*
tasks = [
  {
    id: 2,                                      //This is Task ID
    start_date: "2020-11-06",                   //This is the start date
    duration: 8,                                //This is the duration time: end - start = duration. If you send end date, I will add a funtion to compute this.
    text: "React Gantt Widget",                 //This is the task title
                          //above is compulsory. 上面是必须信息。下面是可选信息
    open: true,                                 //This is whether the task is folded or open ---展开或折叠=》显示子项
    progress: 60,                               //This is the progress of this task
    type: "project",                            //task type:  can be {task, project, milestone} 
    member:1023512,                          //who takes this task. I think this could be an array. Besides, this should be the userId.
    parent:1                                    // This is the parent id. 比如这里的1表示 任务一（id: 1） 包含 任务二(id: 2)
  },
  //注意 milestone 没有duration 只有开始日期.
],

links= [
  { source: 1, target: 2, type: 0}    //该组数据表示： 任务一 到 任务二 是结束到开始的关系。
                                      //soure: 前一个task的id； 
                                      //target：后一个task的id；  
                                      //type：关系类型，0表示finish ->start, 1表示start -> start,   2表示finish -> finish
]
*/