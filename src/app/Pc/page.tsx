import ListOfGames from "@/components/ListOfGames"

import React from "react"

const page = () => {
  return (
    <main className=" p-6 mt-[20vh] flex flex-col items-center">
      <ListOfGames platforms="PC" />
    </main>
  )
}

export default page
