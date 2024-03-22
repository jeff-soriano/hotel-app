import TabButton from './TabButton'

export default function Tabs({ currentTab, handleTabChange }) {
  return (
    <div className="flex uppercase w-full bg-fuchsia-800 mb-5">
      <TabButton
        label="description"
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
      <TabButton
        label="details"
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
      <TabButton
        label="location"
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
    </div>
  )
}
