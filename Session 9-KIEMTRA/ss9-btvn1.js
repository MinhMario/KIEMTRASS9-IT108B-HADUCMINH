let orders=["Đơn hàng A","Đơn hàng B","Đơn hàng C","Đơn hàng D","Đơn hàng E"];
let revenues=[1500,2800,1200,-500,3200];
let orderReports=orders.map((name,index)=>{
   let call=name+"mang về"+revenues[index];
   return call;
});
console.log(orderReports);
