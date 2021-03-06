import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {
  render() {
    return (
      <div className="product">
      <p>Name:{this.props.name}</p>
      <p>Producer:{this.props.producer}</p>
      <p>Water Mark:{this.props.hasWatermark}</p>
      <p>Color:{this.props.color}</p>
      <p>Weight:{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    if (props[propName] === undefined) {
      return new Error('need this shit')
    }  else if (isNaN(props[propName])) {
      return new Error('not a number')
    } else if (props[propName] < 80 || props[propName] > 300) {
      return new Error('not between 80 and 300')
    }
  }
}


export default Product;
