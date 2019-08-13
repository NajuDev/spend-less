import { connect } from 'react-redux';

import { SpendLess } from './spendLess.component';
import { feedbackAction } from './../../store/actions/feeback.actions';

const mapStateToProps = (state) => (
    {
        exenditure: state.monthlySpending,
        feedback: state.appState.feedback
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        handleFeedback: (value) => dispatch(feedbackAction(value))
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpendLess);