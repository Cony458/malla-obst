const ramos = [
  // --- PRIMER AÑO ---
  // I Semestre
  { nombre: "Biología celular", requisitos: [] },
  { nombre: "Introducción a la matronería", requisitos: [] },
  { nombre: "Química general y orgánica", requisitos: [] },
  { nombre: "Habilidades comunicativas", requisitos: [] },
  { nombre: "Inglés 1", requisitos: [] },

  // II Semestre
  { nombre: "Morfología general", requisitos: [] },
  { nombre: "Salud pública", requisitos: [] },
  { nombre: "Cuidados médico – quirúrgicos de matronería I", requisitos: ["Introducción a la matronería"] },
  { nombre: "Microbiología y parasitología", requisitos: ["Biología celular"] },
  { nombre: "Inglés 2", requisitos: ["Inglés 1"] },

  // --- SEGUNDO AÑO ---
  // III Semestre
  { nombre: "Bases perinatales y ginecológicas en matronería", requisitos: ["Morfología general", "Microbiología y parasitología"] },
  { nombre: "Cuidados médico – quirúrgicos de matronería II", requisitos: ["Cuidados médico – quirúrgicos de matronería I", "Microbiología y parasitología"] },
  { nombre: "Políticas en salud sexual y salud reproductiva", requisitos: ["Salud pública"] },
  { nombre: "Pensamiento crítico", requisitos: [] },
  { nombre: "Inglés 3", requisitos: ["Inglés 2"] },

  // IV Semestre
  { nombre: "Matronería y bases fisiopatológicas de la salud", requisitos: [] },
  { nombre: "Salud sexual, salud reproductiva y gestión I", requisitos: ["Cuidados médico – quirúrgicos de matronería II", "Políticas en salud sexual y salud reproductiva"] },
  { nombre: "Administración y gestión en salud", requisitos: ["Salud pública"] },
  { nombre: "Integrador I: Cuidados médico – quirúrgicos de Matronería", requisitos: ["Bases perinatales y ginecológicas en matronería", "Cuidados médico – quirúrgicos de matronería II", "Políticas en salud sexual y salud reproductiva", "Inglés 3"] },
  { nombre: "Inglés 4", requisitos: ["Inglés 3"] },

  // --- TERCER AÑO ---
  // V Semestre
  { nombre: "Farmacología general", requisitos: ["Biología celular", "Química general y orgánica"] },
  { nombre: "Neonatología, lactancia y gestión", requisitos: ["Administración y gestión en salud", "Políticas en salud sexual y salud reproductiva"] },
  { nombre: "Salud sexual, salud reproductiva y gestión II", requisitos: ["Salud sexual, salud reproductiva y gestión I", "Matronería y bases fisiopatológicas de la salud"] },
  { nombre: "Psicología integral y técnicas de entrevista clínica", requisitos: ["Políticas en salud sexual y salud reproductiva"] },

  // VI Semestre
  { nombre: "Educación con enfoque curso de vida", requisitos: ["Salud sexual, salud reproductiva y gestión I", "Neonatología, lactancia y gestión"] },
  { nombre: "Matronería patológica integrada y gestión", requisitos: ["Farmacología general", "Neonatología, lactancia y gestión", "Salud sexual, salud reproductiva y gestión II"] },
  { nombre: "Bioestadística", requisitos: ["Administración y gestión en salud"] },
  { nombre: "Salud familiar y comunitaria", requisitos: ["Políticas en salud sexual y salud reproductiva", "Neonatología, lactancia y gestión"] },

  // --- CUARTO AÑO ---
  // VII Semestre
  { nombre: "Metodología de la investigación", requisitos: ["Políticas en salud sexual y salud reproductiva", "Bioestadística"] },
  { nombre: "Sexología, género y derecho", requisitos: ["Salud sexual, salud reproductiva y gestión II"] },
  { nombre: "Intervención en contextos sociales y comunitarios", requisitos: ["Psicología integral y técnicas de entrevista clínica", "Salud familiar y comunitaria"] },
  { nombre: "Matronería legal y bioética", requisitos: ["Políticas en salud sexual y salud reproductiva", "Matronería y bases fisiopatológicas de la salud"] },

  // VIII Semestre
  { nombre: "Integrador II: Practica de matronería en la comunidad", requisitos: [
    "Educación con enfoque curso de vida",
    "Matronería patológica integrada y gestión",
    "Metodología de la investigación",
    "Sexología, género y derecho",
    "Intervención en contextos sociales y comunitarios",
    "Matronería legal y bioética"
  ]},
  { nombre: "Imagenología en matronería", requisitos: [
    "Educación con enfoque curso de vida",
    "Matronería patológica integrada y gestión",
    "Metodología de la investigación",
    "Sexología, género y derecho",
    "Intervención en contextos sociales y comunitarios",
    "Matronería legal y bioética"
  ]},
  { nombre: "Matronería oncológica y reproducción asistida", requisitos: [
    "Educación con enfoque curso de vida",
    "Matronería patológica integrada y gestión",
    "Metodología de la investigación",
    "Sexología, género y derecho",
    "Intervención en contextos sociales y comunitarios",
    "Matronería legal y bioética"
  ]},
  { nombre: "Proyecto de Matronería", requisitos: ["Metodología de la investigación"] },

  // --- QUINTO AÑO ---
  // IX y X Semestre
  { nombre: "Habilitación profesional I", requisitos: [
    "Integrador II: Practica de matronería en la comunidad",
    "Imagenología en matronería",
    "Matronería oncológica y reproducción asistida",
    "Proyecto de Matronería"
  ]},
  { nombre: "Habilitación profesional II", requisitos: [
    "Integrador II: Practica de matronería en la comunidad",
    "Imagenología en matronería",
    "Matronería oncológica y reproducción asistida",
    "Proyecto de Matronería"
  ]}
];

const aprobados = new Set();
const malla = document.getElementById("malla");

function renderRamos() {
  malla.innerHTML = "";

  ramos.forEach((ramo) => {
    const boton = document.createElement("div");
    boton.className = "ramo";

    const requisitosCumplidos = ramo.requisitos.every((req) =>
      aprobados.has(req)
    );

    if (!requisitosCumplidos) {
      boton.classList.add("bloqueado");
    } else if (aprobados.has(ramo.nombre)) {
      boton.classList.add("aprobado");
    }

    boton.textContent = ramo.nombre;

    boton.addEventListener("click", () => {
      if (!requisitosCumplidos) return;

      if (aprobados.has(ramo.nombre)) {
        aprobados.delete(ramo.nombre);
      } else {
        aprobados.add(ramo.nombre);
      }

      renderRamos(); // Actualiza todo
    });

    malla.appendChild(boton);
  });
}

renderRamos();
