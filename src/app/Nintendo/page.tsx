import ListOfGames from "@/components/ListOfGames"
import { usePathname } from "next/navigation"
import React from "react"

const page = () => {
  return (
    <main className=" p-6 mt-[20vh] flex flex-col items-center">
      <ListOfGames />
    </main>
  )
}

export default page
