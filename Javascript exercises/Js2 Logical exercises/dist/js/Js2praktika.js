// 1 uzduotys

let n = 20;

if (n>0) {
    console.log("Skaicius geras");
} else if (n == 0){
    console.log("Ivestas nulis")
} else {
    console.log("Skaicius blogas");
}

//2 uzduotys
let sv = 2;

if (sv==1) {
    console.log("Eikite per pereja");
} else if (sv==2) {
    console.log("Palaukite");
} else if (sv==3){
    console.log("Sustokite");
} else {
    console.log("Ivestas skaicius nera nei 1, nei 2, nei 3");
}

//3 uzduotys
let k = 8;
let d = 2;
let kn = 5;

if (d*kn>=k) {
    console.log("Knygos telpa i dezes")
} else {
    console.log("Knygos netelpa i dezes")
}

//4 Uzduotys
let sk = 1221;
let last = sk % 10;
let first = Math.floor(sk / 1000) %10;
let middleFirst = Math.floor (sk /100) %10;
let middleSecond = Math.floor(sk / 10) %10;

// if (first==last){
//     if(middleFirst==middleSecond){
//         console.log("Skaicius yra polindromas");
//     } else {
//         console.log("Skaicius nera polindromas")
//     }
// } else {
//     console.log("Skaicius nera polindromas")
// }

if(first == last && middleFirst == middleSecond ){
    console.log("Skaicius yra polindromas");
} else {
    console.log("Skaicius nera polindromas");
}

//5 Uzduotys
let bilietoNr = 444444;
let sestSkaitmuo = bilietoNr % 10;
let penkSkaitmuo = Math.floor(bilietoNr / 10) %10;
let ketvSkaitmuo = Math.floor(bilietoNr /100) %10;
let trecSkaitmuo = Math.floor(bilietoNr /1000) %10;
let antrSkaitmuo = Math.floor(bilietoNr /10000) %10;
let pirmSkaitmuo = Math.floor(bilietoNr /100000) %10;
let suma = pirmSkaitmuo + antrSkaitmuo + trecSkaitmuo + ketvSkaitmuo + penkSkaitmuo + sestSkaitmuo
console.log(suma);

if(suma % 4 == 0) {
    console.log("Bilietas laimingas")
} else {
    console.log("Jusu bilietas nieko nelaimejo")
}

//6 Uzduotys
let metai = 2004;

if(metai % 4 ==0 && metai % 100 != 0) {
    console.log("Metai keliamieji")
} else {
    console.log("Metai nekeliamieji")
}

//7 Uzduotys
let skc = 12321;
let Sk5 = skc % 10;
let Sk4 = Math.floor(skc /10) %10;
let Sk3 = Math.floor(skc /100) %10;
let Sk2 = Math.floor(skc /1000) %10;
let Sk1 = Math.floor(skc /10000) %10;

if (Sk1 == Sk5 && Sk2==Sk4){
    console.log("Skaicius polindromas")
} else {
    console.log('Skaicius nepolindromas')
}

//8 Uzduotys
let kauliukoSk=6;

if(kauliukoSk %2 ==0){
    console.log("Tvarko vyresnelis")
} else {
    console.log('Tvarko jaunesnis')
}

//9 Uzduotys
let p1 = 5;
let p2 = 8;
let p3 = 9;

if(p1>p2 && p1>p3){
    console.log("Pirmas gavo geriausia pazymi")
} else if(p2>p1 && p2>p3){
    console.log("Antras gavo geriausia pazymi")
} else{
    console.log("Trecias gavo geriausia pazymi")
}

//10 Uzduotys
let day28 = 28;
let day30 = 30;
let day31 = 31;
let menuo = 4;

if (menuo<=0 || menuo>=12){
    console.log("Nera tiek menesiu")
} else if(menuo==4 || menuo==6 || menuo==9 || menuo==11){
    console.log(day30)
} else if(menuo==2){
    console.log(day28)
} else{
    console.log(day31)
}

// 11 U??duotys
// . Petras i????jo i?? nam??, kai laikrodis rod?? v1 valand?? ir m1 minu??i??. ?? gimnazij?? Petro 
// kelion?? trunka m2 minu??i??. Para??ykite program??, kuri ekrane parodyt?? prane??im?? apie 
// tai, ar Petras nepav??luos ?? pamok??, prasidedan??i?? v valand?? ir m minu??i??. Pasitikrinkite: 
// jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi b??ti: Petras ?? pamok?? pav??luos; jei v1 = 8, 
// m1 = 29, m2 = 23, v = 9, m = 5, turi b??ti: Petras ?? pamok?? nepav??luos


let v1 = 8; //Petro isejimo is namu valandos
let m1 = 29; //Petro isejimo is namu minutes
let v = 9; //Pamokos pradzios valandos
let m = 5; //Pamokos pradzios minutes
let m2 = 43; // kelione iki mokyklos

if(v*60+m >= v1*60+m1+m2) {
    console.log("Petras nepaveluos");
} else {
    console.log("Petras paveluos");
}

//12 U??duotys
// . Yra n degtuk??. Para??ykite program??, kuri nustatyt??, ar i?? t?? degtuk?? galima sud??ti 
// lygiakra??t?? trikamp??. D??liojamai fig??rai turi b??ti panaudoti visi degtukai. Degtuk?? lau??yti 
// negalima. Pasitikrinkite: jei n = 6, turi b??ti: Trikamp?? sud??lioti galima. jei n = 4, turi b??ti:
// Trikamp?? sud??lioti negalima.

let degtN = 7;

if (degtN%3 === 0 && degtN!== 0 ){
    console.log("Trikamp?? sud??lioti galima");
}   else {
    console.log ("Trikamp?? sud??lioti negalima")
}

//13 U??duotys
// Pirmosios olimpin??s ??aidyn??s ??vyko 1896 metais ir toliau organizuojamos kas ketveri 
// metai. Jei ??aidyn??s ne??vyksta, tie metai vis tiek laikomi olimpiniais, o ??aidyn??ms 
// skiriamas eil??s numeris. Para??ykite program??, kuri surast?? m-??j?? met?? olimpini?? 
// ??aidyni?? numer?? n. Jei metai neolimpiniai, turi b??ti spausdinama ???Metai neolimpiniai???. 
// Pasitikrinkite. Kai m = 1904, turi b??ti spausdinama: n = 3. Kai m = 2005, turi b??ti 
// spausdinama: Metai neolimpiniai

let mm = 2008;
let olimp = mm-1896;

if (olimp%4===0){
    console.log((olimp/4)+1);
} else {
    console.log("Metai neolimpiniai");
}

//14 Uzduotys
// ??inomi kvadratin??s lygties ax2 +bx+c=0 koeficientai a, b, c. Para??ykite program??, kuri 
// rast?? lygties sprendinius. Pasitikrinkite:a=1, b=2, c=1, kompiuterio ekrane turi b??ti 
// rodomas rezultatas: vienas sprendinys 1.00 a=1, b=4, c=3, kompiuterio ekrane turi b??ti 
// rodomas rezultatas: du sprendiniai 3.00 1.00 a=1, b=3, c=4, kompiuterio ekrane turi b??ti 
// rodomas rezultatas: n??ra sprendini??

let aa = 1;
let bb = 4;
let cc = 3;
let diskriminantas = (bb*bb)-4*aa*cc;
let pirmSpr = ((-bb) + Math.sqrt(diskriminantas))/(2*aa);
let antrSpr = ((-bb) - Math.sqrt(diskriminantas))/(2*aa);

if (diskriminantas===0){
    console.log("Vienas sprendinys: "+ (-bb/2*aa));
} else if(diskriminantas>0){
    console.log("Du sprendiniai: "+pirmSpr+ " " +antrSpr);
} else {
    console.log("Nera sprendiniu");
}

//15 Uzduotys
// Saulius sutaup?? c cent?? ir u?? juos nusprend?? nusipirkti led??. Parduotuv??je porcija led?? 
// kainuoja p cent??. Para??ykite program??, kuri suranda, kiek porcij?? led?? k nusipirks Saulius 
// ir kiek cent?? m dar liks. Pasitikrinkite Kai c=50, p=20, turi b??ti : Saulius nusipirks 2 
// porcijas, liks cent?? 10

let cent = 50;
let pp = 20;
let leduPorcijos = Math.floor(cent/pp)

if(cent >= pp){
    console.log("Saulius nusipirks " +leduPorcijos+ "porcijas, liks "+ (cent-(leduPorcijos*pp)) +"centu")
} else {
    console.log ("Neturi pakankamai pinigu");
}

//16 Uzduotys
// Vairuotojas i?? sand??lio ?? parduotuv?? turi perve??ti n d????i?? preki??. ?? ma??in?? telpa m d????i?? 
// preki??. Sukurkite program??, kuri apskai??iuot?? ir kompiuterio ekrane parodyt??, kiek kart?? 
// k tur??s nuva??iuoti vairuotojas ?? sand??l??, kad parve??t?? visas preki?? d????es ?? parduotuv??. 
// Pasitikrinkite: jei n = 100, m = 14, tai k = 8.

let nnn = 13;
let mmm = 14;
// let kartai = Math.ceil(nnn/mmm);
let kartai = Math.floor(nnn/mmm);

if(nnn > 0 && mmm > 0 ){
    console.log(kartai+1);
} else {
    console.log("Prekiu vezti nereikia");
}

//17 Uzduotys
// Duoti du sveikieji skai??iai a ir b. Para??ykite program??, kuri didesn?? skai??i?? pama??intu 
// vienetu, o ma??esn?? padidintu vienetu.

let sveikasA = -8;
let sveikasB = -3;

if(sveikasA> sveikasB){
    console.log("Didesni skaiciu sumaziname vienetu: " + (sveikasA - 1) + " Mazesni skaiciu padidiname vienetu " + (sveikasB + 1));
} else if (sveikasB > sveikasA){
    console.log("Didesni skaiciu sumaziname vienetu: " + (sveikasB - 1) + " Mazesni skaiciu padidiname vienetu " + (sveikasA + 1));
} else {
    console.log("Skaiciai yra lygus arba neigiami");
}

//Salyginiai uzdaviniai2

//1 Uzduotys
// Para??ykite program??, kuri apskai??iuot??, kiek knyg?? k vidutini??kai per metus perskaito 
// vienas mokyklos bibliotekos lankytojas. ??inomas vidutini??kai per vien?? m??nes?? 
// perkaityt?? knyg?? skai??ius v ir vidutini??kai per metus apsilankiusi??j?? bibliotekoje skai??ius 
// n. Pasitikrinkite: ??ved?? v = 120 , n = 800, tur??tume gauti: k = 2;

let vv = 120;
let lankytojai = 800;

if ((vv*12) / lankytojai > 0){
    console.log(Math.ceil(vv*12 / lankytojai));
} else {
    console.log("Biblioteka buvo uzdaryta rekonstrukcijai");
}

//2 Uzduotys
// Para??ykite program??, kuri apskai??iuot??, kiek vidutini??kai keleivi?? k va??iuoja ?? Vilni?? 
// viename traukinio vagone, jei ??inomas traukinio keleivi?? skai??ius n, keleivi?? vykstan??i?? 
// ne ?? Vilni??, skai??ius m ir vagon?? skai??ius v. Pasitikrinkite: ??ved?? n = 100 , m = 20 ir v = 
// 4, tur??tume gauti: k = 20;

let kelSk = 100;
let neIVln = 20;
let vagonuSk = 4;

if(kelSk > 0){
    console.log("I vilniu vaziuoja viename vagone " + ((kelSk-neIVln)/4) + " keleiviu");
} else {
    console.log("Traukinis be keleiviu");
}

//3 Uzduotys
// Atnaujinus sodo nam??, jo kaina i??augo 25%. Ra??ant skelbim?? apie ???? nam??, buvo 
// padaryta klaida ??? neteisingai nurodyta naujoji kaina. Kokia tur??t?? b??ti naujoji namo 
// kaina, kai pradin?? yra n eur??, o nauja para??yta kaina p eur??? Pasitikrinkite: Kai n = 
// 54000, p=60000, turi b??ti spausdinama: nauja namo kaina 67500.

let pradKaina = 54000;
let naujaKaina = 60000;

if (pradKaina > 0){
    console.log (((naujaKaina - pradKaina)*1.25)+naujaKaina);
} else {
    console.log("Namas neparduodamas");
}

//4 Uzduotys
// Viename ??kyje surinkta n (realus) ton?? obuoli?? derliaus, o kitame surinkta m (realus) 
// ton?? ma??iau. Kiek ton?? surinkta abiejuose ??kiuose? Pasitikrinkite: Kai n = 39.2, m=0.4, 
// turi b??ti spausdinama: abiejuose ??kiuose surinkta 78.

let surinktas1 = 39.2;
let maziau = 0.4;

if (surinktas1 > 0){
    console.log("Abiejuose ukiuose surinkta " + ((surinktas1 - maziau)+surinktas1));
} else {
    console.log("derliaus nebuvo");
}

//5 Uzduotys
// . Sen?? besmegen?? sudaro trys sniego rutuliai. Popieriuje jie atrodo kaip skrituliai. 
// Ma??iausio skritulio spindulys r. Sudarykite program??, kuri apskai??iuot?? kiekvieno 
// skritulio plot??, jei kit?? apskritim?? spinduliai 2 kartus didesni u?? prie?? tai esant??? 
// Pasitikrinkite: Kai r=1, turi b??ti spausdinama: skrituli?? plotai 3.14, 12.56 ir 50.24

let rSpind1 = 1;
let pi = 3.14;

if (rSpind1 > 0){
    console.log("Skrituliu plotai " +(pi*(rSpind1*rSpind1))+ " bei "+ (pi*(rSpind1*rSpind1)*4)+ " bei " +(pi*(rSpind1*rSpind1)*16));
}
else {
    console.log("nenustatytas plotas")
}

//6 Uzduotys
// Turime ??e??is atsitiktinius skai??ius nuo 1000 iki 9999. Surikiuoti juos did??jimo tvarka

rd1 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd1);
rd2 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd2);
rd3 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd3);
rd4 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd4);
rd5 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd5);
rd6 = Math.floor(Math.random()*(9999-1000))+1000; //min included, max excluded
console.log(rd6);

console.log("---------------------------")
// 1 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

if(rd2>rd3){
    let xxx = rd2;
    rd2 = rd3;
    rd3 = xxx;
}

if(rd3>rd4){
    let xxx = rd3;
    rd3 = rd4;
    rd4 = xxx;
}

if(rd4>rd5){
    let xxx = rd4;
    rd4 = rd5;
    rd5 = xxx;
}

if(rd5>rd6){
    let xxx = rd5;
    rd5 = rd6;
    rd6 = xxx;
}
//2 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

if(rd2>rd3){
    let xxx = rd2;
    rd2 = rd3;
    rd3 = xxx;
}

if(rd3>rd4){
    let xxx = rd3;
    rd3 = rd4;
    rd4 = xxx;
}

if(rd4>rd5){
    let xxx = rd4;
    rd4 = rd5;
    rd5 = xxx;
}
//3 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

if(rd2>rd3){
    let xxx = rd2;
    rd2 = rd3;
    rd3 = xxx;
}

if(rd3>rd4){
    let xxx = rd3;
    rd3 = rd4;
    rd4 = xxx;
}
//4 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

if(rd2>rd3){
    let xxx = rd2;
    rd2 = rd3;
    rd3 = xxx;
}
//5 ciklas
if(rd1>rd2){
    let xxx = rd1;
    rd1 = rd2;
    rd2=xxx;
}

console.log(rd1);
console.log(rd2);
console.log(rd3);
console.log(rd4);
console.log(rd5);
console.log(rd6);
