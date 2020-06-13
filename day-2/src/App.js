import React from 'react';

import RoomInfo from './RoomInfo/RoomInfo';
import RoomForm from './RoomForm/RoomForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rooms: ['Living Room', 'Bed Room', 'Kitchen', 'Bathroom']
    };
  }

  render() {
    let roomList = this.state.rooms.map((room) => {
      return <RoomInfo title={room}/>
    });
    return (
      <div>
        {roomList}
        <RoomForm />
      </div>
    );
  }
}

export default App;
