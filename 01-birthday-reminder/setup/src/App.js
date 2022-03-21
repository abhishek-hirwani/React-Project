import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  //people state is created
  //passing the data as the value t states
  const [people, setPeople]= useState(data);
    return (
    <main>
      <section className='container'>
        {/* counting the people array lengt */}
        <h3>{people.length}Birthday's today</h3>
        <List people={people}/>
        {/* after clicking clear all button, setting the people array as empty */}
        <button onClick={()=> setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
