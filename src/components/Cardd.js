import React from 'react'
import Card from 'react-bootstrap/Card';

function Cardd({user}) {
  return (
    <div className='cardd'>
        <Card className='chimo'>
        
        <Card.Title >{user.name} </Card.Title>
        <Card.Title>{user.username} </Card.Title>
          <Card.Body>
            <Card.Text> {user.email}</Card.Text>
            <Card.Text>{user.address.street+" "+user.address.suite}</Card.Text>
            <Card.Text>{user.address.city+" "+user.address.zipcode}</Card.Text>
            <Card.Text>{user.address.geo.lat+" "+user.address.geo.lng}</Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Cardd