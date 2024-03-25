import Loading from './Loading'

export default function Sidebar({ classNames, hotels, loading }) {
  return (
    <div className={classNames}>
      <img
        src="http://localhost:8888/assets/images/venetian.jpg"
        alt="Venetian hotel"
        className="mb-8 w-full"
      />
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  )
}
