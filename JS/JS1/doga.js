'use strict'

console.log("1. feladat.");
let szam = 4;
if ( szam > 4 ) {
	console.log ("szam nagyobb 4-nél.");
} else { if ( szam < 4 ) {
	            console.log ("szam kisebb 4-nel.");
            } else {
                console.log("szam egyenlo 4-el.");            
            }
        }

console.log("2. feladat.");
let sor;
let vanbenne = false;
let nevek = ["Gabor", "Erzsi", "Pista", "Elemer", "Monika", "Janos"];
for ( let i = 0; i<nevek.length; i++) {
	if ( nevek[i] === "Pista") {
	        vanbenne=true;
	        sor = i;
    }
}

if (vanbenne) {
    console.log("Van Pista.");
    console.log("Pista a(z) "+sor+". helyen van.");
} else {
    console.log("Nincs Pista.");
}

console.log("3. feladat.");
let a;
let b;
let c = 0;
let sumszam = [10, 50, 28, 11, 26, 17, 22];
for (let i = 0; i<sumszam.length; i++) {
    a = sumszam[i];
    b = c;
    c = b + a;
}
console.log("Az ertek: "+c);