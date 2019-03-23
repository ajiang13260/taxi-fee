fee=6;
length=0;
time=0;
if(length>2&length<=8){
    fee=fee+0.8*length;
}
else(length>8){
    fee=fee+0.8*1.5*length;
}
if (time!=0){
    fee=fee+0.25*time;
}
Math.round(fee)
