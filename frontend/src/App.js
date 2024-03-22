import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import ArrowIcon from './components/ArrowIcon'

export default function App() {
  const [hotels, setHotels] = useState([])
  const [currentHotel, setCurrentHotel] = useState({})

  useEffect(() => {
    // Fetch data - ideally would have loading UI to indicate incomplete requests
    // but since this loads so fast locally and is a simple project I opted not to implement this
    // for the sake of time
    fetch('http://localhost:8888/api/hotels')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setHotels([...data.list])
      })
      .catch((error) => console.error(error))

    fetch('http://localhost:8888/api/hotels/venetian')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCurrentHotel(data)
      })
      .catch((error) => console.error(error))
  }, [])

  // Note: The layout is not responsive since this was not listed as a requirement
  return (
    <div className="p-4">
      <a
        href="/"
        className="mb-4 flex items-center text-purple-900 hover:underline"
      >
        <ArrowIcon direction="left" />
        <div>SEE ALL LAS VEGAS HOTELS</div>
      </a>
      <div className="flex gap-x-7">
        <Sidebar hotels={hotels} />
        <MainContent currentHotel={currentHotel} />
      </div>
    </div>
  )
}
