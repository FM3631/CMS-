import http from "./http.js";


//登陆接口
function getLogin(username, password,rememberMe=true) {
    const formData = new FormData()
    formData.append("username",username)
    formData.append("password",password)
    formData.append("rememberMe",rememberMe)
    const getLoginUrl = `api/login`
    return http.post(getLoginUrl,formData);
}
//注册接口
function getRegister(loginName,password,phonenumber,code,userName=111){
    const formData = new FormData();
    formData.append("loginName",loginName)
    formData.append("password",password)
    formData.append("phonenumber",phonenumber)
    formData.append("code",code)
    formData.append("userName",userName)
    const getRegisterUrl = `/api/registry`
    return http.post(getRegisterUrl,formData)
}
//获取验证码接口
function getTest(phoneNum){
    const getTestUrl = `/api/short-message/vcode/${phoneNum}`
    return http.get(getTestUrl)
}
// 这是一个普通导出
export {
     getLogin,
     getRegister,
     getTest
}

