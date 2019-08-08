import React, { Component } from 'react'

interface IPros {
  handleNumberClick: (i: number) => void,
  handleOperatorClick: (operator: string) => void
}

export class ControlPanel extends Component<IPros> {
  constructor(props: IPros) {
    super(props);
  }

  render() {
    let numberPanel = [];
    for (let i = 0; i < 10; i ++) {
      numberPanel.push(<button key={i} onClick={() => this.props.handleNumberClick(i)}>{i}</button>)
    }

    let operatorsPanel = ['+', '-', '*', '/', '=', 'C'].map(operator => (
      <button onClick={() => this.props.handleOperatorClick(operator)}>{operator}</button>
    ))
    return (
      <div className='control-panel'>
        {numberPanel} <br/>
        {operatorsPanel}
      </div>
    )
  }
}

export default ControlPanel
