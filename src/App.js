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
      <div className="mb-4">&#8592; See all Las Vegas Hotels</div>
      <div className="flex gap-x-7">
        <div className="w-1/4">
          <img
            src="/assets/images/venetian.jpg"
            alt="Venetian hotel"
            className="mb-8 w-full"
          />
          <ul className="py-2.5 px-3 bg-gray-100	">
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
        <div className="grow">
          <div>Venetian</div>
          <div>Description</div>
        </div>
      </div>
    </div>
  )
}
