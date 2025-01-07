import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  const  object=[
{
    id:1,
    titre:'Gâteau au chocolat',
    description:'Un gâteau au chocolat délicieux et facile à préparer.',
    image:'/images/gateaux.jpg'
},
{
    id:2,
    titre:'Tarte aux pommes',
    description:'Une délicieuse tarte aux pommes classique.',
    image:'/images/gateaux.jpg'
},
{
    id:3,
    titre:'Salade César',
    description:'Une salade César avec une sauce maison.',
    image:'/images/gateaux.jpg'
},
{
    id:4,
    titre:'Soupe de potiron',
    description:'Une soupe crémeuse au potiron pour lautomne.',
    image:'/images/gateaux.jpg'
},
{
    id:5,
    titre:'Pâtes à la carbonara',
    description:'Une recette classique italienne avec des pâtes, des œufs, du fromage et du bacon.',
    image:'/images/gateaux.jpg'
},
{
    id:6,
    titre:'Pizza Margherita',
    description:'Une pizza simple avec de la tomate, de la mozzarella et du basilic frais',
    image:'/images/pizza.jpg'
},
{
    id:7,
    titre:'Quiche Lorraine',
    description:'Une quiche classique aux lardons, œufs et crème',
    image:'/images/gateaux.jpg'
},
{
    id:8,
    titre:'Poulet rôti',
    description:'Un poulet rôti doré et juteux, servi avec des légumes.',
    image:'/images/gateaux.jpg'
},
  ]
function recette() {
  return (
    <div>
      <div>
        <h2 className='text-blue-950 text-xl'>Une Collection de Recettes Diverses à Essayer</h2>
      </div>
      <div>
      <Card>
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
        </Card>

      </div>
    </div>
  )
}

export default recette
