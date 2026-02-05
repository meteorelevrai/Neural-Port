# Neural-Port 🧠

**Neural-Port** est une interface web moderne et légère permettant d'interagir avec des modèles de langage (LLMs) locaux via **Ollama**.

Construit avec **React**, **TypeScript** et **Tailwind CSS**, ce projet offre une UI propre et réactive pour discuter avec une IA tournant entièrement sur votre machine, garantissant confidentialité totale et latence minimale.

![Capture d'écran du projet](./screenshot.png)
*(Note : Ajoutez une capture d'écran de l'application nommée 'screenshot.png' à la racine du projet)*

## ✨ Fonctionnalités

- **Intégration Locale :** Connexion directe à une instance Ollama locale (pas de cloud).
- **Changement de Modèle :** Basculez instantanément entre les modèles disponibles (Mistral, Gemma, Qwen, etc.).
- **Support Markdown :** Les réponses sont parfaitement formatées (blocs de code, listes, gras) grâce à `react-markdown`.
- **Mémoire Contextuelle :** L'IA garde en mémoire l'historique de la conversation active.
- **Interface Réactive :** Design "Dark Mode" fluide avec Tailwind, incluant le scroll automatique et une zone de texte auto-extensible.

## 🛠 Stack Technique

- **Frontend :** React (Vite)
- **Langage :** TypeScript (Typage strict)
- **Style :** Tailwind CSS + @tailwindcss/typography
- **Backend IA :** Ollama (API Locale)

## 🚀 Guide de Démarrage

### 1. Pré-requis

Vous devez avoir **Node.js** et **Ollama** installés sur votre machine.

1.  **Installer Ollama :** Téléchargez-le sur le site officiel d'Ollama.
2.  **Télécharger les modèles :** Ouvrez votre terminal et lancez les commandes suivantes pour récupérer les modèles supportés par l'application :

`bash
ollama pull gemma3:1b
ollama pull mistral:7b
ollama pull qwen3:4b
ollama pull gpt-oss:20b
`

3. **Lancer le serveur Ollama :**
   Assurez-vous qu'Ollama tourne en arrière-plan (il écoute généralement sur le port `11434`).

### 2. Installation

Clonez le dépôt et installez les dépendances :

`bash
git clone https://github.com/VOTRE_PSEUDO/neural-port.git
cd neural-port
npm install
`

### 3. Lancement

Démarrez le serveur de développement :

`bash
npm run dev
`

Ouvrez ensuite votre navigateur à l'adresse `http://localhost:5173`.

## ⚙️ Configuration

Les modèles disponibles sont définis dans le fichier `src/models.ts`. Vous pouvez ajouter ou retirer des modèles en modifiant la liste :

`typescript
export const Models = [
    "gemma3:1b",
    "mistral:7b",
    "qwen3:4b",
    "gpt-oss:20b"
]
`

## 👨‍💻 Note de l'Auteur

Ce projet a été réalisé dans une démarche d'apprentissage approfondi de **React** et de l'écosystème Frontend moderne.

Venant d'un background en **programmation C / Bas niveau**, l'objectif était de comprendre les mécanismes de gestion d'état (`useState`), le cycle de vie des composants (`useEffect`) et les références mémoires (`useRef`) avec la même rigueur que la gestion mémoire en C.

## 📄 Licence

MIT