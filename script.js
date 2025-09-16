
let pokemones = [
  {
    nombre: "Pikachu",
    nivel: 10,
    tipo: ["Eléctrico"],
    foto: "",
    hp: 100,
    hp_total: 100,
    evolución: false
  },
  {
    nombre: "Charmander",
    nivel: 8,
    tipo: ["Fuego"],
    foto: "",
    hp: 90,
    hp_total: 90,
    evolución: false
  },
  {
    nombre: "Squirtle",
    nivel: 9,
    tipo: ["Agua"],
    foto: "",
    hp: 110,
    hp_total: 110,
    evolución: false
  }
];

let seguir_cargando = false;
const pokemon = {
  nombre: "String",
  nivel: Number,
  tipo: [],
  foto: "String",
  hp: Number,
  hp_total: Number,
  evolución: Boolean,
};

do {
  pokemon.nombre = prompt("Ingrese el nombre del Pokémon:");
  pokemon.nivel = Number(prompt("Ingrese el nivel del Pokémon:"));

  pokemones.push({ ...pokemon });

  let terminar = prompt("¿Desea cargar otro Pokémon? (si/no)");
  seguir_cargando = false;
  if (terminar === "si") {
    seguir_cargando = true;
  }
} while (seguir_cargando === true);

console.log(pokemones);
for (let i = 0; i < pokemones.length; i++) {
  console.log("Nombre: " + pokemones[i].nombre + ", Nivel: " + pokemones[i].nivel);
}

function mostrarPokemones() {
  console.log("Lista de pokemones:");
  console.log(pokemones);
  console.log("Nombres:");
  for (let i = 0; i < pokemones.length; i++) {
    console.log(pokemones[i].nombre);
  }
}

function restarHP() {
  let nombre = prompt("Ingrese el nombre del Pokémon al que quiere restar HP:");
  let encontrado = pokemones.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

  if (encontrado) {
    let cantidad = Number(prompt("Ingrese la cantidad de HP a restar:"));
    encontrado.hp -= cantidad;
    if (encontrado.hp < 0) {
      encontrado.hp = 0;
    }
    alert(encontrado.nombre + " ahora tiene " + encontrado.hp + " HP.");
  } else {
    alert("No se encontró ese Pokémon.");
  }
  mostrarPokemones();
}


let opcion;
do {
  opcion = prompt(
    "Elija una opción:\n1. Mostrar Pokemones\n2. Restar HP a un Pokémon\n3. Salir"
  );

  if (opcion === "1") {
    mostrarPokemones();
  } else if (opcion === "2") {
    restarHP();
  } else if (opcion === "3") {
    alert("Saliendo del programa...");
  } else {
    alert("Opción no válida.");
  }
} while (opcion !== "3");
