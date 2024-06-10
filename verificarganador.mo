func verificarGanador(estado : EstadoJuego) : ?Jugador {
    let tablero = estado.tablero;

    let combinacionesGanadoras = [
        // para las Filas
        [tablero[0][0], tablero[0][1], tablero[0][2]],
        [tablero[1][0], tablero[1][1], tablero[1][2]],
        [tablero[2][0], tablero[2][1], tablero[2][2]],
        // para las Columnas
        [tablero[0][0], tablero[1][0], tablero[2][0]],
        [tablero[0][1], tablero[1][1], tablero[2][1]],
        [tablero[0][2], tablero[1][2], tablero[2][2]],
        //para las Diagonales
        [tablero[0][0], tablero[1][1], tablero[2][2]],
        [tablero[0][2], tablero[1][1], tablero[2][0]]
    ];

   for combinacion in combinacionesGanadoras {
    let simbolo = combinacion[0];
    if (isSome(simbolo) && combinacion[1] == simbolo && combinacion[2] == simbolo) {
        if (simbolo == estado.turno.simbolo) {
            return estado.turno;
        } else {
            return { nombre = "Otro jugador"; simbolo = (estado.turno.simbolo == "X") ? "O" : "X" };
        }
    }
}

return null;
