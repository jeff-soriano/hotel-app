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
          // Hides around 200px worth of content unless full description is shown
          // (not exactly 200px because we're using Tailwind classes)
          'max-h-52': !showFullDescription,
        })}
        dangerouslySetInnerHTML={{
          // Replace linebreaks with line break elements so it works as expected
          __html: description?.replace(/\n/g, '<br/>'),
        }}
      ></p>

      <ShowMoreButton
        showMore={showFullDescription}
        handleClick={setShowFullDescription}
        showMoreLabel="Show Full Description"
        showLessLabel="Hide Full Description"
      />
    </div>
  )
}
