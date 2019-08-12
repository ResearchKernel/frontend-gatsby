import React, { Component } from 'react'
import { Button, Icon } from 'antd'

class LinkedinLogin extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    ;(function() {
      var e = document.createElement('script')
      e.type = 'text/javascript'
      e.async = true
      e.src = 'http://platform.linkedin.com/in.js?async=true'
      var t = document.getElementsByTagName('script')[0]
      t.parentNode.insertBefore(e, t)
    })()
  }

  linkedinLogin = () => {
    window.IN.init({
      api_key: '',
    })
    setTimeout(
      function() {
        this.getUserDetails()
      }.bind(this),
      1000
    )
    console.log('Loaded')
  }

  getUserDetails = () => {
    window.IN.User.authorize(function() {
      window.IN.API.Profile('me')
        .fields([
          'id',
          'firstName',
          'lastName',
          'pictureUrl',
          'publicProfileUrl',
        ])
        .result(function(result) {
          console.log(result)
          alert(
            'Successfull login from linkedin : ' +
              result.values[0].firstName +
              ' ' +
              result.values[0].lastName
          )
        })
        .error(function(err) {
          console.log('Import error - Error occured while importing data')
        })
    })
  }
  render() {
    return (
      <Button block onClick={() => this.linkedinLogin()}>
        <Icon style={{ fontSize: '25px', color: '#4E98C9' }} type="linkedin" />
      </Button>
    )
  }
}

export default LinkedinLogin
