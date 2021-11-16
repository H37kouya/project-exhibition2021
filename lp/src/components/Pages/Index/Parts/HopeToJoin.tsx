import { useEffect, useState } from "react"

interface Advertise {
  url: string
  text: string
}
const advertises: Advertise[] = [
  { url: '', text: 'U-labの広告' },
  { url: '', text: 'UUADの広告' }
]
export const HopeToJoin = () => {
  const [hello, setHello] = useState(0)
  useEffect(() => {
    setHello(
      Math.floor(Math.random() * advertises.length)
    )
  }, [])
  return (
    <div className="bg-green-100 border-t-8 border-gray-50" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <div className="text-center">
        <p>
          <a href={advertises[hello].url} className="font-bold">
            {advertises[hello].text}
          </a>
        </p>
      </div>
    </div>
  )
}
