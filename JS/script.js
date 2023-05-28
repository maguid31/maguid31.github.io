// VALIDACION FORMULARIO
function validacionFormulario() {
    //Obtener datos ingresados por el usuario y eliminar espacios en blanco en ambos extremos.
    var nombre = document.getElementById ("name").value.trim();
    var email = document.getElementById ("email").value.trim();

    // Verificar si hay campos en blanco
    if (nombre === "" || email === "") {
    alert("Por favor, complete todos sus datos.");
    return false;
}

//Verificar que el nombre contenga solo caracteres alfabéticos y espacios
for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <=90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert ("El nombre debe contener únicamente caracteres alfabéticos y espacios.");
        return false;
    }
}

alert("Forumulario enviado exitosamente.");
return true;
}

// CONSUMO JSON PRODUCTOS
const productosLista = document.getElementById("productos-lista");

fetch("productos.json")
    .then(response => response.json())
    .then(data => {
      data.productos.forEach(productos => {
        
        const li = document.createElement("li");
        const a = document.createElement("a");
        const img = document.createElement("img");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");

        a.href = 'conjunto-cosme.html';
        img.src = productos.foto;
        img.alt = productos.nombre;
        h4.textContent = productos.nombre;
        p.textContent = productos.cod;

        a.appendChild(img);
        a.appendChild(h4);
        a.appendChild(p);
        li.appendChild(a);
        productosLista.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Error al obtener los productos:", error);
    });

