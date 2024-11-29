import Image from "next/image"

const HeaderImage = () => {
  return (
    <div className="absolute w-full h-[60vh] overflow-hidden">
      <Image
        src="/homepage-es.jpg"
        alt="blackFriday-image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  )
}

export default HeaderImage
