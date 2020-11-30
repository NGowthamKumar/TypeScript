export {}
var msg: string = "gowtham kumar";
console.log(msg);

var num: number = 10;
console.log(num);

function no(x: number,y: number): number{
  return x+y;
}
console.log(no(5,12));

function str(name: string): string{
  return "Hi " + name;
}
console.log(str("gowtham"));

function an(x: any): any{
  return x;
}
console.log(an("how are you"));
console.log(an(56));
