
let grades = {
    A: 85,
    B: 92,
    C: 78,
    D: 88
  };
  grades.B = 99;
  delete grades.C; 
  console.log("Updated grades object:", grades);
  