import { Home } from "./Home";
import { CarList } from "./CarList"
import { NavBar } from "./NavBar"

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/CarList">
          <CarList/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
