import { useContext } from "react"
import { GameContext } from "../utils/GameContext"
import { QUESTIONS } from "../utils/Questions"

export const Result = () => {
  const { correct, setGameState, setHistory, history, setCorrect } =
    useContext(GameContext)
  return (
    <div className="relative flex flex-col space-y-4 items-center justify-center bg-purple-600 h-[500px] w-[500px] rounded-xl shadow-2xl mt-8">
      <h1 className="text-3xl font-bold">Result</h1>
      <p className="text-2xl font-bold">
        You scored {correct} out of {QUESTIONS.length} !
      </p>
      <button
        onClick={() => {
          setHistory([...history, correct])
          setCorrect(0)
          setGameState("playing")
        }}
        className="text-xl absolute bottom-5 px-4 py-2 bg-purple-800 font-bold hover:opacity-80"
      >
        Restart
      </button>
    </div>
  )
}
