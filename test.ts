// 类装饰器1
function logClass1(params: string) {
  return function (target: any) {
    console.log('类装饰器1');
  };
}
// 类装饰器2
function logClass2(params: string) {
  return function (target: any) {
    console.log('类装饰器2');
  };
}
// 属性装饰器
function logAttribute(params?: string) {
  return function (target: any, attrName: any) {
    console.log('属性装饰器');
  };
}
// 方法装饰器
function logMethod(params?: string) {
  return function (target: any, methodName: any, desc: any) {
    console.log('方法装饰器');
  };
}
function logMethod1(params?: string) {
  return function (target: any, methodName: any, desc: any) {
    console.log('方法装饰器1');
  };
}
// 方法参数装饰器1
function logParmas1(params?: string) {
  return function (target: any, methodName: any, paramsIndex: any) {
    console.log('方法参数装饰器1');
  };
}
// 方法参数装饰器2
function logParmas2(params?: string) {
  return function (target: any, methodName: any, paramsIndex: any) {
    console.log('方法参数装饰器2');
  };
}

@logClass1('www.baidu.com')
@logClass2('www.qq.com')
class HttpClient {
  @logMethod1()
  setData(@logParmas1() attr1: any, @logParmas2() attr2: any) {}
  @logMethod()
  getData() {}
  @logAttribute()
  public url: string | undefined;
  constructor() {}
}

var http = new HttpClient();
// 属性装饰器
// 方法装饰器
// 方法参数装饰器2
// 方法参数装饰器1
// 类装饰器2
// 类装饰器1
