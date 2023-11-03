let a = "OK";

let b = {
    ime: "Marko",
    prezime: "Maric",
    ispiti: ["Web aplikacije", "Programsko"]
}

console.log(b);

// 1.nacin pozivanje - C način
function spoji_ime_prezime(student, spojka){
    return student.ime + spojka + student.prezime;
}

let c = spoji_ime_prezime(b, "-")

console.log(c);

//2.nacin, bezimena funkcija spremljena u varijablu

let spoji2 = function (student, spojka){
    return student.ime + spojka + student.prezime;
} 

let c2 = spoji2(b, "?")
console.log(c2);

//3.nacin arrow funkcija (lambda funkcija)

let spoji3 = (student, spojka) => student.ime + spojka + student.prezime;
let c3 = spoji3(b, ";");
console.log(c3);

//4. nacin funkcija kao dio objekta
let objekt_s_funkcijom = {
    ime: "Marko",
    prezime: "Maric",
    ispiti: ["Web aplikacije", "Programsko"],
    spoji: function (student, spojka){
        return this.ime + spojka + this.prezime;
    } 
}

let c4 = objekt_s_funkcijom.spoji(b, ">");
console.log(c4);

//4a nacin 
let objekt_s_funkcijom_2 = {
    ime: "Marko",
    prezime: "Maric",
    ispiti: ["Web aplikacije", "Programsko"],
    spoji(spojka){
        return this.ime + spojka + this.prezime;
    } 
}

let c5 = objekt_s_funkcijom_2.spoji(">>>");
console.log(c5);

//5. nacin
let objekt_s_funkcijom_3 = {
    ime: "Marko",
    prezime: "Maric",
    ispiti: ["Web aplikacije", "Programsko"],
    spoji: function(spojka) {
      return this.ime + spojka + this.prezime;
    }
  };
  
  let c6 = objekt_s_funkcijom_3.spoji("=");
  console.log(c6);

  
//asinkrone funkcije
async function spoji_ime_prezime_a(student, spojka) {
    return student.ime + spojka + student.prezime;
}
let spoji2a = async function (student, spojka) {
    return student.ime + spojka + student.prezime;
}
let spoji3a = async (student, spojka) => student.ime + spojka + student.prezime;
let objekt_s_funkcijom_a = {
    ime: "Marko",
    prezime: "Marić",
    ispiti: ["Web aplikacije", "Programsko"],
    spoji: async function (spojka) {
        return this.ime + spojka + this.prezime;
    }
}
let objekt_s_funkcijom_3a = {
    ime: "Marko",
    prezime: "Marić",
    ispiti: ["Web aplikacije", "Programsko"],
    async spoji(spojka) {
        return this.ime + spojka + this.prezime;
    }
}
let objekt_s_funkcijom_3_a = {
    ime: "Marko",
    prezime: "Marić",
    ispiti: ["Web aplikacije", "Programsko"],
    spoji: async (spojka) => this.ime + spojka + this.prezime
}

