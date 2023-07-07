class CRectangulo {
    constructor(longitud, altura) {
      this.longitud = longitud;
      this.altura = altura;
      this.ar = 0;
    }
  
    calcularArea(){
        return this.longitud * this.altura;
    }
  
    
  }

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event)

 {
  event.preventDefault();

  const longitud = parseFloat(document.getElementById('longitud').value);
  const altura = parseFloat(document.getElementById('altura').value);

  const Ra = new CRectangulo(longitud,altura);
  const area = Ra.calcularArea();

  document.getElementById('datosRc').textContent = 'El área del rectángulo es: ' + area;
 }
);