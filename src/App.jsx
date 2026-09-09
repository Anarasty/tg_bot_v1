import DataTable from './components/DataTable/DataTable'
import mockData from './mock data/mockData'

function App() {
  return (
    <main className="app">
      <DataTable data={mockData} />
    </main>
  )
}

export default App
