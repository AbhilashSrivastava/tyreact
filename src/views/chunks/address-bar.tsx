import {AddressBarInterface} from '../../../interfaces/AddressBarInterface'
import * as React from "react"
import {Route, NavLink } from 'react-router-dom'

// Toolbar Component
export class AddressBar extends React.Component<AddressBarInterface, {}> {
  constructor(props: AddressBarInterface) {
    super(props)
  }
  render() {
    console.log(this.props.showBack)
    const back = (goBack: any) => this.props.showBack ? <a className="address-bar-back" onClick={goBack}>◀︎</a> : ''
    return (
      <div>
        <Route render={({ location: { pathname }, history: { goBack, goForward } }) => (
          <div className='address-bar'>
              {back(goBack)}
              <div className='url'>{this.props.title}</div>
          </div>
        )}/>
      </div>
    )
  }
}