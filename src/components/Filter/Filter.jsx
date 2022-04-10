import { useSelector, useDispatch } from 'react-redux';
import { Form, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getFilter } from '../../redux/phonebook/phonebookSelectors';
import { changeFilter } from '../../redux/phonebook/phonebookActions';
import { getContacts } from '../../redux/phonebook/phonebookSelectors';
import { SecondaryTitle } from '../App/App.styled';

const Filter = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = event => dispatch(changeFilter(event.target.value));
  const onBlurHandler = () => dispatch(changeFilter(''));

  if (contacts.length === 0) {
    return <h2 style={{ display: 'none' }}>Search</h2>;
  } else {
    return (
      <Container>
        <Form>
          <Form.Group>
            <SecondaryTitle>Find a contact by name </SecondaryTitle>
            <Form.Control
              type="text"
              value={value}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
          </Form.Group>
        </Form>
      </Container>
    );
  }
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
