# Contact Book

Write an application to store your phonebook contacts.

## Step 1.

The application should consist of a form and a list of contacts. In the current
step, implement adding a contact name and displaying a list of contacts. The
application should not save contacts between different sessions (page refresh).

Use this input markup with built-in validation for the contact name.

```jsx
<input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
  required
/>
```

The state held in the parent component `<App>` must necessarily be The following
form, you can not add new properties.

```js
state = {
  contacts: [],
  name: '',
};
```

Each contact must be an object with properties `name` and `id`. To generate
identifiers, use any suitable package, e.g. `nanoid`.

## Step 2.

Expand the functionality of the app by allowing users to add phone numbers. To
do this, add `<input type="tel">` to the form, and a property to store its value
in the state.

```js
state = {
  contacts: [],
  name: '',
  number: '',
};
```

Use this markup of an instance with built-in validation for the contact number.

```jsx
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
```

## Step 3.

Add a search field that you can use to filter your contact list by name.

The search field is a formless input whose value is written to the state
(controlled item). The filtering logic should be case insensitive.

```js
state = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};
```

## Step 4.

If your application is implemented in a single component `<App>`, perform
refactoring by separating the appropriate parts into separate components. In the
state of the root component `<App>` will leave only the contacts and filter
properties.

```js
state = {
  contacts: [],
  filter: '',
};
```

Four components are enough: `add contact form`, `contact list`,
`contact list item`, and `search filter`.

After the refactoring, the root component of the application will look like
this.

```jsx
<div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
```

## Step 5.

Deny the user the ability to add contacts whose names are already in the
phonebook. If you try to do so, print `alert` with a warning.

## Step 6.

Extend the functionality of the app by allowing the user to delete previously
saved contacts.
