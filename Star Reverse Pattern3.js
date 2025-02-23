let n = 4; 
for (let i = n; i >= 1; i--) { 
    let star = "* "; 
    let space = '  '; 
    console.log(space.repeat((n - i)) + star.repeat(i * 2 - 1)); 
}