import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import ArrowIcon from './components/ArrowIcon'

export default function App() {
  const [hotels, setHotels] = useState([])
  const [loadingHotels, setLoadingHotels] = useState(true)
  const [currentHotel, setCurrentHotel] = useState({})
  const [loadingCurrentHotel, setLoadingCurrentHotel] = useState(true)

  useEffect(() => {
    // Set different loading states for the different api calls
    setLoadingHotels(true)
    setLoadingCurrentHotel(true)

    fetch('http://localhost:8888/api/hotels')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setHotels([...data.list])
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingCurrentHotel(false))

    fetch('http://localhost:8888/api/hotels/venetian')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCurrentHotel(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingHotels(false))
  }, [])

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
        <Sidebar classNames="w-1/4" hotels={hotels} loading={loadingHotels} />
        <MainContent
          classNames="w-3/4"
          currentHotel={currentHotel}
          loading={loadingCurrentHotel}
        />
      </div>
    </div>
  )
}
