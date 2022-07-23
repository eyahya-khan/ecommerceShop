import React from 'react'

function ReviewInfo({info}) {
  return (
    <>
    <h1>Review Information</h1>
    <div>Full name: {info.FirstName} {info.LastName}</div>
    <div>Gender: {info.Gender}</div>
    <div>Address: {info.Address}</div>
    <div>Postal code: {info.PostalCode}</div>
    <div>City: {info.City}</div>
    <div>Country: {info.Country}</div>
    <div>Email: {info.Email}</div>
    <div>Phone number: {info.PhoneNumber}</div>
    <div>Payment method: {info.PaymentMethod}</div>
    </>
  )
}

export default ReviewInfo
