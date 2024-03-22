import { useState } from 'react'

import TabButton from './TabButton'
import Description from './Description'
import Details from './Details'
import Location from './Location'
import Header from './Header'

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
      <Header />
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
