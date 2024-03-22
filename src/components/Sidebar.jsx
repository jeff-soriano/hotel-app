export default function Sidebar({ hotels }) {
  return (
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
  )
}
