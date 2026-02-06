# Neural-Port

**Neural-Port** est une interface client haute performance pour les modèles de langage locaux (LLMs). Elle agit comme une couche de visualisation réactive au-dessus de l'API **Ollama**.

Conçue pour garantir une confidentialité totale des données (Local-First), cette application exploite l'écosystème **React** avec une architecture **TypeScript** stricte pour assurer robustesse et maintenabilité.

## 🛠 Stack Technique

* **Core :** React 19 (Vite 7)
* **Type System :** TypeScript
* **Styling :** Tailwind CSS + Typography Plugin

## 🚀 Installation & Démarrage

### Pré-requis

* **Node.js** (v20+ recommandé)
* **Ollama** (Service actif en arrière-plan)

### Initialisation des modèles

Assurez-vous que les modèles suivants sont disponibles localement :

```bash
ollama pull gemma3:1b
ollama pull mistral:7b
ollama pull qwen3:4b
ollama pull gpt-oss:20b
```

### Déploiement Local

1.  Cloner le dépôt :
    ```bash
    git clone https://github.com/meteorelevrai/Neural-Port.git
    cd neural-port
    ```

2.  Installer les dépendances :
    `
    npm install
    `

3.  Lancer le serveur de développement :
    `
    npm run dev
    `

L'application sera accessible sur `http://localhost:5173`.

## ⚙️ Configuration

La configuration des modèles actifs se fait via le fichier `src/models.ts`. L'architecture permet d'ajouter de nouveaux points de terminaison sans refonte du code :

```typescript
export const Models = [
    "gemma3:1b",
    "qwen3:4b",
    "mistral:7b",
    "gpt-oss:20b",
    // Ajoutez vos modèles personnalisés ici
]
```

## ⚖️ Licence

**Copyright © 2026 Neural-Port. Tous droits réservés.**

Ce logiciel est propriétaire.

* **Autorisé :** Téléchargement, installation et exécution à des fins strictement personnelles et privées.
* **Interdit :** Toute modification, redistribution, sous-licence, usage commercial ou vente du code source ou binaire, sans autorisation écrite explicite de l'auteur.