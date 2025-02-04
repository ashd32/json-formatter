import React, { Fragment } from "react";
import PropTypes from "prop-types";

import SingleItem from "./SingleItem";
import pluginPropType from "./pluginType";

function Listing({ list, onClick }) {
  return (
    <Fragment>
      {list.map(pluginItem => (
        <SingleItem
          key={pluginItem.name}
          name={pluginItem.name}
          description={pluginItem.description}
          onClick={() => onClick(pluginItem)}
        />
      ))}
    </Fragment>
  );
}

Listing.propTypes = {
  list: PropTypes.arrayOf(pluginPropType).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Listing;
