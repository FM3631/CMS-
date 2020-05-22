import http from "./http.js";

//获取轮播图的接口
function getLoopList(x = 1, y = 10) {
    const formData = new FormData();
    formData.append('x', x)
    formData.append('y', y)
    const loopListUrl = `/api/cms/article/open/banner/list`
    return http.post(loopListUrl, formData);
}
//获取类别的接口
function getTypeList(x, y) {
    const formData = new FormData();
    formData.append('x', x)
    formData.append('y', y)
    const typeListUrl = `/api/cms/category/open/list`
    return http.post(typeListUrl, formData);
}
//获取新闻列表接口
function getTypeContainerList(pageNum = 0, pageSize = 0, categoryId) {
    const formData = new FormData();
    formData.append('pageNum', pageNum)
    formData.append('pageSize', pageSize)
    formData.append('categoryId', categoryId)
    const typeContainerListUrl = `/api/cms/article/open/list`
    return http.post(typeContainerListUrl, formData);
}
//获取搜索接口
function getSearchList(pageNum = 0, pageSize = 5, value) {
    const formData = new FormData();
    formData.append('pageNum', pageNum)
    formData.append('pageSize', pageSize)
    formData.append('title', value)
    const searchListUrl = `/api/cms/article/open/list`
    return http.post(searchListUrl, formData);
}
//获取热门新闻接口
function hotSearchList(pageNum = 0, pageSize = 8) {
    const formData = new FormData();
    formData.append('pageNum', pageNum)
    formData.append('pageSize', pageSize)
    const hotSearchListUrl = `/api/cms/article/open/hot/list`
    return http.post(hotSearchListUrl, formData);
}
//上传头像接口
function changeImg(avatarfile) {
    const formData = new FormData();
    formData.append('avatarfile', avatarfile)
    const changeImgUrl = `/api/system/user/profile/update/avatar/nos`
    return http.post(changeImgUrl, formData)
}

//查看个人信息
function getInfo(loginName, phonenumber, avatar, userName) {
    const formData = new FormData();
    formData.append('loginName', loginName)
    formData.append('phonenumber', phonenumber)
    formData.append('avatar', avatar)
    formData.append('userName', userName)
    const getInfoUrl = `/api/login-user/info`
    return http.get(getInfoUrl, formData);
}
//修改信息接口
function changeinfo( userName,phonenumber) {
    const formData = new FormData();
    formData.append('userName', userName)
    formData.append('phonenumber', phonenumber)
    const changeInfoUrl = `/api/system/user/profile/update`
    return http.post(changeInfoUrl, formData);
}
 function logOut() {
    const urlOut = '/api/logout'
    return http.get(urlOut)
}
// 这是一个普通导出，默认导出只能导出一个
export {
    getLoopList,
    getTypeList,
    getTypeContainerList,
    getSearchList,
    hotSearchList,
    changeImg,
    getInfo,
    changeinfo,
    logOut
}

// 默认导出只能导出一个