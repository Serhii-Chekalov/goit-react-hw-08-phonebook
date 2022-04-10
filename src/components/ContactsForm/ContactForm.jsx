import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import * as phonebookOperation from '../../redux/phonebook/phonebookOperations';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/phonebook/phonebookSelectors';
import toast, { Toaster } from 'react-hot-toast';
import { SecondaryTitle } from '../App/App.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = (name, number) =>
    dispatch(phonebookOperation.addContactAction({ name, number }));

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const checkName = name => {
    return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    const notification = () => {
      toast(`${name} is already in contacts`, {
        style: {
          borderRadius: '10px',
          background: '#0d6efd',
          color: '#fff',
          duration: 2000,
        },
      });
    };

    if (checkName(name)) {
      notification();
    } else {
      onSubmit(name, number);
      setName('');
      setNumber('');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <SecondaryTitle>Add new contact</SecondaryTitle>

          <Form.Label>Name</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}
                onChange={handleChange}
                placeholed="Введите имя"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={number}
                onChange={handleChange}
                placeholed="Введите телефон"
              />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Button type="submit">Add to contact list</Button>
          </Col>
        </Row>
      </Form>
      <Toaster />
    </Container>
  );
}

export default ContactForm;
