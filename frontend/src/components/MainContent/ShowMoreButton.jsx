import ArrowIcon from '../ArrowIcon'

export default function ShowMoreButton({
  showMore,
  handleClick,
  showMoreLabel,
  showLessLabel,
}) {
  return (
    <button
      className="uppercase flex items-center text-purple-900"
      onClick={() => handleClick(!showMore)}
    >
      {showMore ? (
        <>
          <span className="mr-2">{showLessLabel}</span>
          <ArrowIcon direction="up" />
        </>
      ) : (
        <>
          <span className="mr-2">{showMoreLabel}</span>{' '}
          <ArrowIcon direction="down" />
        </>
      )}
    </button>
  )
}
