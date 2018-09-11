import React from 'react';
import { Field, reduxform } from 'redux-form';

let ContactForm = (props) => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}></form>;
};

ContactForm = reduxform({
    form: 'contact'
})(ContactForm);

// Alternative syntax
// createReduxForm = reduxForm({ form: 'contact' })
// ContactForm = createReduxForm(ContactForm)

export default ContactForm;
