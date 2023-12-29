import React from 'react'

const Alert = ({message}) => {
  return (
    <div className={message.toLowerCase().includes('error')?"alert-error" : "alert-success"}>
          <span>{message}</span>
          <i className="fa fa-close close-alert"></i>
    </div>
  )
}

export default Alert
