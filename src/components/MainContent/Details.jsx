import { useState } from 'react'
import classNames from 'classnames'
import ShowMoreButton from './ShowMoreButton'

export default function Details({ details }) {
  const [showFullDetails, setShowFullDetails] = useState(false)

  return (
    <div>
      <div
        className={classNames('mb-5 overflow-hidden', {
          // Hides around 200px worth of content unless full details are shown (not exactly 200px because we're using Tailwind classes)
          'max-h-52': !showFullDetails,
        })}
      >
        {details.map((detail, index) => {
          return (
            <div
              className={classNames({ 'mb-6': index !== details.length - 1 })} // Avoid doubling up on margins
            >
              <h3 className="font-bold">{detail.label}:</h3>
              <p>{detail.value}</p>
            </div>
          )
        })}
      </div>
      <ShowMoreButton
        showMore={showFullDetails}
        handleClick={setShowFullDetails}
        showMoreLabel="View More Details"
        showLessLabel="View Fewer Details"
      />
    </div>
  )
}
