import { useState } from 'react'

import TabButton from './TabButton'
import Description from './Description'
import Details from './Details'
import Location from './Location'

export default function MainContent({ currentHotel }) {
  const [currentTab, setCurrentTab] = useState('description')

  const handleTabChange = (newTab) => setCurrentTab(newTab)

  const getCurrentPage = (currentTab) => {
    switch (currentTab) {
      case 'description':
        return <Description description={currentHotel?.description} />
      case 'details':
        return <Details />
      case 'location':
        return <Location />
      default:
        return <></>
    }
  }
  return (
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
      <div className="flex uppercase w-full bg-fuchsia-800 text-white mb-5">
        <TabButton
          label="description"
          currentTab={currentTab}
          handleTabChange={handleTabChange}
        />
        <TabButton
          label="details"
          currentTab={currentTab}
          handleTabChange={handleTabChange}
        />
        <TabButton
          label="location"
          currentTab={currentTab}
          handleTabChange={handleTabChange}
        />
      </div>
      {getCurrentPage(currentTab)}
    </div>
  )
}
