import React from 'react'
import { Link } from 'react-router'

export class BuilderView extends React.Component {

  render () {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-5'>
            <h1>Drop your images here</h1>
          </div>
        </div>
        <Link to='/myhome'>Go to Images</Link>
      </div>
    )
  }
}

export default BuilderView
