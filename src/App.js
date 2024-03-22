import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'

export default function App() {
  const [hotels, setHotels] = useState([])
  const [currentTab, setCurrentTab] = useState('description')

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
        <div className="w-3/4">
          <div className="flex justify-between mb-11">
            <div className="text-gray-600">
              <div className="flex items-end mb-1">
                <h1 className="text-4xl uppercase">Venetian</h1>
                <div className="text text-gray-400 ml-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="mx-0.5">
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-end">
                <span>
                  <span>&#9042;</span>
                  <span className="ml-1">Strip</span>
                </span>
                <span className="ml-4">
                  <span>&#9990;</span>
                  <span className="ml-1">1-866-4279</span>
                </span>
                <span className="ml-4">
                  <span>&#10084;</span>
                  <span className="ml-1">Best Price Guarantee</span>
                </span>
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500">$128</div>
              <div>HOTEL ROOMS FROM</div>
            </div>
          </div>
          <div className="flex uppercase w-full bg-fuchsia-800 text-white">
            <button className="py-4 px-14 grow hover:bg-fuchsia-900 border-b-4 border-fuchsia-900">
              DESCRIPTION
            </button>
            <button className="py-4 px-14 grow hover:bg-fuchsia-900">
              DETAILS
            </button>
            <button className="py-4 px-14 grow hover:bg-fuchsia-900">
              LOCATION
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
