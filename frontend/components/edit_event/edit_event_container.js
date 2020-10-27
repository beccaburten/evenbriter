import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateEvent, fetchEvent } from '../../actions/event_actions';
import EditFormNav from './edit_form_nav';

const mSTP = (state, ownProps) => { 
    debugger;
    const eventId = ownProps.match.params.event_id; 
    return ({ event: state.entities.events[eventId], eventId})
}

const mDTP = dispatch => {
    return ({
        updateEvent: (event) => dispatch(updateEvent(event)),
        fetchEvent: (eventId) => dispatch(fetchEvent(eventId)),
    })
}

export default withRouter(connect(mSTP, mDTP)(EditFormNav));