import { useState } from 'react'
import Markdown from 'react-markdown'
import classNames from 'classnames'

import TabButton from './TabButton'

export default function MainContent({ currentHotel }) {
  const [currentTab, setCurrentTab] = useState('description')
  const [showFullDescription, setShowFullDescription] = useState(false)

  const handleTabChange = (newTab) => setCurrentTab(newTab)

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
      <div
        className={classNames('mb-5 overflow-hidden', {
          'max-h-52': !showFullDescription,
        })}
      >
        <Markdown>{currentHotel?.description}</Markdown>
      </div>
      <button
        className="uppercase flex items-center text-purple-900"
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        {showFullDescription ? (
          <>
            Hide Full Description{' '}
            <div
              className="ml-2 bg-purple-900 text-white rounded-full flex items-center justify-center mr-2 pb-0.5"
              style={{ height: '15px', width: '15px', fontSize: '10px' }}
            >
              &#8593;
            </div>
          </>
        ) : (
          <>
            Show Full Description{' '}
            <div
              className="ml-2 bg-purple-900 text-white rounded-full flex items-center justify-center mr-2"
              style={{ height: '15px', width: '15px', fontSize: '10px' }}
            >
              &#8595;
            </div>
          </>
        )}
      </button>
    </div>
  )
}
