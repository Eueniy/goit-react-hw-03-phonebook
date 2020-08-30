import React from "react";
import PropTypes from "prop-types";

export default function Filter({ value, onChangeFilter }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="search"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      ></input>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
