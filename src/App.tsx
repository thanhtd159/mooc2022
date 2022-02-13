import React from 'react';
import './App.css';
import GustList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

function App() {
  return (
    <div className="App">
        <EventComponent/>
        {/*<UserSearch/>*/}
        {/*<GustList/>*/}
    </div>
  );
}

export default App;
