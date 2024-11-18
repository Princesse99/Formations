"use client" // Ajoutez cette ligne pour marquer ce fichier comme un composant côté client

import * as React from "react"
import Accueil from "@/components/ui/accueil"
import Contact from "@/components/ui/contact"
import Experience from "@/components/ui/experience"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function Home() {
  const [selectedMenu, setSelectedMenu] = React.useState("accueil")

  // Fonction pour changer le contenu affiché en fonction du menu sélectionné
  const renderContent = () => {
    switch (selectedMenu) {
      case "accueil":
        return <Accueil />
        case "experiance":
          return <Experience/>
      case "parcours":
        return <div><h1>Parcours</h1></div>
      case "projets":
        return <div><h1>Projets</h1></div>
      case "contact":
        return <Contact/>
      default:
        return <div><h1>Portfolio</h1></div>
    }
  }

  return (
    <div>
      <h1>Portfolio</h1>

      
      {/* Menubar pour la navigation */}
      <Menubar className="bg-zinc-900 h-16">
        <MenubarMenu>
          <MenubarTrigger className="text-orange-500" onClick={() => setSelectedMenu("accueil")}>Accueil</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-orange-500 " onClick={() => setSelectedMenu("experiance")}>Expérience & Education</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-orange-500" onClick={() => setSelectedMenu("parcours")}>Parcours</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-orange-500" onClick={() => setSelectedMenu("projets")}>Projets</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-orange-500 " onClick={() => setSelectedMenu("contact")}>Contact</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      {/* Affiche le contenu dynamique en fonction de la sélection */}
      {renderContent()}

    </div>
  )
}
