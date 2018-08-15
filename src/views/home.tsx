import * as React from 'react'
import {AddressBar} from './chunks/address-bar'
import { Dispatch } from 'redux'
import {connect} from 'react-redux'
import {fetchData} from '../commands/home'
import { AppStateInterface } from '../../interfaces/AppStateInterface'
import { MainAppInterface } from '../../interfaces/MainAppInterface'
import { Link } from 'react-router-dom';


interface DispatchProps {
  changeVersion: (value: number) => void
  fetchData: () => void
}

type Props = DispatchProps & AppStateInterface

class LandingPageComponent<T> extends React.Component <Props, {}> {
  changeVersion: any
  
  constructor(props: Props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchData()
  }
  render() {
    return (
      <div>
        <AddressBar title="Home" showBack={false}/>
        <div className="content-wrapper">
          <div className="home-text-bold">Welcome!</div>
          <div className="home-text">App Title: {this.props.response ? this.props.response.appName : ''}</div>
          <div className="home-text">App Author: {this.props.response ? this.props.response.author : ''}</div>
          <Link className="navigation-button" to={'/away'}>Go Away!</Link>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state: MainAppInterface, ownProps: {}): AppStateInterface => {
 return {
   appVersion: state.home.appVersion,
   response: state.home.response
 }
}


const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeVersion: (value: number) =>
    dispatch({type: 'CHANGE_VERSION', payload: value}),
  fetchData: () =>
    fetchData(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageComponent)