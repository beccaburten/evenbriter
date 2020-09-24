// import React from "react";
// import {Link} from 'react-router-dom';

// //requires access to user's input email

// class SignupForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { user: { email: '', fname: '', lname: '', password: '' }, errors: {}};
//         this.handleClick = this.handleClick.bind(this);
//         this.handleBlur = this.handleBlur.bind(this);
//         // this.confirmEmail = this.confirmEmail.bind(this);
//     }

//     handleClick(e) {
//         // let errors = this.requiredFields(); 
//         // if (errors.length < 1) {
//             this.props.signup(this.state.user);
//             const { history } = this.props;
//             history.push('/');
//         //  }
//     }

//     confirmEmail() {
//         if (this.state.user.email.length < 2) return null;
//         if (this.state.user.email !== this.props.email) {
//             return `Email address doesn't match. Please try again`;
//         } else {
//             return ``;
//         }
//     }

//     validPW() {
//         if (this.state.user.password.length < 8) {
//             return `Your password must be at least 8 characters`;
//         } else {
//             return null
//         }
//     }

//     update(field){
//         return (e) => {
//             let newUser = Object.assign({}, this.state.user);
//             newUser[field] = e.target.value;
//             this.setState({user: newUser})
//         }
//     }

//     handleBlur(field){
//         // debugger;
//         return (e) => {
//             // debugger;
//             let newState = Object.assign({}, this.state.errors);
//             let newField;
//             if (field === 'fname') {
//                 newField = 'First name'
//             }
//             if (this.state.user[field] === '') {
//                 newState[field] = `${newField} is required`
//                 this.setState({errors: newState})
//             } else if (this.state.errors[field]) {
//                 newState[field] = ''
//                 this.setState({ errors: newState })
//             }
//         }
//     }

//     render() {
//         return (
//             <div>
//             <img className='logo' src={window.eventechURL} />
//             <div className='session'>
//                 <img className='user-icon' src={window.userIconURL} />
//                 <h1 className='form-header'>Welcome</h1>
//                 <h3>Create an account.</h3>
//                 <form className='session-form'>
//                     <div id="floatLabel" className="float-label">
//                         <label htmlFor="floatEmail">Email address</label>
//                         <input id="floatEmail"
//                             type="text"
//                             value={this.props.email}
//                             readOnly />
//                     </div>
//                     <div id="floatLabel" className="float-label">
//                         <label htmlFor="origEmail">Confirm email</label>
//                         <input id="origEmail"
//                             type="text"
//                                 value={this.state.user.email}
//                             onChange={this.update('email')} />  
//                     </div>
//                     <p className="errors">{this.confirmEmail()}</p>
//                     <div className="name">
//                         <div>
//                             <div className="float-name">
//                                 <label htmlFor="floatFName">First Name</label>
//                                     <input id="floatFName"
//                                     type="text"
//                                         value={this.state.user.fname}
//                                     onChange={this.update('fname')} 
//                                     onBlur={this.handleBlur('fname').bind(this)}/>
//                             </div>
//                         </div>
//                         <p className="errors">{this.state.errors['fname']}</p>
//                         <div>
//                             <div className="float-name">
//                                 <label htmlFor="floatLName">Last Name</label>
//                                     <input id="floatLName"
//                                     type="text"
//                                         value={this.state.user.lname}
//                                     onChange={this.update('lname')} 
//                                     onBlur={this.handleBlur('Last name')}/>
//                             </div>
//                         </div>
//                     </div>
//                     <div id="floatLabel" className="float-label">
//                         <label htmlFor="floatPW">Password</label>
//                         <input id="floatPW"
//                             type="password"
//                                 value={this.state.user.password}
//                             onChange={this.update('password')} 
//                             onBlur={this.handleBlur('Password')}/>
//                     </div>
//                     <p className="errors">{this.validPW()}</p>
//                     <button onClick={this.handleClick}>Sign Up</button>
//                     <button id="login-redirect" onClick={this.props.changeForm}>Log In Instead</button>
//                 </form>
//             </div>
//             </div>
//         )
//     }
// }

// export default SignupForm;


// //render method, requiredFields version:
// // requiredFields() {
//     // let requiredFields = {};
//     // if (this.state.fname === '') { requiredFields['fname'] = ['First name is required.'] }
//     // if (this.state.lname === '') { requiredFields['lname'] = ['Last name is required.'] }
//     // if (this.state.password === '') { requiredFields['pw'] = ['Password is required.'] }
//     // return requiredFields;
// // }
// // render() {
// //     let missingField = this.requiredFields();
// //     return (
// //         <div>
// //             <img className='logo' src={window.eventechURL} />
// //             <div className='session'>
// //                 <img className='user-icon' src={window.userIconURL} />
// //                 <h1 className='form-header'>Welcome</h1>
// //                 <h3>Create an account.</h3>
// //                 <form className='session-form'>
// //                     <div id="floatLabel" className="float-label">
// //                         <label htmlFor="floatEmail">Email address</label>
// //                         <input id="floatEmail"
// //                             type="text"
// //                             value={this.props.email}
// //                             readOnly />
// //                     </div>
// //                     <div id="floatLabel" className="float-label">
// //                         <label htmlFor="origEmail">Confirm email</label>
// //                         <input id="origEmail"
// //                             type="text"
// //                             value={this.state.email}
// //                             onChange={this.update('email')} />
// //                     </div>
// //                     <p className="errors">{this.confirmEmail()}</p>
// //                     <div className="name">
// //                         <div>
// //                             <div className="float-name">
// //                                 <label htmlFor="floatFName">First Name</label>
// //                                 <input id="floatFName"
// //                                     type="text"
// //                                     value={this.state.fname}
// //                                     onChange={this.update('fname')} />
// //                             </div>
// //                             <p className="errors">{missingField['fname']}</p>
// //                         </div>
// //                         <div>
// //                             <div className="float-name">
// //                                 <label htmlFor="floatLName">Last Name</label>
// //                                 <input id="floatLName"
// //                                     type="text"
// //                                     value={this.state.lname}
// //                                     onChange={this.update('lname')} />
// //                             </div>
// //                             <p className="errors">{missingField['lname']}</p>
// //                         </div>
// //                     </div>
// //                     <div id="floatLabel" className="float-label">
// //                         <label htmlFor="floatPW">Password</label>
// //                         <input id="floatPW"
// //                             type="password"
// //                             value={this.state.password}
// //                             onChange={this.update('password')} />
// //                     </div>
// //                     <p className="errors">{missingField['pw']}</p>
// //                     <p className="errors">{this.validPW()}</p>
// //                     <button onClick={this.handleClick}>Sign Up</button>
// //                     <Link className="login-redirect" to='/signin'>Log In Instead</Link>
// //                 </form>
// //             </div>
// //         </div>
// //     )
// // }