import React from 'react'
import { Link } from 'react-router'
import classes from './ImageSwipeView.scss'
import ReactSwipe from 'react-swipe'
import FramingImage from './framing.jpg'
import FinishedImage from './finished.jpg'
import DryWallImage from './drywall.jpg'

export class ImageSwipeView extends React.Component {

  nextSwipe() {
    this.refs.ReactSwipe.swipe.next()
  }
  prevSwipe() {
    this.refs.ReactSwipe.swipe.prev()
  }
  render () {
    return (
      <div className='container text-center'>
        <div>
          <Link to='/progress'>Go home</Link>
        </div>
        <ReactSwipe ref='ReactSwipe'>
        <div>
          <h1>Weekly Update #1</h1>
          <img className={classes.duck}
            src={FramingImage}
            alt='Framing lorem ipsum' />
          <h2> Milestones reached: Framing in progress
            <div>1/05/2016</div>
          </h2>
        </div>
        <div>
          <h1>Weekly Update #2</h1>
          <img className={classes.duck}
            src={DryWallImage}
            alt='Framing lorem ipsum' />
            <h2>Milestones reached: Drywall done
              <div>1/12/2016</div>
            </h2>
        </div>
        <div>
          <h1>Weekly Update #3</h1>
          <img className={classes.duck}
            src={FinishedImage}
            alt='Framing lorem ipsum' />
            <h2>Milestones reached: Roofing finalized
              <div>1/19/2016</div>
            </h2>
        </div>
         </ReactSwipe>
         <div style={{fontSize: '1.5em'}}>
          <a style={{padding: '0.1em 0.1em 0.1em 0.1em'}}><i className="fa fa-facebook 1"></i></a>
          <a style={{padding: '0.1em 0.1em 0.1em 0.1em', color: '#55acee'}} href="https://twitter.com/raineroviir"><i className="fa fa-twitter 1"></i></a>
          <a style={{padding: '0.1em 0.1em 0.1em 0.1em', color: 'red'}}><i className="fa fa-envelope-o 1"></i></a>
         </div>
        <button onClick={this.prevSwipe.bind(this)}>Prev</button>
        <button onClick={this.nextSwipe.bind(this)}>Next</button>
      </div>
    )
  }
}

export default ImageSwipeView
