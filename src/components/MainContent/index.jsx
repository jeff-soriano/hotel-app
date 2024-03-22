import { useState, useRef } from 'react'

import Tabs from './Tabs'
import Description from './Description'
import Details from './Details'
import Location from './Location'
import Header from './Header'

const TAB_NAMES = Object.freeze({
  description: 'description',
  details: 'details',
  location: 'location',
})

export default function MainContent({ currentHotel }) {
  const [currentTab, setCurrentTab] = useState(TAB_NAMES.description)
  const tabsRef = useRef(null)

  const handleTabChange = (newTab) => setCurrentTab(newTab)

  const scrollToTabs = () => {
    tabsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  // Switch page content based on currently selected tab
  const getCurrentPage = (currentTab) => {
    switch (currentTab) {
      case TAB_NAMES.description:
        return <Description description={currentHotel?.description} />
      case TAB_NAMES.details:
        return <Details details={currentHotel?.details} />
      case TAB_NAMES.location:
        return <Location location={currentHotel?.location} />
      default:
        return <></>
    }
  }

  return (
    <div className="w-3/4">
      <Header
        onStripBtnClicked={() => {
          setCurrentTab('location')
          scrollToTabs()
        }}
      />
      <Tabs
        refs={tabsRef}
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
      {getCurrentPage(currentTab)}
    </div>
  )
}
