let revenues=[1500,2800,1200,-500,3200];
let orders=["Đơn hàng A","Đơn hàng B","Đơn hàng C","Đơn hàng D","Đơn hàng E"];
let result=0;
for(let i=0;i<revenues.length;i++){
    if(revenues[i]<0){
        revenues[i]=0;
    }
    result+=revenues[i];
}
console.log("Tổng doanh thu là"+result);