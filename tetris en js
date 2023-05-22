import random
import time
import os

# Dimensions du terrain de jeu
LARGEUR = 10
HAUTEUR = 20

# Formes des pièces de Tetris
FORMES = [
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1, 1], [1, 1, 0]],
    [[1, 1, 1], [0, 1, 0]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1, 1], [0, 0, 1]]
]

# Couleurs pour l'affichage
COULEUR_CASE_VIDE = ' '
COULEUR_CASE_PLEINE = '#'

# Fonction pour afficher le terrain de jeu
def afficher_terrain(terrain):
    for ligne in terrain:
        print(' '.join(ligne))

# Fonction pour créer un terrain de jeu vide
def creer_terrain_vide():
    return [[COULEUR_CASE_VIDE] * LARGEUR for _ in range(HAUTEUR)]

# Fonction pour vérifier si une pièce peut être placée à une position donnée
def peut_placer_piece(terrain, piece, posX, posY):
    for y in range(len(piece)):
        for x in range(len(piece[y])):
            if piece[y][x] and (posY + y >= HAUTEUR or posX + x < 0 or posX + x >= LARGEUR or terrain[posY + y][posX + x] != COULEUR_CASE_VIDE):
                return False
    return True

# Fonction pour placer une pièce sur le terrain
def placer_piece(terrain, piece, posX, posY):
    for y in range(len(piece)):
        for x in range(len(piece[y])):
            if piece[y][x]:
                terrain[posY + y][posX + x] = COULEUR_CASE_PLEINE

# Fonction pour supprimer les lignes complètes du terrain
def supprimer_lignes_completees(terrain):
    lignes_completees = []
    for y in range(HAUTEUR):
        if COULEUR_CASE_VIDE not in terrain[y]:
            lignes_completees.append(y)
    for y in lignes_completees:
        del terrain[y]
        terrain.insert(0, [COULEUR_CASE_VIDE] * LARGEUR)

# Fonction principale du jeu
def jouer_tetris():
    terrain = creer_terrain_vide()
    piece = random.choice(FORMES)
    posX, posY = LARGEUR // 2 - len(piece[0]) // 2, 0
    score = 0

    while True:
        os.system('cls' if os.name == 'nt' else 'clear')
        afficher_terrain(terrain)
        print(f'Score: {score}')

        if not peut_placer_piece(terrain, piece, posX, posY + 1):
            placer_piece(terrain, piece, posX, posY)
            supprimer_lignes_completees(terrain)
            piece = random.choice(FORMES)
            posX, posY = LARGEUR // 2 - len(piece[0]) // 2, 0

            if not peut_placer_piece(terrain, piece, posX, posY):
                break
        else:
            posY += 1

        time.sleep(0.5)  # Pause pour
