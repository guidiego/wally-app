import React, { PropTypes } from 'react';
import { List } from 'immutable';
import { Table, Button } from 'react-bootstrap';
import { apiexample } from 'isolate-redux-env';
import { connect } from 'react-redux';

export const UserTr = ({id, name, year}) => (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{year}</td>
    </tr>
)

export const UsersComponent = ({ users, fetching }) => (
  <div className="text-center">
    <Button onClick={fetching} > Fetching List </Button>
    <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
            {users.map(u => <UserTr key={u.id} {...u} />)}
        </tbody>
    </Table>
  </div>
);

export const mapStateToProps = state => ({
  users: state.getIn(['apiexample', 'users']),
});

export const mapDispatchToProps = dispatch => ({
  fetching: () => dispatch(apiexample.actions.getAllUsers)
});

UsersComponent.propTypes = {
    users: PropTypes.instanceOf(List).isRequired,
    fetching: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);
