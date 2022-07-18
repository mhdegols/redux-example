import React from "react";
import { connect } from "react-redux";
import { DECREASE, RESET, INCREASE } from "./actions";
import "./styles.css";
function Counter(props) {
  return (
    <div className="container">
      <div>
        <h1>counter</h1>
        <p className="counter">{props.count}</p>
        <div className="buttons">
          <button
            variant="contained"
            color="primary"
            type="button"
            className="btn"
            onClick={() => props.dispatch({ type: DECREASE })}
          >
            decrease
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => props.dispatch({ type: RESET })}
          >
            reset
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => props.dispatch({ type: INCREASE })}
          >
            increase
          </button>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(Counter);
