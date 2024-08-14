module.exports = function reverse (n) {
    let str = '';
    if(n<0){
        n= n-n-n;
    }
    let  x = String(n);
for(let i=x.length-1;i>-1;i--){
    str+=x[i];
}
return Number(str);
}
