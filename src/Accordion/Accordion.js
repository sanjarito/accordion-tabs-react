import React from 'react'

class Accordion extends React.Component {

  static defaultProps = {
    sections:[]

  }

  constructor(props){
    console.log('props in constructor', props)
    super(props)
    this.state = {
     activeSectionIndex:null,
    }
  }

  handleButtonClick(index){
    this.setState({
      activeSectionIndex:index
    })
    console.log('button clicked' + index)
  }

  renderContent(index){
    console.log(this.state.activeSectionIndex)
    console.log(index)


    const currentTab = this.props.sections[this.state.activeSectionIndex]
    return (
      <p className='content'>
        {currentTab.content}
      </p>
    )
  }


render(){
  return(
    <ul>
      {this.props.sections.map((prop,index)=>(
      <li>
      <button key={index} onClick={() => this.handleButtonClick(index)}>{prop.title}
      </button>
      {(this.state.activeSectionIndex === index && !!this.props.sections.length) && this.renderContent(index)}
      </li>
      ))}

    </ul>
  )
}
}

export default Accordion
