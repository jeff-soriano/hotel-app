export default function Location({ location }) {
  return (
    <div>
      <p className="text-lg mb-3">
        &#9042; {location?.address}, {location?.city}, {location?.state}{' '}
        {location?.postalCode}
      </p>
      <img
        src="/assets/images/map_venetian.png"
        alt="Venetian hotel"
        className="mb-8 w-full"
      />
    </div>
  )
}
