import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  //question state is created
  const [question, setQuestions] = useState(data);
  return(
    <main>
      <div className='container'>
        <h3>question and answers about login</h3>
        <section className='info'>
          {question.map((question)=>{
            return (
              <SingleQuestion key={question.id}{...question}></SingleQuestion>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App;
