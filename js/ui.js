
class Interfaz {

  constructor() {
    this.init();
  }
  init() {
    this.construirSelect();
  }
  construirSelect() {
    cotizador.obtenerMonedasAPI()
      .then(monedas => {
        console.log(monedas);
      })
  }

  mostrarMensaje(mensaje,clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));

    const divMensaje = document.querySelector('.mensajes');
    divMensaje.appendChild(div);

  }
}