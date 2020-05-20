import http from "./http.js";
// 这个方法的功能：调用接口获取我们榜单列表
// 输入： 
// type：类型
// size: 返回多少条数据
// offset：偏移量
// 输出：
//     请求到的数据。

//获取轮播图的接口
function getLoopList(x=1,y=10) {
    const formData = new FormData();
    formData.append('x',x)
    formData.append('y',y)
    const loopListUrl = `/api/cms/article/open/banner/list`
    return http.post(loopListUrl,formData);
}
//获取类别的接口
function getTypeList(x,y){
    const formData = new FormData();
    formData.append('x',x)
    formData.append('y',y)
    const typeListUrl = `/api/cms/category/open/list`
    return http.post(typeListUrl,formData);
}
//获取新闻列表接口
function getTypeContainerList(pageNum=0,pageSize=0,categoryId){
    const typeContainerListUrl = `/api/cms/article/open/list?Content-Type=application/x-www-form-urlencoded&pageNum=${pageNum}&pageSize=${pageSize}&categoryId=${categoryId}`
    return http.post(typeContainerListUrl);
}
//获取搜索接口
function getSearchList(pageNum=0,pageSize=5,value){
    const formData = new FormData();
    formData.append('pageNum',pageNum)
    formData.append('pageSize',pageSize)
    formData.append('title',value)
    const searchListUrl = `/api/cms/article/open/list`
    return http.post(searchListUrl,formData);
}
// 这是一个普通导出
export {
    getLoopList,
    getTypeList,
    getTypeContainerList,
    getSearchList
}

// 默认导出只能导出一个