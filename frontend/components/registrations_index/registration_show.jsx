import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '../../util/format_util';
import {unregisterUser} from '../../actions/reg_actions';

class RegistrationShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleUnregister = this.handleUnregister.bind(this);
    }


    goBack() {
        this.props.history.goBack();
    }

    handleUnregister(e) {
        e.preventDefault();
        debugger;
        const { regId } = this.props;
        this.props.unregisterUser(regId);
        window.alert('You have successfully unregistered from this event. If you would like to re-register, simply follow the link to the event page.')
    }

    render() {
        debugger;
        const { registration, user} = this.props;

        if (!registration) return null;

        return (
            <div className="ticket-show-container">
                <div className="ticket-show-intro">
                    <Link to={`/u/${user.id}`} className="back-to-reg-idx">← Back to Current Orders</Link>
                    <div className="order-for">Order for <Link to={`/events/${registration.id}`} id="ticket-title-link">{registration.title}</Link></div>
                    <p id="free">Free Order #{registration.id}</p>
                    <div className="event-info-flex">
                        <p id="ev-i-dark">Event information: </p> 
                        <p>{formatDate(registration.date)} from {formatTime(registration.start_time)} to {formatTime(registration.end_time)}</p>
                    </div>
                </div>
                <div className="ticket-show-info">
                    <button onClick={this.handleUnregister} className="cancel-order">Cancel Order</button>            
                    <div className="ticket-stub">
                        <p className="GA">General Admission</p>
                        <p className="contact-info">Contact Information</p>
                        <div className="field-flex">
                            <p className="fields">First Name </p>
                            <p id="ast"> *</p>
                        </div>   
                            <p className="inputs">{user.fname}</p>
                        <div className="field-flex">
                            <p className="fields">Last Name </p>
                            <p id="ast"> *</p>
                        </div>
                            <p className="inputs">{user.lname}</p>
                        <div className="field-flex">
                            <p className="fields">Email </p>
                            <p id="ast"> *</p>
                        </div>
                            <p className="inputs">{user.email}</p>
                        <p className="fields">Delivery Method</p>
                            <p className="inputs">eTicket</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    const currentUserId = ownProps.match.params.user_id;
    const regId = ownProps.match.params.regId;
    debugger;
    return ({
        user: state.entities.users, currentUserId,
        registration: state.entities.events[regId], regId
    })
}

const mDTP = (dispatch) => {
    return ({
        unregisterUser: (regId) => dispatch(unregisterUser(regId))
    })
}

export default connect(mSTP, mDTP)(RegistrationShow);