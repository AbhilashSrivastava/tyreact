import * as React from 'react'
import {AddressBar} from './chunks/address-bar'
import { Dispatch, bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { MainAppInterface } from '../../interfaces/MainAppInterface'
import { AwayStateInterface } from '../../interfaces/AwayStateInterface';


interface DispatchProps {}

type Props = DispatchProps & AwayStateInterface

class AwayPageComponent<T> extends React.Component <Props, {}> {
  changeVersion: any
  
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <div>
        <AddressBar title="Away" showBack={true}/>
        <div className="content-wrapper">
          <div className="home-text-bold">Welcome!</div>
          <div className="home-text">This is Away page!</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state: MainAppInterface, ownProps: {}): AwayStateInterface => {
 return {}
}


const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AwayPageComponent)