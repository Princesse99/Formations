"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const list = [
  {
    question: "Quelle est la capitale de la France ?",
    choix: ["Paris", "Lyon", "Marseille", "Toulouse"],
    reponse: "Paris",
  },
  {
    question: "Qui a écrit 'Les Misérables' ?",
    choix: ["Victor Hugo", "Emile Zola", "Molière", "Voltaire"],
    reponse: "Victor Hugo",
  },
  {
    question: "Quel est le plus grand océan du monde ?",
    choix: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"],
    reponse: "Océan Pacifique",
  },
  {
    question: "Quelle est la planète la plus proche du Soleil ?",
    choix: ["Terre", "Mars", "Vénus", "Mercure"],
    reponse: "Mercure",
  },
];

function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = list[currentIndex];

  const handleAnswerClick = (choix) => {
    setSelectedAnswer(choix);
    if (choix === currentQuestion.reponse) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < list.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null); 
    } else {
      alert(`Quiz terminé! Votre score est de ${score}/${list.length}.`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
        <div>
          <h2 className="text-center py-5">{currentQuestion.question}</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {currentQuestion.choix.map((choix, index) => (
            <Button
              key={index}
              variant="outline"
              className={`py-4 w-full ${
                selectedAnswer === choix
                  ? choix === currentQuestion.reponse
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : ""
              }`}
              onClick={() => handleAnswerClick(choix)}
              disabled={selectedAnswer !== null} // Désactiver après sélection
            >
              {choix}
            </Button>
          ))}
        </div>
        <div className="gap-4 mt-6 flex justify-center">
          <Button
            variant="outline"
            className="py-4 bg-red-950 text-white"
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null} // Désactiver si aucune réponse sélectionnée
          >
            {currentIndex < list.length - 1 ? "Suivant" : "Terminer"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default QuizPage;
