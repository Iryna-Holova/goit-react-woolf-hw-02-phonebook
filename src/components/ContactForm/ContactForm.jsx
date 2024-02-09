import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FiUser, FiPhone } from 'react-icons/fi';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.nameInput = React.createRef();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({ ...this.state })
      ? this.nameInput.current.focus()
      : this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.field}>
          <IconContext.Provider
            value={{ size: '16px', className: css.field_icon }}
          >
            <FiUser />
          </IconContext.Provider>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            id="name"
            onChange={this.handleChange}
            ref={this.nameInput}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.label} for="name">
            Name
          </label>
        </div>
        <div className={css.field}>
          <IconContext.Provider
            value={{ size: '16px', className: css.field_icon }}
          >
            <FiPhone />
          </IconContext.Provider>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            id="number"
            onChange={this.handleChange}
            placeholder="Number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <label className={css.label} for="number">
            Number
          </label>
        </div>

        <button className={css.add_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
