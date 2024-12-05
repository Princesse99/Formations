This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

my-nextjs-app/
│
├── public/               # Fichiers statiques (images, polices, etc.)
│   └── images/           # Dossier pour les images
│
├── src/                  # Code source de l'application
│   ├── components/       # Composants React réutilisables
│   │   ├── Header.tsx    # Exemple de composant d'en-tête
│   │   └── Footer.tsx    # Exemple de composant de pied de page
│   │
│   ├── pages/            # Pages de l'application (routage basé sur le fichier)
│   │   ├── _app.tsx      # Composant principal de l'application (permet de gérer les contextes, les styles globaux, etc.)
│   │   ├── _document.tsx # Personnalisation du document HTML (si nécessaire)
│   │   ├── index.tsx     # Page d'accueil
│   │   └── about.tsx     # Exemple de page "About"
│   │
│   ├── styles/           # Fichiers CSS/SCSS, CSS-in-JS (si nécessaire)
│   │   └── globals.css   # Style global
│   │
│   ├── services/         # Services (API, logique métier, etc.)
│   │   └── apiService.ts # Exemple de service API
│   │
│   └── utils/            # Utilitaires et fonctions d'aide
│       └── helpers.ts    # Fonctions utilitaires (par exemple, formatage de date)
│
├── .eslintrc.json        # Configuration ESLint
├── .gitignore            # Fichiers à ignorer par Git
├── next.config.js        # Configuration de Next.js
├── package.json          # Dépendances et scripts de projet
├── tsconfig.json         # Configuration TypeScript
└── README.md             # Documentation du projet


explication de formulaire 
1. La Liste des Produits
La liste des produits est un tableau d'objets, chaque objet représentant un plat avec des informations comme l'ID, le titre, la description, l'image, et le prix.

Voici un exemple de cette liste :

const liste = [
  {
    id: 1,
    title: "Gateau au chocolat",
    description: "Un délicieux gâteau au chocolat avec une garniture fondante.",
    price: "3000 Ar",
    image: "/images/gateaux.jpg",
    details: "Un gâteau riche en chocolat, idéal pour les occasions spéciales. Ingrédients: chocolat, farine, sucre, œufs, etc.",
  },
  {
    id: 2,
    title: "Hamburger Délicieux",
    description: "Un hamburger garni de viande de qualité, légumes frais et sauce maison.",
    price: "15000 Ar",
    image: "/images/haborger.jpg",
    details: "Un hamburger savoureux avec une viande de bœuf de haute qualité, laitue croquante, tomate, fromage et une sauce secrète.",
  },
  // Ajoutez d'autres éléments de la liste ici
];
2. Affichage des Cartes de Produits
Chaque produit de la liste est affiché sous forme de carte avec les informations suivantes :

Une image du produit (<img />).
Un label "NEW" en haut à droite.
Un titre, une description courte et le prix du produit.
Un bouton "Voir plus" qui, lorsqu'il est cliqué, affiche la modale avec les détails complets.
Voici comment chaque carte est générée dans le code :


{liste.map(item => (
  <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden w-72 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ml-6">
    <div className="relative">
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg">
        NEW
      </div>
    </div>
    <div className="p-4">
      <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
      <p className="text-sm text-gray-500 mt-1">{item.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-red-600 font-bold text-lg">{item.price}</span>
        <button
          className="bg-red-600 text-white px-3 py-1 text-sm rounded-md hover:bg-red-700"
          onClick={() => openModal(item)} // Appel de la fonction pour ouvrir la modale
        >
          Voir plus
        </button>
      </div>
    </div>
  </div>
))}
3. Fonction openModal
La fonction openModal est appelée lorsque l'utilisateur clique sur le bouton "Voir plus". Elle prend un élément (item) comme argument et met à jour l'état pour afficher la modale avec les informations détaillées.

Voici la fonction openModal :


const openModal = (item) => {
  setSelectedItem(item);      // Mettre à jour l'élément sélectionné
  setIsModalOpen(true);       // Ouvrir la modale
};
setSelectedItem(item): Met à jour l'état selectedItem avec les détails de l'élément sélectionné.
setIsModalOpen(true): Change l'état isModalOpen à true, ce qui déclenche l'affichage de la modale.
4. Affichage de la Modale
Lorsque isModalOpen est true et qu'il y a un élément sélectionné (selectedItem), la modale est rendue. La modale contient des informations détaillées sur l'élément sélectionné, telles que le titre, l'image, la description complète, et le prix.

Voici le code de la modale :


{isModalOpen && selectedItem && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
      <button
        className="absolute top-2 right-2 text-gray-600 font-bold"
        onClick={closeModal} // Fonction pour fermer la modale
      >
        X
      </button>
      <h2 className="text-2xl font-semibold">{selectedItem.title}</h2>
      <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-48 object-cover mt-4" />
      <p className="text-sm text-gray-500 mt-4">{selectedItem.details}</p>
      <div className="mt-4">
        <span className="text-red-600 font-bold text-lg">{selectedItem.price}</span>
      </div>
    </div>
  </div>
)}
Condition d'affichage de la modale : La modale est rendue uniquement si isModalOpen est true et selectedItem contient les informations de l'élément sélectionné.
Contenu de la modale : La modale affiche le titre de l'élément, une image, la description complète et le prix.
Bouton de fermeture : Un bouton "X" est présent pour fermer la modale. Il appelle la fonction closeModal.
5. Fonction closeModal
La fonction closeModal ferme la modale. Elle met à jour isModalOpen à false pour masquer la modale et réinitialise selectedItem à null pour vider les informations affichées.

Voici la fonction closeModal :


const closeModal = () => {
  setIsModalOpen(false);   // Fermer la modale
  setSelectedItem(null);   // Réinitialiser l'élément sélectionné
};
Résumé du Flux :
Affichage de la liste : Les éléments de la liste sont rendus sous forme de cartes. Chaque carte contient un bouton "Voir plus".
Clic sur "Voir plus" : Lorsqu'un utilisateur clique sur "Voir plus", la fonction openModal est appelée, l'état selectedItem est mis à jour avec les informations de l'élément sélectionné et la modale est ouverte (isModalOpen = true).
Affichage de la modale : La modale s'affiche avec les informations détaillées du plat sélectionné.
Fermeture de la modale : L'utilisateur peut fermer la modale en cliquant sur le bouton "X", ce qui réinitialise l'état pour cacher la modale.
