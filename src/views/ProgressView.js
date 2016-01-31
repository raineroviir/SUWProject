import React from 'react'
import { Link } from 'react-router'
import { VictoryPie } from 'victory'

export class ProgressView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: [{ x: "", y: 0 },
      { x: "", y: 100 }]}
  }
  getData() {
    return [{ x: "70%", y: 70 },
      { x: "", y: 30 }]
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({data: this.getData()})
    }, 1000)
  }
  render () {
    return (
      <div >
      <h1 style={{textAlign: 'center'}}>
        LiveHome
      </h1>
      <VictoryPie style={{
        labels: {
          fontSize: 25,
          padding: 0
        }
      }}
      data={this.state.data}
      startAngle='0'
      animate={{velocity: 0.02}} />
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-5'>
            <h1></h1>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', fontSize: '1.5em'}}>
        <div>
        <Link to='/education'><i className="fa fa-leanpub">Education</i></Link>
        </div>
        <div>
        <Link to ='/records'><i className="fa fa-paperclip"></i>Records</Link>
        </div>
        <div>
        <Link to='/myhome'><i className="fa fa-picture-o"></i>Photos</Link>
        </div>
        </div>
      </div>
    )
  }
}

export default ProgressView
