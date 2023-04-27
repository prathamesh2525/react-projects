import { useState } from "react"
import "./App.css"
import { Menu } from "./components/Menu"
import { GameContext } from "./utils/GameContext"
import { Playing } from "./components/Playing"
import { Profile } from "./components/Profile"
import { Result } from "./components/Result"

function App() {
  const [gameState, setGameState] = useState("menu")
  const [userName, setUserName] = useState("")
  const [correct, setCorrect] = useState(0)
  const [history, setHistory] = useState([])

  return (
    <div className="min-h-screen p-4 flex flex-col items-center bg-slate-950 text-white">
      <span className="text-4xl font-bold hover:bg-purple-500 hover:text-black p-2 rounded transition duration-200 cursor-pointer">
        Quiz App
      </span>
      <GameContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          correct,
          setCorrect,
          history,
          setHistory,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Playing />}
        {gameState === "profile" && <Profile />}
        {gameState === "completed" && <Result />}
      </GameContext.Provider>
    </div>
  )
}

export default App
