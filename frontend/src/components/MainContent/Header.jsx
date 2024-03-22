export default function Header({ onStripBtnClicked }) {
  return (
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
          <button onClick={onStripBtnClicked}>&#9042; Strip</button>
          <span className="ml-4">&#9990; 1-866-4279</span>
          <span className="ml-4">&#10084; Best Price Guarantee</span>
        </div>
      </div>
      <div>
        <div className="text-5xl font-bold text-orange-500 mb-1">$128</div>
        <div className="text-gray-600">HOTEL ROOMS FROM</div>
      </div>
    </div>
  )
}
