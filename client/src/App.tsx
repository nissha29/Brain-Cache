import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { CreateContentModal } from "./components/CreateContentModal"

function App() {

  return (
    <div>
      <Button text="Add Content" variant="primary" size="md" onClick={() => alert("Pannu")}/>
      <Card />
      <div>
        <CreateContentModal  open={true}/>
      </div>
    </div>
  )
}

export default App
