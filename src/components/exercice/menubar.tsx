import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Calculator, Citrus, Cookie, Link, LockIcon, Magnet, MessageCircleQuestion, Utensils, UtensilsCrossed } from 'lucide-react'
  

function Menubar() {
  return (
    <div className="flex flex-col items-center px-4 py-8 bg-gray-50 min-h-screen">
        <div>
            <h1 className='scroll-m-20 text-[39px] tracking-tight font-bold text-blue-950 text-start sm:md:text-center'>Bienvenu dans versa app </h1>
            <p className='sm:md:text-center text-start font-thin text-blue-950'>L’application polyvalente pour toutes vos besoins regroupe des outils essentiels, simplifiant ainsi votre quotidien en une seule plateforme pratique.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* cadre 1 */}
        <Card className='w-80 h-44 ml-28 mt-11'>
        <CardHeader>
            <CardTitle className='flex items-center gap-2'> <Calculator/>Calculatrice</CardTitle>
            <CardDescription>Calculez le coût de votre projet.</CardDescription>
        </CardHeader>
        
       <CardContent>
       <a href="/calcul" className='text-blue-700 ml-48'>Allez à</a>    
       </CardContent>
        </Card>
         {/* cadre 2 */}
        <Card className='w-80 h-44 ml-28 mt-11'>
        <CardHeader>
            <CardTitle className='flex items-center gap-2'><MessageCircleQuestion/>Quiz </CardTitle>
            <CardDescription>Déployez votre nouveau projet en un clic.</CardDescription>
        </CardHeader>
        
       <CardContent>
       <a href="#" className='text-blue-700 ml-48'>Allez à</a>    
       </CardContent>
        </Card>
       
         {/* cadre 3 */}
        <Card className='w-80 h-44 ml-28 mt-11'>
        <CardHeader>
            <CardTitle className='flex items-center gap-2'><UtensilsCrossed/>Recette cuisine  </CardTitle>
            <CardDescription>Découvrez des recettes de cuisine.</CardDescription>
        </CardHeader>
        
       <CardContent>
       <a href="\recettes" className='text-blue-700 ml-48'>Allez à</a>    
       </CardContent>
        </Card>
        {/* cadre 4 */}
        <Card className='w-80 h-44 ml-28 mt-11'>
        <CardHeader>
            <CardTitle className='flex items-center gap-2'>Tic tac Toe </CardTitle>
            <CardDescription>Un jeu où deux joueurs alignent des symboles sur une grille 3x3.</CardDescription>
        </CardHeader>
        
       <CardContent>
       <a href="#" className='text-blue-700 ml-48'>Allez à</a>    
       </CardContent>
        </Card>
        {/* cadre 5 */}
        <Card className='w-80 h-44 ml-28 mt-11'>
        <CardHeader>
            <CardTitle className='flex items-center gap-2'>Jeux de mémoire </CardTitle>
            <CardDescription>Consiste à associer des paires de cartes identiques .</CardDescription>
        </CardHeader>
        
       <CardContent>
       <a href="#" className='text-blue-700 ml-48'>Allez à</a>    
       </CardContent>
        </Card>
       {/* cadre 6 */}
        <Card className='w-80 h-44 ml-28 mt-11'>
        <CardHeader>
            <CardTitle className='flex items-center gap-2'><LockIcon/>Générateur de mots de passe </CardTitle>
            <CardDescription>Un générateur de mots de passe crée des mots de passe aléatoires.</CardDescription>
        </CardHeader>
        
       <CardContent>
       <a href="#" className='text-blue-700 ml-48'>Allez à</a>    
       </CardContent>
        </Card>
        </div>
    </div>
  )
}

export default Menubar
