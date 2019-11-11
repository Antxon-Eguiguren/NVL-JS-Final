function recibirOpcion() {
	var opcionSeleccionada = document.formulario.opciones[document.formulario.opciones.selectedIndex].value;
	return opcionSeleccionada;
}

function crearElemento(opcion) {
	var opcion = recibirOpcion();
	var formulario = document.createElement("form");


	switch (opcion) {
		case('1'):
			var textoUsuario = prompt("Introduzca un texto para crear la etiqueta: ");
			var label = document.createElement("h2");
			var labelText = document.createTextNode(textoUsuario);
			label.appendChild(labelText);

			var input = document.createElement("input");
			input.type = 'text';

			formulario.appendChild(label);
			formulario.appendChild(input);

			break;

		case('2'):
			var textoUsuario = prompt("Introduzca un texto para crear la etiqueta: ");
			var label = document.createElement("h2");
			var labelText = document.createTextNode(textoUsuario);
			label.appendChild(labelText);

			var input = document.createElement("input");
			input.type = 'text';

			formulario.appendChild(label);
			formulario.appendChild(input);

			break;

		case('3'):
			var textoUsuario = prompt("Introduzca un texto para crear la etiqueta: ");
			var label = document.createElement("h2");
			var labelText = document.createTextNode(textoUsuario);
			label.appendChild(labelText);

			var input = document.createElement("input");
			input.type = 'text';

			formulario.appendChild(label);
			formulario.appendChild(input);

			break;

		case('4'):
			// Para comprobar si existe una lista desplegable ya creada antes y solamente pedir el titulo de la lista en caso de que no exista
			if (document.getElementsByTagName("h3").length == 0)
			{

				var etiquetaIntereses = prompt("Introduzca un texto para crear la etiqueta de la lista de intereses: ");
				var labelIntereses = document.createElement("h3");
				var labelInteresesText = document.createTextNode(etiquetaIntereses);

				labelIntereses.appendChild(labelInteresesText);
				formulario.appendChild(labelIntereses);
			}

		
			var textoInteres = prompt("Introduzca un texto para el elemento de la lista: ");
			var label = document.createElement("label");
			var labelText = document.createTextNode(textoInteres);
			label.appendChild(labelText);

			var input = document.createElement("input");
			input.type = 'checkbox';

			formulario.appendChild(input);
			formulario.appendChild(label);

			break;

		case('5'):
			var textoBoton = prompt("Introduzca el texto para el botón: ");
			var boton = document.createElement("button");
			boton.type = "submit";
			boton.innerText = textoBoton;

			formulario.appendChild(boton);

			break;
	}

	document.body.appendChild(formulario);

	// Inicializo el valor de la lista desplegable a "Selecciona una opción" para obligar al usuario a seleccionar una nueva y así cargar el evento "change" cada vez
	document.formulario.opciones[0].selected = true;
}