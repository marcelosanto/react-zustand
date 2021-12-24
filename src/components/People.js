import { usePeopleStore } from '../store'

const People = () => {
  const people = usePeopleStore((state) => state.people)

  return (
    <div>
      No temos {people.length} registros pessoas no DB
      <ul>
        {people.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

export default People
