console.log("1. feladat.");
let a;
let b;
let osszeg = 0;
let sumszam = [2, 4, 5];
for (let i = 0; i<sumszam.length; i++) {
    a = sumszam[i];
    b = osszeg;
    osszeg = b + a;
}
console.log("Az ertek: "+osszeg);

console.log("2. feladat.");
let d;
let e;
let osszeg2 = 0;
let sumszam2 = [2, 4, 5, "valami", 11, "szia:)"];
for (let i = 0; i<sumszam2.length; i++) {
    if (isNaN(sumszam2[i])) {
    console.log("A(z) "+i+". elem nem szam. ("+sumszam2[i]+")");
	sumszam2[i] = 0;
    }
    d = sumszam2[i];
    e = osszeg2;
    osszeg2 = d + e;
}
console.log("Az ertek: "+osszeg2);

console.log("3. feladat.");
let f;
let g;
let osszeg3 = 0;
let sumszam3 = [2, 4, 5, "valami", 11, "szia:)", "3", "40"];
for (let i = 0; i<sumszam3.length; i++) {
    sumszam3[i] = parseInt(sumszam3[i]);
    if (isNaN(sumszam3[i])) {
    console.log("A(z) "+i+". elem nem szam.");
	sumszam3[i] = 0;
    }
    f = sumszam3[i];
    g = osszeg3;
    osszeg3 = f + g;
}
console.log("Az ertek: "+osszeg3);