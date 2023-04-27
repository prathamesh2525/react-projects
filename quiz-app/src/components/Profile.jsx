import { useContext } from "react"
import { GameContext } from "../utils/GameContext"

export const Profile = () => {
  const { userName, history } = useContext(GameContext)
  return (
    <div>
      <h1 className="text-6xl mt-12 text-purple-700">
        {userName}&#39;s Profile
      </h1>
      <p className="text-2xl mt-6">Your previous scores : {history.join(" , ")}</p>
    </div>
  )
}
