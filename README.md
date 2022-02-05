## 传统做法
1.绑定事件处理  -- 数据
  1.增加
    增加列表数据 { id, content, timestamp, completed: false}
  2.删除
    根据id remove 列表数据
  3.改变
    根据id 改变 completed: true



## 面向对象 类的继承 横向切割
1. 程序进行分类
  1. 外层 通过浏览器事件 -> 调用方法(事件处理函数绑定)
  2. 操作数据: ADD、 REMOVE、TOGGLE
  3. 操作DOM
  4. 模板 View --> 可以接收参数
  

## Todo-Ts
