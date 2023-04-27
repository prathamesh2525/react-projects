import { useContext } from "react"
import { GameContext } from "../utils/GameContext"

export const Menu = () => {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GameContext)
  return (
    <div className="p-4 text-black">
      <div className="flex flex-col space-y-4 items-center justify-center bg-purple-600 h-[500px] w-[500px] rounded-xl shadow-2xl ">
        <input
          className="px-4 py-2 rounded-xl"
          placeholder="Name:  Jane Doe"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => setGameState("playing")}
          className=" px-4 py-2 rounded-xl font-bold bg-white hover:text-white hover:bg-slate-900 transition duration-150"
        >
          Start Quiz
        </button>
      </div>
    </div>
  )
}
