let str = '  I am junior developer ';

let str1 = '  I am junior developer ';
document.getElementById("1").innerHTML = str1.length;
console.log(str.length);

let str2 = '  I am junior developer ';
document.getElementById("2").innerHTML = str2.replace('junior', 'senior');
console.log(str.replace('junior', 'senior'));

let str3 = '  I am junior developer  ';
document.getElementById("3").innerHTML = str3.slice(6, 14) ;
console.log(str.slice(8, 15));

let str4 = '  I am junior developer  ';
document.getElementById("4").innerHTML = str4.includes("developer");
console.log(str.includes('developer'));

let str5 = '  I am junior developer  ';
document.getElementById("5").innerHTML = str5.trim('');
console.log(str.trim(''));

let str6 = '  I am junior developer  ';
document.getElementById("6").innerHTML = str6.endsWith("developer  ");
console.log(str.endsWith("developer  "));

let str7 = '  I am junior developer  ';
document.getElementById("7").innerHTML = str7.toUpperCase();
console.log(str.toUpperCase())

let str8 = '  I am junior developer  ';
document.getElementById("8").innerHTML = str8.toLowerCase();
console.log(str.toLowerCase());
