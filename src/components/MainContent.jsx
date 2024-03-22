import { useState } from 'react'
import classNames from 'classnames'

export default function MainContent() {
  const [currentTab, setCurrentTab] = useState('description')

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
      <div className="flex uppercase w-full bg-fuchsia-800 text-white">
        <button
          className={classNames(
            'py-4 px-14 grow hover:bg-fuchsia-900 border-b-4 hover:border-fuchsia-900',
            {
              'border-fuchsia-900': currentTab === 'description',
              'border-fuchsia-800': currentTab !== 'description',
            }
          )}
          onClick={() => setCurrentTab('description')}
        >
          DESCRIPTION
        </button>
        <button
          className={classNames(
            'py-4 px-14 grow hover:bg-fuchsia-900 border-b-4 hover:border-fuchsia-900',
            {
              'border-fuchsia-900': currentTab === 'details',
              'border-fuchsia-800': currentTab !== 'details',
            }
          )}
          onClick={() => setCurrentTab('details')}
        >
          DETAILS
        </button>
        <button
          className={classNames(
            'py-4 px-14 grow hover:bg-fuchsia-900 border-b-4 hover:border-fuchsia-900',
            {
              'border-fuchsia-900': currentTab === 'location',
              'border-fuchsia-800': currentTab !== 'location',
            }
          )}
          onClick={() => setCurrentTab('location')}
        >
          LOCATION
        </button>
      </div>
    </div>
  )
}
