import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../../redux/modules/counter'
import DuckImage from './Duck.jpg'
import classes from './ImageSwipeView.scss'
import ReactSwipe from 'react-swipe'
import FramingImage from './framing.jpg'

const mapStateToProps = (state) => ({
  counter: state.counter
})
export class ImageSwipeView extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

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
          <Link to='/progress'>Go to progress</Link>
        </div>
        <ReactSwipe ref='ReactSwipe'>
          <img className={classes.duck}
             src={DuckImage}
             alt='This is a duck, because Redux' />
          <img className={classes.duck}
            src={FramingImage}
            alt='Framing lorem ipsum' />
          <div>Image not found!</div>
         </ReactSwipe>
        <button onClick={this.prevSwipe.bind(this)}>Prev</button>
        <button onClick={this.nextSwipe.bind(this)}>Next</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(ImageSwipeView)
