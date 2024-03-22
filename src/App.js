import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import ArrowIcon from './components/ArrowIcon'

export default function App() {
  const [hotels, setHotels] = useState([])
  const [currentHotel, setCurrentHotel] = useState({})

  useEffect(() => {
    fetch('api/hotels/index.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setHotels([...data.list])
      })
      .catch((error) => console.error(error))

    fetch('api/hotels/venetian.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCurrentHotel(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="p-4">
      <a
        href="/"
        className="mb-4 flex items-center text-purple-900 hover:underline"
      >
        <ArrowIcon direction="left" />
        <div>SEE ALL LAS VEGAS HOTELS </div>
      </a>
      <div className="flex gap-x-7">
        <Sidebar hotels={hotels} />
        <MainContent currentHotel={currentHotel} />
      </div>
    </div>
  )
}
