import React from 'react'
import { Transition } from 'react-transition-group'

const duration = 600;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: 'inline-block',
  backgroundColor: '#fafafa'
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        ...
      </div>
    )}
  </Transition>
);

class App extends React.Component {
  state = { show: false }

  handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }))
  }
  
  render() {
    const { show } = this.state
    return (
      <div>
        <button onClick={() => this.handleToggle()}>
          Click to toggle
        </button>
        <div>
          <Fade in={!!show} />
        </div>
      </div>
    )
  }
}

export default App;
