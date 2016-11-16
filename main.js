
let addNumbers = sum([3,8,23]);
console.log("suma: " + addNumbers);

let avg = average([3,8,23]);
console.log("media: " + avg);  

let multNumbers = multiply([1,2,3,4,5], 5);
console.log("Multiplication: " + multNumbers);

let object = constructObject([45, 78, 39, 12]);
console.log("The new object looks like: " + object);

let encoded = encoder("Noviembre", 2);
console.log("The encoded word is: " + encoded);

let decodedWord = decodifier("ctdqn");
console.log("The decoded word is: " + encoded);

//1- Recibe un array y retorna la suma de todos los números.

function sum(num) {
  
  let result;
  result = 0;
  
  for (var i = 0; i < num.length; i++) {
    result += num[i];
  }
  return result;
}


//2- Recibe un array y retorna la media de todos los números.

function average(num) {
  let sumNumbers;
  sumNumbers = 0;
  
  for (var i = 0; i < num.length; i++) {
   sumNumbers += num[i];
  }
  let average;
  average = sumNumbers / num.length;
  return average;
}

//3- Recibe un array y un número x y retorna un array con los números multiplicados por ese número x.

// Cuidado: i debe ser < estricto. i = índice de la array!!!

function multiply(num, mult) {
  
  let result;
  result = 0;
  for (var i = 0; i < num.length; i++) {
   result = num[i] * mult;
  }
  return result;
}


//4- Recibe un array y retorna un objeto con varias propiedades (estadísticas del array): suma, media, máximo y mínimo.

function constructObject(num) {
  let total = 0;
  let max = 0;
  let min = 0;
  let average = 0;
  
  for (var i = 0; i < num.length; i++) {
    total += num[i];
    average = total / num.length;
    //**Evalúa true si el valor del ítem actual es mayor que el min. Entonces, nuevo máximo = a valor de ítem actual
    if (num[i] > max) {
      max = num[i];
    }
    //**Evalúa true si el valor del ítem actual es menor que el min. Entonces, nuevo mínimo = a valor de ítem actual.
    if (num[i] < min) {
      min = num[i];
    }
  }
  
  //**Duda existencial. Tengo que pasar todos los resultados a string antes de meterlos en el objeto? Resp: no, no hace falta, porque xxx(justificar)
  let object = {
    sum: total,
    average: average,
    max: max,
    min: min
  }
  return object;
}

//5.a: Una función que recibe un texto y un número x y cambia cada letra por la letra que está x posiciones después en el abecedario:

//** Duda existencial: 1.qué pasaría cuando mi palabra tiene el caracter "z"? cómo le digo que vuelva a empezar por "a"? Resp: con un if !! 2. Si en vez de una palabra, tengo un texto, qué hay de los espacios blancos?

function encoder(text, positionForward) {
  
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let currentCharacter;
  let newCharacter;
  let codedWord;
  
  // **A tener en cuenta: la variable text es como si fuera una array de n caracteres (letras y espacios) encadenados (+) unos a otros.

  for (var i = 0; i < text.length; i++) {
    // **currentCharacter me dice la posición(índice aka número) del caracter que está recorriendo en esta vuelta.
    currentCharacter = text[i];
    //**Aquí le digo que mi nueva letra va a ser la que que corresponde al índice del elemento(letra) actual + positionForward posiciones adelante. Estoy sumando índices (números).
    newCharacter = alphabet.indexOf(currentCharacter + positionForward);
    codedWord += [newCharacter[i]];
  }
  return codedWord;
}

//5.b: La función puede descodificar si le pasas el número negativo, ya que hará el paso inverso:

//** Duda existencial: 1.qué pasaría cuando mi palabra tiene el caracter "a"? cómo le digo que vuelva a empezar por "z"? Resp: con un if !! 2. Si en vez de una palabra, tengo un texto, qué hay de los espacios blancos?

function decodifier(word, (-1*positionForward)) {
  
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let currentCharacter;
  let newCharacter;
  let decodedWord;

  for (var i = 0; i < word.length; i++) {
    currentCharacter = word[i];
    // -positionForward indica: ve hacia -positionForward es decir, hacia atrás.
    newCharacter = alphabet.indexOf(currentCharacter + (-1*positionForward));
    decodedWord += [newCharacter[i]];
  }
  return decodedWord;
}

/*
//6- Una función que recibe un texto y devuelve un array indicando el número de palabras que tienen la misma longitud.

//1. Separar el texto en palabras.
//2. Almacenar en una variable la longitud de cada palabra.
//3. Comparar palabra a palabra por longitud. 
//    si if word(n).length === word(n+1).length { wordsWithEqualLenght.push(word(n+1))}


//text = " Una función que recibe un texto y devuelve un array
//indicando el número de palabras que tienen la misma longitud."
function wordLength(text) {
  
  var words = text.split(" ");
  for (var i = 0; i <= words.length; i++) {
    
  }
  
}
*/