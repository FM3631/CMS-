import http from "./http.js";



function getLogin(username, rememberMe=true, password) {
    const formData = new FormData()
    formData.append("username",username)
    formData.append("password",password)
    formData.append("rememberMe",rememberMe)
    return http.post("/api/login",formData);
}

// 这是一个普通导出
export { getLogin }


