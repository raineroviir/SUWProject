import React from 'react'
import { Link } from 'react-router'
import classes from './HomeView.scss'
import ReactSwipe from 'react-swipe'
import Splash from '../../static/splash.jpg'
import Video from 'react-html5video'
import { Button } from 'react-bootstrap'

export class HomeView extends React.Component {

  render () {
    return (
      <div className='container text-center'>
        <h1>LiveHome</h1>
        <Button style={{fontSize: '3em'}} bsStyle='success' bsSize='large'><Link style={{color: 'white'}} to='/progress'>Sign In</Link></Button>
        <div style={{marginTop: '2.5em'}}>
        </div>
      </div>
    )
  }
}

export default HomeView
