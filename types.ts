// types.ts

export interface Jugador {
    nombre: string;
    simbolo: string;
}

export interface EstadoJuego {
    tablero: Array<Array<string | null>>;
    turno: Jugador;
    ganador: Jugador | null;
}
