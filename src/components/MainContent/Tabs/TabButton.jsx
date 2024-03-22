import classNames from 'classnames'

export default function TabButton({ label, currentTab, handleTabChange }) {
  return (
    <button
      className={classNames(
        'uppercase py-4 px-14 grow hover:bg-fuchsia-900 border-b-4 hover:border-fuchsia-900',
        {
          'border-fuchsia-900': currentTab === label,
          'border-fuchsia-800': currentTab !== label,
        }
      )}
      onClick={() => handleTabChange(label)}
    >
      {label}
    </button>
  )
}
