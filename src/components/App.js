import Header from "./Header"
import JournalEntry from "./JournalEntry";
import travelData from "../data.js"

function App() {
  let id = 1
  const travelJournalEntries = travelData.map(travel => {
      return <JournalEntry 
          key={id++}
          item={travel}
          />
  })

  return (
    <div className="App">
      <Header />
      {travelJournalEntries}
    </div>
  );
}

export default App;
