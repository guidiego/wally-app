import React, { PropTypes } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { counter } from 'isolate-redux-env';
import { connect } from 'react-redux';

export const CounterComponent = ({ value, increase, decrease }) => (
  <div className="text-center">
    <h2>{value}</h2>
    <ButtonGroup>
        <Button bsStyle="success" onClick={increase}> Increase </Button>
        <Button bsStyle="danger" onClick={decrease}> Decrease </Button>
    </ButtonGroup>
  </div>
);

export const mapStateToProps = state => ({
  value: state.get('counter'),
});

export const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(counter.actions.increase),
  decrease: () => dispatch(counter.actions.decrease),
});

CounterComponent.propTypes = {
    value: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
