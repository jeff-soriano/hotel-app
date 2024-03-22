import { useState } from 'react'

import Markdown from 'react-markdown'
import classNames from 'classnames'

import ArrowIcon from '../ArrowIcon'

export default function Description({ description }) {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <div>
      <div
        className={classNames('mb-5 overflow-hidden', {
          'max-h-52': !showFullDescription,
        })}
      >
        <Markdown>{description}</Markdown>
      </div>
      <button
        className="uppercase flex items-center text-purple-900"
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        {showFullDescription ? (
          <>
            <span className="mr-2">Hide Full Description</span>
            <ArrowIcon direction="up" />
          </>
        ) : (
          <>
            <span className="mr-2">Show Full Description</span>{' '}
            <ArrowIcon direction="down" />
          </>
        )}
      </button>
    </div>
  )
}
