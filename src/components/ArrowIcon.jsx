export default function ArrowIcon({ direction }) {
  const baseClasses =
    'bg-purple-900 text-white rounded-full flex items-center justify-center mr-2 pr-0.5'
  const baseStyles = { height: '15px', width: '15px', fontSize: '10px' }

  switch (direction) {
    case 'left':
      return (
        <div className={`${baseClasses} pr-0.5`} style={baseStyles}>
          &#8592;
        </div>
      )
    case 'right':
      return (
        <div className={baseClasses} style={baseStyles}>
          &#8594;
        </div>
      )
    case 'up':
      return (
        <div className={`${baseClasses} pb-0.5 pl-0.5`} style={baseStyles}>
          &#8593;
        </div>
      )
    case 'down':
      return (
        <div className={`${baseClasses} pl-0.5`} style={baseStyles}>
          &#8595;
        </div>
      )
    default:
      return <></>
  }
}
