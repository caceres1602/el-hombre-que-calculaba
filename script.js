// ======================================================
// EJERCICIO 1: Los 35 Camellos
// ======================================================
function resolverCamellos() {
    let total = Number(document.getElementById('camellos').value);
    let conExtra = total + 1;
    
    let h1 = Math.round(conExtra / 2);
    let h2 = Math.round(conExtra / 3);
    let h3 = Math.round(conExtra / 9);
    let sobra = Math.round(conExtra - (h1 + h2 + h3));
    
    let resultado = "Con el camello prestado hay " + conExtra + " camellos.<br>";
    resultado += "Hermano mayor recibe: " + h1 + " camellos (la mitad).<br>";
    resultado += "Segundo hermano recibe: " + h2 + " camellos (un tercio).<br>";
    resultado += "Tercer hermano recibe: " + h3 + " camellos (un noveno).<br>";
    resultado += "Sobra " + sobra + " camello que se devuelve al dueño.";
    
    document.getElementById('resCamellos').innerHTML = resultado;
}

// ======================================================
// EJERCICIO 2: Los 8 Panes y 8 Monedas
// ======================================================
function resolverPanes() {
    let panes1 = Number(document.getElementById('panes1').value);
    let panes2 = Number(document.getElementById('panes2').value);
    let monedasTotal = Number(document.getElementById('monedas').value);
    
    let trozos1 = panes1 * 3;
    let trozos2 = panes2 * 3;
    let totalTrozos = trozos1 + trozos2;
    let cadaUnoCome = Math.round(totalTrozos / 3);
    
    let regalo1 = Math.round(trozos1 - cadaUnoCome);
    let regalo2 = Math.round(trozos2 - cadaUnoCome);
    
    let monedas1 = Math.round((regalo1 / (regalo1 + regalo2)) * monedasTotal);
    let monedas2 = Math.round((regalo2 / (regalo1 + regalo2)) * monedasTotal);
    
    let resultado = "Cada persona comió " + cadaUnoCome + " trozos de pan.<br>";
    resultado += "Persona 1 regaló " + regalo1 + " trozo → Recibe " + monedas1 + " moneda.<br>";
    resultado += "Persona 2 regaló " + regalo2 + " trozos → Recibe " + monedas2 + " monedas.";
    
    document.getElementById('resPanes').innerHTML = resultado;
}

// ======================================================
// EJERCICIO 3: Granos del Ajedrez
// ======================================================
function resolverAjedrez() {
    let casillas = Number(document.getElementById('casillas').value);
    
    let ultimaCasilla = Math.pow(2, casillas - 1);
    let totalGranos = Math.pow(2, casillas) - 1;
    
    let resultado = "En la casilla " + casillas + " hay " + ultimaCasilla.toLocaleString() + " granos.<br>";
    resultado += "En todo el tablero hay " + totalGranos.toLocaleString() + " granos.<br>";
    resultado += "Fórmula usada: Total = 2^" + casillas + " - 1";
    
    document.getElementById('resAjedrez').innerHTML = resultado;
}

// ======================================================
// EJERCICIO 4: Las 90 Manzanas
// ======================================================
function resolverManzanas() {
    let m1 = Number(document.getElementById('m1').value);
    let m2 = Number(document.getElementById('m2').value);
    let m3 = Number(document.getElementById('m3').value);
    
    let vendidas1 = Math.floor(m1 / 7) * 7;
    let dinero1a = Math.round(vendidas1 / 7);
    let resto1 = Math.round(m1 - vendidas1);
    
    let vendidas2 = Math.floor(m2 / 7) * 7;
    let dinero2a = Math.round(vendidas2 / 7);
    let resto2 = Math.round(m2 - vendidas2);
    
    let vendidas3 = Math.floor(m3 / 7) * 7;
    let dinero3a = Math.round(vendidas3 / 7);
    let resto3 = Math.round(m3 - vendidas3);
    
    let dinero1b = Math.round(10 - dinero1a);
    let dinero2b = Math.round(10 - dinero2a);
    let dinero3b = Math.round(10 - dinero3a);
    
    let resultado = "<strong>Primera etapa:</strong> Venden 7 manzanas por 1 dinar<br>";
    resultado += "Vendedora 1: " + vendidas1 + " manzanas → " + dinero1a + " dinar, sobran " + resto1 + "<br>";
    resultado += "Vendedora 2: " + vendidas2 + " manzanas → " + dinero2a + " dinares, sobran " + resto2 + "<br>";
    resultado += "Vendedora 3: " + vendidas3 + " manzanas → " + dinero3a + " dinar, sobran " + resto3 + "<br><br>";
    resultado += "<strong>Segunda etapa:</strong> Venden las restantes a precio mayor<br>";
    resultado += "Vendedora 1: obtiene " + dinero1b + " dinares más → Total: 10 dinares<br>";
    resultado += "Vendedora 2: obtiene " + dinero2b + " dinares más → Total: 10 dinares<br>";
    resultado += "Vendedora 3: obtiene " + dinero3b + " dinares más → Total: 10 dinares<br><br>";
    resultado += "Las tres obtienen 10 dinares con la misma cantidad de manzanas vendidas.";
    
    document.getElementById('resManzanas').innerHTML = resultado;
}