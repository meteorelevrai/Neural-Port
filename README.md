# Neural-Port

**Neural-Port** est une interface client haute performance pour les modèles de langage locaux (LLMs). Elle agit comme une couche de visualisation réactive au-dessus de l'API **Ollama**.

Conçue pour garantir une confidentialité totale des données (Local-First), cette application exploite l'écosystème **React** avec une architecture **TypeScript** stricte pour assurer robustesse et maintenabilité.

## 🚀 Installation & Démarrage

### Pré-requis

* **Node.js** (v20+ recommandé)
* **Ollama** (Service actif en arrière-plan)

### Initialisation des modèles

Assurez-vous d'avoir installé des modèles avec la commande suivante :

```bash
ollama pull <nom_du_modèle>
```

- Exemples de modèles testés:

```bash
ollama pull gemma3:1b
ollama pull llama3.2:3b
ollama pull qwen3:4b
ollama pull mistral:7b
```

### Déploiement Local

1.  Cloner le dépôt :
    ```bash
    git clone https://github.com/meteorelevrai/Neural-Port.git
    cd neural-port
    ```

2.  Installer les dépendances :
    ```bash
    npm install
    ```

3.  Lancer le serveur de développement :
    ```bash
    npm run dev
    ```

L'application sera accessible sur `http://localhost:5173`.

## ⚖️ Licence

**Copyright © 2026 MeteoreLeVrai. Tous droits réservés.**

Ce logiciel est propriétaire.

* **Autorisé :** Téléchargement, installation et exécution à des fins strictement personnelles et privées.
* **Interdit :** Toute modification, redistribution, sous-licence, usage commercial ou vente du code source ou binaire, sans autorisation écrite explicite de l'auteur.