"use client";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TestPage = () => {
  const [tasks, setTasks] = useState<
    { titre: string; date: string; priorite: string; status: string }[]
  >([]);
  const [titre, setTitre] = useState("");
  const [date, setDate] = useState("");
  const [priorite, setPriorite] = useState("");
  const [status, setStatus] = useState("");

  // Charger les tâches depuis localStorage au démarrage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Sauvegarder dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = { titre, date, priorite, status };
    setTasks([...tasks, newTask]);
    setTitre("");
    setDate("");
    setPriorite("");
    setStatus("");
  };
const handleDeleteTask =()=>{
    
}
  return (
    <div>
      <div>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Formulaire</CardTitle>
            <CardDescription>Ajouter une Tâche</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddTask}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="titre">Titre</Label>
                  <Input
                    id="titre"
                    placeholder="Titre de la tâche"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="date">Échéance</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date} // Ajout de la valeur pour corriger le problème
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Priorité</Label>
                  <Select onValueChange={setPriorite} value={priorite}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgence">Urgence</SelectItem>
                      <SelectItem value="moyenne">Moyenne</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Status</Label>
                  <Select onValueChange={setStatus} value={status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="encours">En cours</SelectItem>
                      <SelectItem value="terminee">Terminée</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <CardFooter className="flex justify-between">
                <Button type="submit">Enregistrer</Button>
                <Button
                  type="button"
                  onClick={() => {
                    setTitre("");
                    setDate("");
                    setPriorite("");
                    setStatus("");
                  }}
                >
                  Annuler
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Titre</th>
              <th scope="col" className="px-6 py-3">Échéance</th>
              <th scope="col" className="px-6 py-3">Priorité</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="px-6 py-4">{task.titre}</td>
                <td className="px-6 py-4">{task.date}</td>
                <td className="px-6 py-4">{task.priorite}</td>
                <td className="px-6 py-4">{task.status}</td>
                <td className="px-6 py-4">Edit | Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestPage;
