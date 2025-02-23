let n = 4;
let k=10;
for(let i=n;i>=1;i--){

    let p=" ";
    for(let j = i;j>=1;j--){
        p += k;
           k--;
        }
        console.log(p);
    }