import React from 'react';
import Display from './Display';
import ControlPanel from './ControlPanel';
import './App.css';

class App extends React.Component {
  state = {
    result: 0,
    pendingNumber: 0,
    display: 0,
    pendingOperation: '',
    isNewNumber: false
  }

  handleNumberClick = (i: number): void => {
    if (this.state.isNewNumber) {
      this.setState({
        display: i,
        isNewNumber: false
      })
    } else {
      let number = this.state.display*10 + i;
      this.setState({
        display: number
      })
    }
    
  }

  handleOperatorClick = (operator: string): void => {
    if (operator == 'C') {
      this.setState({
        display: 0,
        pendingNumber: 0,
        pendingOperation: '',
        isNewNumber: true
      })
    } else {
      if (!this.state.pendingOperation) {
        let pendingNumber = this.state.display;
        this.setState({
          pendingNumber,
          display: 0,
          pendingOperation: operator,
          isNewNumber: true
        })
      } else {
        let pendingNumber = this.state.display;
        switch(this.state.pendingOperation) {
          case '+':
            pendingNumber = this.state.pendingNumber + this.state.display;
            break;
          case '-':
            pendingNumber = this.state.pendingNumber - this.state.display;
            break;
          case '*':
            pendingNumber = this.state.pendingNumber * this.state.display;
            break;
          case '/':
            pendingNumber = this.state.pendingNumber / this.state.display;
            break;
        }
        this.setState({
          pendingNumber,
          display: pendingNumber,
          pendingOperation: operator,
          isNewNumber: true
        })
      }
    }

  }

  render() {
    return (
      <div className="App">
        <Display display={this.state.display}/>
        <ControlPanel handleNumberClick={this.handleNumberClick}
                      handleOperatorClick = {this.handleOperatorClick}/>
      </div>
    );
  }
}

export default App;
