import React, { Component } from 'react'

export default class Sticky extends Component {
  constructor() {
    super()
    this.handleSticky = this.handleSticky.bind(this);

    this.state = {
      isSticky: false,
    }
  }

  handleSticky() {
    let isSticky = false;
    if (window.pageYOffset >= this.stickyElement.offsetTop) {
      isSticky = true;
    }

    this.setState({
      isSticky,
    })
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleSticky)
  }

  render() {
    const stickyClasses = this.state.isSticky ? 'stickyNav' : 'navbar'
    return (
      <div ref={node => { this.stickyElement = node }} className="papi">
        <div className={stickyClasses}>
          <h1>Sticky</h1>
        </div>
      </div>
    );
  }
}
