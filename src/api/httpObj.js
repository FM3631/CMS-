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
    const loopListUrl = `/api/api/cms/article/open/banner/list?Content-Type=application/x-www-form-urlencoded&pageNum=${x}&pageSize=${y}`
    return http.post(loopListUrl);
}
//获取类别的接口
function getTypeList(x,y){
    const typeListUrl = `/api/api/cms/category/open/list?Content-Type=application/x-www-form-urlencoded&pageNum=${x}&pageSize=${y}`
    return http.post(typeListUrl);
}
//获取类别中的内容接口
function getTypeContainerList(pageNum=0,pageSize=0,categoryId){
    const typeContainerLis = `/api/api/cms/article/open/list?Content-Type=application/x-www-form-urlencoded&pageNum=${pageNum}&pageSize=${pageSize}&categoryId=${categoryId}`
    return http.post(typeContainerLis);
}
// 这是一个普通导出
export {
    getLoopList,
    getTypeList,
    getTypeContainerList
}

// 默认导出只能导出一个