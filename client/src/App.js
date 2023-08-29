import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import CarList from "./CarList"
import NavBar from "./NavBar"
import LogIn from "./LogIn"

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/CarList">
          <CarList/>
        </Route>
        <Route exact path="/LogIn">
          <LogIn/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  )
}

{/* <Navbar />
    <div className="box"/>
    <ClickMe/>
      <Switch>
        <Route exact path="/CaughtPokemon">
          <CaughtPokemon caughtPokemon={caughtPokemon} />
        </Route>
        <Route exact path="/UncaughtPokemon">
          <UncaughtPokemon uncaughtPokemon={uncaughtPokemon} />
        </Route>
        <Route exact path="/WildPokemon">
          <WildPokemon uncaughtPokemon={uncaughtPokemon} handleUpdatePokemon={handleUpdatePokemon}/>
        </Route>
        <Route exact path="/AddPokemon">
          <AddPokemon onAddPokemon={onAddPokemon} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </UpdateFunctionContext.Provider> */}

export default App;
