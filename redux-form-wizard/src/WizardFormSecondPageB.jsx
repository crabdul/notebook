import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false;

const WizardFormSecondPageB = (props) => {
    const { handleSubmit, previousPage } = props;

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.nextPageFork = this.nextPageFork.bind(this);
        this.state = {
            page: 1,
            goToPageA: ''
        };
    }
    nextPage(end) {
        this.setState({ page: this.state.page + 1 });
        if (this.state.page === 4 ) {
            handleSubmit()
        }
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }
    
    return (
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPageFork} />}
        {page === 2 && (
            <WizardFormSecondPageA
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
            />
        )
        {page === 3 && (
            <WizardFormThirdPage
                previousPage={this.previousPage}
                onSubmit={onSubmit}
            />
        )}
    );
};

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormSecondPageB);
