import React from 'react'

const Alert = ({message}) => {
  return (
    <div className={message.toLowerCase().includes('error')?"alert-error animate" : "alert-success animate"}>
          <span>{message}</span>
          <i className="fa fa-close close-alert"></i>
    </div>
  )
}

export default Alert
