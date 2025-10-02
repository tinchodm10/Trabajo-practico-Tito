let pokemones = [
  { nombre: "Pikachu", nivel: 10, tipo: ["Eléctrico"], hp: 100, hp_total: 100 },
  { nombre: "Charmander", nivel: 8, tipo: ["Fuego"], hp: 90, hp_total: 90 },
  { nombre: "Squirtle", nivel: 9, tipo: ["Agua"], hp: 110, hp_total: 110 },
  { nombre: "Raycuaza", nivel: 11, tipo: ["Bicho"], hp: 200, hp_total: 200 },
];

function mostrarPokemones() {
  console.log("Pokemones:");
  console.log(pokemones);
  console.log("Nombres:");
  pokemones.forEach(p => console.log(p.nombre));
}

function cargarPokemon() {
  let seguir = true;
  while (seguir) {
    let nombre = prompt("Ingrese el nombre del Pokémon:");
    let nivel = Number(prompt("Ingrese el nivel del Pokémon:"));
    let tipo = prompt("Ingrese los tipos del Pokémon separados por coma:").split(",").map(t => t.trim());
    let hp_total = Number(prompt("Ingrese el HP total del Pokémon:"));

    let nuevoPokemon = { nombre, nivel, tipo, hp: hp_total, hp_total };
    pokemones.push(nuevoPokemon);

    let respuesta = prompt("¿Desea cargar otro Pokémon? (si/no)").toLowerCase();
    if (respuesta !== "si") seguir = false;
  }
  mostrarPokemones();
}

function restarHP() {
  let nombre = prompt("Ingrese el nombre del Pokémon al que quiere restar HP:");
  let encontrado = pokemones.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

  if (encontrado) {
    let cantidad = Number(prompt("Ingrese la cantidad de HP a restar:"));
    encontrado.hp -= cantidad;
    if (encontrado.hp < 0) encontrado.hp = 0;
    alert(encontrado.nombre + " ahora tiene " + encontrado.hp + " HP.");
  } else {
    alert("No se encontró ese Pokémon.");
  }
  mostrarPokemones();
}

let opcion;
do {
  opcion = prompt(
    "Elija una opción:\n1. Mostrar Pokemones\n2. Cargar un nuevo Pokémon\n3. Restar HP a un Pokémon\n4. Salir"
  );

  if (opcion === "1") mostrarPokemones();
  else if (opcion === "2") cargarPokemon();
  else if (opcion === "3") restarHP();
  else if (opcion === "4") alert("Saliendo del programa...");
  else alert("Opción no válida.");
} while (opcion !== "4");

// codigo modificacion Final
