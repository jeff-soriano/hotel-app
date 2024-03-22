import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

export default function App() {
  const [hotels, setHotels] = useState([])

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
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="p-4">
      <a
        href="/"
        className="mb-4 flex items-center text-purple-900 hover:underline"
      >
        <div
          className="bg-purple-900 text-white rounded-full flex items-center justify-center mr-2 pr-0.5"
          style={{ height: '15px', width: '15px', fontSize: '10px' }}
        >
          &#8592;
        </div>
        <div>SEE ALL LAS VEGAS HOTELS </div>
      </a>
      <div className="flex gap-x-7">
        <Sidebar hotels={hotels} />
        <MainContent />
      </div>
    </div>
  )
}
