let figura = prompt ("INGRESE LA FIGURA A CALCULAR  1 = TRIANGULO 2 = RECTANGULO 3 = CUADRADO 4 = CIRCULO");
let base;
let altura;
let area;
let perimetroA;
let perimetroB;
let perimetroC;
let perimetroTotal;
let radio;
let pi = 3.14;
switch (figura) {
case "1":
    base = parseInt (prompt("Ingrese La Base del Triangulo: "));
    altura = parseInt (prompt("Ingrese La Altura del Triangulo: "));
    area = parseInt ((base * altura)/2);

    perimetroA = parseInt (prompt("Ingrese el perimetro A: "));
    perimetroB = parseInt (prompt("Ingrese el perimetro B: "));
    perimetroC = parseInt (prompt("Ingrese el perimetro C: "));
    perimetroTotal = perimetroA + perimetroB + perimetroC;
    console.log ("El Area Del Triangulo Es: " + area);
    console.log ("El Perimetro Del Triangulo Es: " + perimetroTotal);
    break;
    case "2":
        base = parseInt (prompt("Ingrese La Base Del Rectangulo: "));
        altura = parseInt (prompt("Ingrese La Altura Del Rectangulo: "));
        area = base * altura

        perimetroA = parseInt (prompt("Ingrese el perimetro A: "));
        perimetroB = parseInt (prompt("Ingrese el perimetro B: "));
        perimetroTotal = (2 * (perimetroA + perimetroB));
        console.log ("El Area Del Rectangulo Es: " + area);
        console.log ("El Perimetro Del Rectangulo Es: " + perimetroTotal);
        break;
    case "3":
        lado = parseInt (prompt("Ingrese el Lado Del Cuadrado: "));
        perimetroA = (4 * lado);
        area = Math.pow (altura,2);
        console.log ("El Area Del Cuadrado Es: " + area);
        console.log ("El Perimetro Del Cuadrado Es: " + perimetroA);
        break;
    case "4":
            radio = parseInt (prompt("Ingrese El Radio Del Circulo: "));
            perimetroA = (2 * pi * Math.pow(radio,2));
            area = (pi * Math.pow(radio,2));
            console.log ("El Area Del Circulo Es: " + area);
            console.log ("El Perimetro Del Circulo Es: " + perimetroA);
            break;
            default:
                console.log ("Error De Cálculo, Por Favor Intente Nuevamente");
}
