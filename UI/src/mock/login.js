import Mock from 'mockjs';


Mock.setup({ timeout: '0' })



const userdb = [
    {   
        uid:0,
        username: "a",
        password: "a"
    },
    {   
        uid:1,
        username: "b",
        password: "b"
    },
    {
        uid:2,
        username: "abc@gmail.com",
        password: "123"
    },
    {
        uid:3,
        username: "def@gmail.com",
        password: "123"
    },
    {
        uid:4,
        username: "ghi@gmail.com",
        password: "123"
    },
    {
        uid:5,
        username: "jkl@gmail.com",
        password: "123"
    },
    {
        uid:6,
        username: "mno@gmail.com",
        password: "123"
    },
    {
        uid:7,
        username: "pqr@gmail.com",
        password: "123"
    },
]





function testLogin(username, password) {
    var isResult=-1;
    userdb.forEach(element => {
        if(element.username===username&&element.password===password){
            isResult={id:element.uid,
                      username:element.username};
            return
        }
    })
     return isResult

}

Mock.mock("/login", 'post', function (req) {

    var postdata=JSON.parse(req.body);
    var result = testLogin(postdata.email, postdata.password)
    if (!(result===-1)) {
        return {
            result: 'Login Success',
            status:0,
            dataset: result
        }
    } else {
        return {
            result: 'Username or Password is wrong',
            status:1,
            dataset: ""
        }
    }

})
