import { EstadoJuego, Jugador } from './types';  
function verificarGanador(estado: EstadoJuego): Jugador | null {
    const tablero = estado.tablero;

    
    const combinacionesGanadoras: Array<Array<string | null>> = [
        // para las Filas
        [tablero[0][0], tablero[0][1], tablero[0][2]],
        [tablero[1][0], tablero[1][1], tablero[1][2]],
        [tablero[2][0], tablero[2][1], tablero[2][2]],
        // para las Columnas
        [tablero[0][0], tablero[1][0], tablero[2][0]],
        [tablero[0][1], tablero[1][1], tablero[2][1]],
        [tablero[0][2], tablero[1][2], tablero[2][2]],
        // para las Diagonales
        [tablero[0][0], tablero[1][1], tablero[2][2]],
        [tablero[0][2], tablero[1][1], tablero[2][0]]
    ];

  
    for (const combinacion of combinacionesGanadoras) {
        const simbolo = combinacion[0];
        if (simbolo !== null && combinacion[1] === simbolo && combinacion[2] === simbolo) {
             
            if (simbolo === estado.turno.simbolo) {
                return estado.turno;
            } else {
                 
                if (estado.turno.simbolo === "X") {
                    return { nombre: "Jugador 1", simbolo: "X" };
                } else {
                    return { nombre: "Jugador 2", simbolo: "O" };
                }
            }
        }
    }

     
    return null;
}
