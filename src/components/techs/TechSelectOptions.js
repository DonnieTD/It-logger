import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  // TEST 2: "Add Log Modal Select a Technician"
  // 1.2. Complete the `TechSelectOptions` component to list all the technicians in a dropdown list.
  // First get the technicians, check if the endpoint has finished loading.
  // Then map the technicians from state to create the options list with `firstName` and `lastName` values.
  React.useEffect(() => {
    getTechs();
  }, []);

  if (loading) return <>Loading</>;

  return techs.map((x) => {
    return (
      <option value={`${x?.firstName} ${x?.lastName}`}>
        {x?.firstName} {x?.lastName}
      </option>
    );
  });
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
