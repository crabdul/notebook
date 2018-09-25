import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wizardSelector from './wizardSelector';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPageA from './WizardFormSecondPageA';
import WizardFormSecondPageB from './WizardFormSecondPageB';
import WizardFormThirdPage from './WizardFormThirdPage';

class WizardForm extends Component {
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
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    nextPageFork() {
        console.log('next: ', this.props.nextPageFork);
        console.log('props:', this.props);
        this.setState({
            goToPageA: this.props.nextPageFork === 'pageA'
        })
        this.nextPage();
    }

    render() {
        const { onSubmit } = this.props;
        const { page, goToPageA } = this.state;
        return (
            <div>
                {page === 1 && <WizardFormFirstPage onSubmit={this.nextPageFork} />}
                {page === 2 && (goToPageA ? (
                    <WizardFormSecondPageA
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                ) : (
                    <WizardFormSecondPageB
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                ))}
                {page === 3 && (
                    <WizardFormThirdPage
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                    />
                )}
            </div>
        );
    }
}

WizardForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

WizardForm = connect(
    (state) => ({
        nextPageFork: wizardSelector(state, 'page'),
        firstName: wizardSelector(state, 'firstName')
    })
)(WizardForm)

export default WizardForm;
