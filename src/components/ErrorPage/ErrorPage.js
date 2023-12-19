import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import './ErrorPage.scss'

function ErrorPage() {
    const error = useRouteError()
    const {status, statusText, data} = error
  return (
    <div className='errorPage' >
        <h1>Oops !</h1>
        <i>{status} : {statusText} </i>
        <div>{data}</div>
        <Link to={'/'} className='goBack' > Go Back Home</Link>
    </div>
  )
}

export default ErrorPage
