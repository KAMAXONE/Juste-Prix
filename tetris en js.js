// Dimensions du terrain de jeu
const LARGEUR = 10;
const HAUTEUR = 20;

// Formes des pièces de Tetris
const FORMES = [
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1, 1], [1, 1, 0]],
    [[1, 1, 1], [0, 1, 0]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1, 1], [0, 0, 1]]
];

// Couleurs pour l'affichage
const COULEUR_CASE_VIDE = ' ';
const COULEUR_CASE_PLEINE = '#';

// Fonction pour afficher le terrain de jeu
function afficherTerrain(terrain) {
    for (let ligne of terrain) {
        console.log(ligne.join(' '));
    }
}

// Fonction pour créer un terrain de jeu vide
function creerTerrainVide() {
    return new Array(HAUTEUR).fill(Array(LARGEUR).fill(COULEUR_CASE_VIDE));
}

// Fonction pour vérifier si une pièce peut être placée à une position donnée
function peutPlacerPiece(terrain, piece, posX, posY) {
    for (let y = 0; y < piece.length; y++) {
        for (let x = 0; x < piece[y].length; x++) {
            if (piece[y][x] && (posY + y >= HAUTEUR || posX + x < 0 || posX + x >= LARGEUR || terrain[posY + y][posX + x] !== COULEUR_CASE_VIDE)) {
                return false;
            }
        }
    }
    return true;
}

// Fonction pour placer une pièce sur le terrain
function placerPiece(terrain, piece, posX, posY) {
    for (let y = 0; y < piece.length; y++) {
        for (let x = 0; x < piece[y].length; x++) {
            if (piece[y][x]) {
                terrain[posY + y][posX + x] = COULEUR_CASE_PLEINE;
            }
        }
    }
}

// Fonction pour supprimer les lignes complètes du terrain
function supprimerLignesCompletees(terrain) {
    const lignesCompletees = [];
    for (let y = 0; y < HAUTEUR; y++) {
        if (!terrain[y].includes(COULEUR_CASE_VIDE)) {
            lignesCompletees.push(y);
        }
    }
    for (let y of lignesCompletees) {
        terrain.splice(y, 1);
        terrain.unshift(Array(LARGEUR).fill(COULEUR_CASE_VIDE));
    }
}

// Fonction principale du jeu
function jouerTetris() {
    const terrain = creerTerrainVide();
    let piece = FORMES[Math.floor(Math.random() * FORMES.length)];
    let posX = Math.floor(LARGEUR / 2) - Math.floor(piece[0].length / 2);
    let posY = 0;
    let score = 0;

    while (true) {
        console.clear();
        afficherTerrain(terrain);
        console.log(`Score: ${score}`);

        if (!peutPlacerPiece(terrain, piece, posX, posY + 1
