import React from "react";
import { connect } from "react-redux";
import { buttons, spaces } from "./buttons";
import { dataEntry } from "./actions";

class Calculator extends React.Component {
  render() {
    const { value, calc, dataEntry } = this.props;

    return (
      <div className="container">
        <h1>JavaScript Calculator</h1>
        <div className="calculator">
          <textarea id="calc" value={calc} />
          <textarea id="display" value={value} />
          <div className="buttons">
            {spaces.map(y => (
              <div className={y} key={y}>
                {buttons.map(
                  x =>
                    x.space === y ? (
                      <button
                        id={x.id}
                        key={x.id}
                        onClick={() => dataEntry(x.value, x.type)}
                      >
                        {x.name}
                      </button>
                    ) : null
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value,
  calc: state.calc
});

const mapDispatchToProps = dispatch => ({
  dataEntry: (value, type) => dispatch(dataEntry(value, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);
