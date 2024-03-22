import { useState } from 'react'

import Markdown from 'react-markdown'
import classNames from 'classnames'

import ShowMoreButton from './ShowMoreButton'

export default function Description({ description }) {
  const [showFullDescription, setShowFullDescription] = useState(false)

  return (
    <div>
      <div
        className={classNames('mb-5 overflow-hidden', {
          // Hides around 200px worth of content unless full description is shown
          // (not exactly 200px because we're using Tailwind classes)
          'max-h-52': !showFullDescription,
        })}
      >
        <Markdown>{description}</Markdown>
      </div>
      <ShowMoreButton
        showMore={showFullDescription}
        handleClick={setShowFullDescription}
        showMoreLabel="Show Full Description"
        showLessLabel="Hide Full Description"
      />
    </div>
  )
}
