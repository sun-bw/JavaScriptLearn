function myModule(){
    // 私有的数据
    var msg = 'Soul Mate'
    // 操作数据的函数
    function doSomething(){
        console.log('dosomething'+msg.toUpperCase());
    }
    function doOthering () {
        console.log('doOthering'+msg.toLowerCase())
    }

    // 向外暴露对象（给外部使用的方法）
    return {
        doSomething:doSomething,
        doOtherthing:doOthering
    }
}