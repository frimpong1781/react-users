import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container, Row } from 'react-bootstrap';
import User from './User';

const Users = (props) => {
    return (
        <Container>
            <Row>
                {props.usersData.map((user) => {
                    return (
                        <User 
                          userInfo={user} 
                          key={user.id} 
                          editUser={props.editUser}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    usersData: state.usersState.users,
    firestoreData: state.firestore
})

export default compose(connect(mapStateToProps))(Users)
 
