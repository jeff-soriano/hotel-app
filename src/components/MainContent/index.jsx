import { useState } from 'react'

import Tabs from './Tabs'
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
      <Tabs currentTab={currentTab} handleTabChange={handleTabChange} />
      {getCurrentPage(currentTab)}
    </div>
  )
}
