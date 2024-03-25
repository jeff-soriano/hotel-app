import { useState } from 'react'
import classNames from 'classnames'
import ShowMoreButton from './ShowMoreButton'

export default function Details({ details }) {
  const [showFullDetails, setShowFullDetails] = useState(false)

  return (
    <div>
      <ul
        className={classNames('mb-5 overflow-hidden', {
          // Hides around 200px worth of content unless full details are shown
          // (not exactly 200px because we're using Tailwind classes)
          'max-h-52': !showFullDetails,
        })}
      >
        {details.map((detail, index) => {
          return (
            <li
              key={index}
              className={classNames({ 'mb-6': index !== details.length - 1 })} // Avoid doubling up on margins
            >
              <h2 className="font-bold">{detail.label}:</h2>
              <p>{detail.value}</p>
            </li>
          )
        })}
      </ul>
      <ShowMoreButton
        showMore={showFullDetails}
        handleClick={setShowFullDetails}
        showMoreLabel="View More Details"
        showLessLabel="View Fewer Details"
      />
    </div>
  )
}
