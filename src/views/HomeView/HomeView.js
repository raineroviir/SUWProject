import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../../redux/modules/counter'
import classes from './HomeView.scss'
import ReactSwipe from 'react-swipe'
import Splash from '../../static/splash.jpg'
// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomeView extends React.Component {
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
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-5'>
          <h1>LiveVilla</h1>
          </div>
        </div>
        <Link to='/myhome'><img src={Splash} alt='Sign In' /></Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
// <container className='splash' style={{backgroundImage: `url(http://i.imgur.com/PWFSbvp.jpg)` }}>
// </container>
