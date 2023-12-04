import { Persona } from "./reto1/Persona";

let persona1: Persona = new Persona("Alejandro", 25, "39956412R", "H");
let persona2: Persona = new Persona("Manolo", 30, "38453054T", "H");
let persona3: Persona = new Persona("Carla", 24, "39942124D", "M");

console.log(persona1);
console.log(persona2);
console.log(persona3);


import { Password } from "./reto2/Password";

let password1: Password = new Password(40);

console.log(password1.getContrasena());


import { Electrodomestico } from "./reto3/Electrodomestico";
import { Lavadora } from "./reto3/Lavadora";
import { Television } from "./reto3/Television";

let electrodomesticos: Electrodomestico[] = [];

electrodomesticos.push(new Electrodomestico(100, "blanco", "A", 50));
electrodomesticos.push(new Lavadora(200, "marron", "F", 100, 35));
electrodomesticos.push(new Television(400, "negro", "B", 30, 40, true));
electrodomesticos.push(new Electrodomestico(100, "blanco", "A", 50));
electrodomesticos.push(new Electrodomestico(100, "blanco", "A", 50));
electrodomesticos.push(new Lavadora(200, "marron", "F", 100, 35));
electrodomesticos.push(new Lavadora(200, "marron", "F", 100, 35));
electrodomesticos.push(new Television(321, "negro", "B", 30, 40, true));
electrodomesticos.push(new Television(432, "negro", "B", 40, 40, true));
electrodomesticos.push(new Television(765, "negro", "B", 70, 40, false));
electrodomesticos.push(new Television(3444, "negro", "B", 20, 40, true));

console.log(electrodomesticos)