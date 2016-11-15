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
