"use client"
import { GAMES } from "@/types"
import React, { useEffect, useState } from "react"
import { data } from "../../data"
import { usePathname } from "next/navigation"

const ListOfGames = () => {
  const [games, setGames] = useState<GAMES[]>([])

  useEffect(() => {
    setGames(Object.values(data).flat())
  }, [])
  const pathname = usePathname()
  const pathnameWithoutSlash = pathname.replace("/", "")

  const filteredGames = pathnameWithoutSlash
    ? games.filter((game) => game.platform.includes(pathnameWithoutSlash))
    : games

  return (
    <div className="w-2/3 flex flex-col ">
      <h2 className="text-white text-2xl mb-6">Tendencias</h2>
      <ul className="flex flex-wrap gap-10 items-center">
        {filteredGames.map((game) => (
          <li className="flex flex-col gap-4" key={game.id}>
            <div className="relative">
              <img
                className="rounded-xl w-96 cursor-pointer  hover:scale-110 duration-300"
                src={game.img}
                alt={game.name}
              />
              <span className="absolute bottom-0 text-sm text-white font-semibold bg-colorPrice px-4 py-2 rounded-xl">
                -{game.discount}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white">{game.name}</span>
              <span className="text-white font-semibold">{game.price}€</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListOfGames
