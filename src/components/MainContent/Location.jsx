export default function Location({ location }) {
  return (
    <div>
      <p className="text-lg mb-3">
        &#9042; {location?.address}, {location?.city}, {location?.state}{' '}
        {location?.postalCode}
      </p>
      <img
        src="http://localhost:8888/assets/images/map_venetian.png"
        alt="Venetian hotel location"
        className="mb-8 w-full"
      />
    </div>
  )
}
