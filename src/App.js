import React from 'react';
import logo from './logo.svg';
import './App.css';

const QUESTIONS = [
  { id: 1, type: 'text', question: 'Whats your name sss' },



  { id: 2, type: 'yesno', question: 'Whats your name' },
]

const getQuestionComponent = (question, index) => {
  switch (question.type) {
    case 'text':
      return <div>Text question</div>
    case 'yesno':
      return <div>Yes no questoin</div>
  }
}

function App() {
  const isShowTitle = true
  return (
    <div className="App">
      <header className="App-header">
        <h1>hehe</h1>
        {isShowTitle ? 'title' : 'no title'}
        {isShowTitle && (
          <h2>
            'title'
          </h2>
        )}
        {QUESTIONS.map(getQuestionComponent)}
      </header>
    </div>
  );
}

export default App;
