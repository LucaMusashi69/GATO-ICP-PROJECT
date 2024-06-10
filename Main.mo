import Debug "mo:base/Debug";

actor GatoJuego {
    stable var playerName : Text = "";
    stable var npcName : Text = "";
    stable var playerRole : Text = "";
    stable var npcRole : Text = "";
 
    public func guardarNombre(player : Text, npc : Text, playerR : Text, npcR : Text) : async () {
        playerName := player;
        npcName := npc;
        playerRole := playerR;
        npcRole := npcR;
        Debug.print("Nombre del jugador: " # playerName # ", Nombre del NPC: " # npcName);
        Debug.print("Rol del jugador: " # playerRole # ", Rol del NPC: " # npcRole);
    };

    public query func obtenerDatos() : async (Text, Text, Text, Text) {
        return (playerName, npcName, playerRole, npcRole);
    };
}


