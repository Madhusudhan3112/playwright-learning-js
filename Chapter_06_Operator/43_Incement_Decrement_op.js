let a = 10;

console.log(a++); // 10 → prints OLD, then a = 11
console.log(a);   // 11

console.log(++a); // 12 → increments FIRST, prints NEW
console.log(a);   // 12

console.log(a--); // 12 → prints OLD, then a = 11
console.log(a);   // 11

console.log(--a); // 10 → decrements FIRST, prints NEW
console.log(a);   // 10