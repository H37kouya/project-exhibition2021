import { useEffect, useState } from "react"

interface Advertise {
  url: string
  text: string
}
const advertises: Advertise[] = [
  { url: '', text: 'Clickポスター' },
  { url: 'https://media.uu-circles.com/', text: 'uu-yell' }
]
export const HopeToJoin = () => {
  const [hello, setHello] = useState(0)
  useEffect(() => {
    setHello(
      Math.floor(Math.random() * advertises.length)
    )
  }, [])
  return (
    <div className='flex' style={{ justifyContent: 'center' , marginBottom: '40px' }}>
      <a href={advertises[hello].url} className="block bg-green-100 text-center relative ad" style={{ paddingTop: '3rem', paddingBottom: '3rem', borderRadius: '40% 70% 30% 40%/30% 50% 50% 50%' }}>
        {/*<div className="text-center">
          <p>
            <a href={advertises[hello].url} className="font-bold">
              {advertises[hello].text}
            </a>
          </p>
        </div>*/}
        <p className='font-bold font-lg'>
              {advertises[hello].text}
        </p>
      </a>
    </div>
  )
}
