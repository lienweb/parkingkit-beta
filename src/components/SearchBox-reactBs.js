import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../stylesheets/stylesheet.css'

// fail on interaction ?

export default function SearchBox() {
  return (
    <Form.Group className='d-flex'>
      <Form.Control />
      <Button type="submit">Search</Button>
    </Form.Group>
  )
}
