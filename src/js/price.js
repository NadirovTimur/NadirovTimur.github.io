
let type = prompt("Выберите тип сайта: 1 - корпоративный 2 - интернет магазин");
let design = prompt("Выберите тип сайта: 1 - красивый 2 - очень красивый");
let adapt = prompt("Выберите тип сайта: 1 - адаптивный 2 - неадаптивный");

let p1,p2,p3,t1,t2,t3=0;

if (type=1){
    p1=1000;
    t1=1;
}
else{
     p1=2000;
    t1=2;
}
if (design=1){
   p2=1000;
     t2=1;
}
else{
    p2=2000;
     t2=2;
}
if (adapt=1){
     p3=2000;
     t3=2;
}
else{
    p3=1000;
   t3=1;
}

let price = p1+p2+p3;
let term = t1+t2+t3;

alert("Cтоимость сайта:"+ price + "руб. " + " Срок:" + term + "суток");