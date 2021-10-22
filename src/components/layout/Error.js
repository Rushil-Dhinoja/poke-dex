import React from "react";
import { withRouter } from "react-router-dom";
import errorimg from "../../img/Error.png";
import { connect } from "react-redux";

const Error = ({ history, error: { msg } }) => {
  return (
    <div>
      <div className="error">
        <div className="error-container">
          <img src={errorimg} alt="" className="error-container__img" />
          {msg.search("404") !== -1 ? (
            <div className="error-container__msg">
              <h1>404: Not Found </h1>
              <p>Sorry, the pokemon you searched for is yet to be discovered</p>
              <button onClick={() => history.push("/pokemons")}>
                Discover Others
              </button>
            </div>
          ) : (
            <div className="error-container__msg">
              <h1>500</h1>
              <p>Internal server error. Try again later</p>
              <button onClick={() => history.push("/pokemons")}>
                Discover Others
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.pokemon.error,
});

export default connect(mapStateToProps, {})(withRouter(Error));
