import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    fetch('api/hotels/index.json')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))

    fetch('api/hotels/venetian.json')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }, [])

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}
