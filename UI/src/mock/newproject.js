import Mock from 'mockjs';


Mock.setup({timeout:'0'})

Mock.mock("/projectmanagement/newproject", 'post', function(options){
    return{
    result:'收到了',
    dataset:options.body
    }
})