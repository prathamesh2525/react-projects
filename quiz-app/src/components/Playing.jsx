import { useContext, useState } from "react"
import { GameContext } from "../utils/GameContext"
import { QUESTIONS } from "../utils/Questions"

export const Playing = () => {
  const { userName, setGameState, setCorrect, correct, gameState } =
    useContext(GameContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState("")

  const chooseOption = (option) => {
    setOptionChosen(option)
  }

  const nextQuestion = () => {
    if (QUESTIONS[currentQuestion].answer === optionChosen) {
      setCorrect(correct + 1)
    }

    setCurrentQuestion(currentQuestion + 1)
  }

  return (
    <div className="mt-8 flex flex-col items-center space-y-4">
      <p className="text-2xl ">
        Welcome{" "}
        <button
          onClick={() => setGameState("profile")}
          className="text-purple-500 hover:underline hover:cursor-pointer"
        >
          {userName}
        </button>{" "}
        to the Quiz
      </p>
      <div className="relative flex flex-col space-y-4 items-center justify-center bg-purple-600 h-[500px] w-[500px] rounded-xl shadow-2xl ">
        <span className="text-2xl font-bold text-center">
          {QUESTIONS[currentQuestion].prompt}
        </span>
        <div className="flex flex-col items-center text-xl space-y-2 ">
          <button
            onClick={() => chooseOption("optionA")}
            className="bg-slate-200 text-black w-36 px-4 py-2 rounded hover:bg-slate-900 hover:text-white focus:bg-slate-400"
          >
            {QUESTIONS[currentQuestion].optionA}
          </button>
          <button
            onClick={() => chooseOption("optionB")}
            className="bg-slate-200 text-black w-36 px-4 py-2 rounded  hover:bg-slate-900 hover:text-white focus:bg-slate-400"
          >
            {QUESTIONS[currentQuestion].optionB}
          </button>
          <button
            onClick={() => chooseOption("optionC")}
            className="bg-slate-200 text-black w-36 px-4 py-2 rounded  hover:bg-slate-900 hover:text-white focus:bg-slate-400"
          >
            {QUESTIONS[currentQuestion].optionC}
          </button>
          <button
            onClick={() => chooseOption("optionD")}
            className="bg-slate-200 text-black w-36 px-4 py-2 rounded  hover:bg-slate-900 hover:text-white focus:bg-slate-400"
          >
            {QUESTIONS[currentQuestion].optionD}
          </button>
        </div>

        {currentQuestion == QUESTIONS.length - 1 ? (
          <button
            onClick={() => {
              if (QUESTIONS[currentQuestion].answer === optionChosen) {
                setCorrect((s) => s + 1)
              }
              setGameState("completed")
            }}
            className="absolute bottom-5 right-5 py-2 px-4 bg-purple-800 hover:opacity-75"
          >
            Finish
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="absolute bottom-5 right-5 py-2 px-4 bg-purple-800 hover:opacity-75"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
