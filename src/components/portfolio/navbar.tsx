"use client"
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Accueil from "@/components/portfolio/acceuil"
import Contact from "@/components/portfolio/contact"
import React from "react"
import Experience from "./experience"
import Competence from "./competence"
import Parcours from "./parcours"

const Navbar = () => {
    const [selectedMenu, setSelectedMenu] = React.useState("accueil")
    const renderContent = () => {
        switch (selectedMenu) {
            case "accueil":
                return <Accueil />
            case "experiance":
                return <Experience/>
            case "parcours":
                return <Parcours/>
            case "projets":
                return <Competence/>
            case "contact":
                return <Contact />
            default:
                return <div><h1>Portfolio</h1></div>
        }
    }
    return (
        <div>


            {/* Menubar pour la navigation */}
            <Menubar className="bg-zinc-900 h-16">
                <MenubarMenu>
                    <MenubarTrigger className="text-orange-500" onClick={() => setSelectedMenu("accueil")}>Accueil</MenubarTrigger>
                </MenubarMenu>
               
                <MenubarMenu>
                    <MenubarTrigger className="text-orange-500" onClick={() => setSelectedMenu("parcours")}>Parcours</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-orange-500" onClick={() => setSelectedMenu("projets")}>Compétences</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="text-orange-500 " onClick={() => setSelectedMenu("experiance")}>Expérience</MenubarTrigger>
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
export default Navbar