import { useEffect, useState } from 'react'

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
        <span
          className="bg-purple-900 text-white rounded-full flex items-center justify-center mr-2"
          style={{ height: '15px', width: '15px', fontSize: '10px' }}
        >
          &#8592;
        </span>
        SEE ALL LAS VEGAS HOTELS{' '}
      </a>
      <div className="flex gap-x-7">
        <div className="w-1/4">
          <img
            src="/assets/images/venetian.jpg"
            alt="Venetian hotel"
            className="mb-8 w-full"
          />
          <ul className="py-2.5 px-3 bg-gray-100">
            {hotels.map((hotel, index) => {
              return (
                <li
                  key={`${index}-${hotel.code}`}
                  className="flex gap-x-3 justify-between my-2.5"
                >
                  <a href="/" className="w-3/4 hover:underline text-purple-900">
                    {hotel.name}
                  </a>
                  <span>${hotel.price.toFixed(2)}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <div>Venetian</div>
          <div>Description</div>
        </div>
      </div>
    </div>
  )
}
