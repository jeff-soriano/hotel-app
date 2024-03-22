import { useState } from 'react'

import Markdown from 'react-markdown'
import classNames from 'classnames'

import ShowMoreButton from './ShowMoreButton'

export default function Description({ description }) {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <div>
      <p
        className={classNames('mb-5 overflow-hidden', {
          'max-h-52': !showFullDescription,
        })}
      >
        <Markdown>{description}</Markdown>
      </p>
      <ShowMoreButton
        showMore={showFullDescription}
        handleClick={setShowFullDescription}
        showMoreLabel="Show Full Description"
        showLessLabel="Hide Full Description"
      />
    </div>
  )
}
