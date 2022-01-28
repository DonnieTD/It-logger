import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { addTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const techs = useSelector((state) => state.tech.techs);

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      // TEST 1: "Create a new Technician"
      // 4. Use the `addTech` redux action provided to save the new technician to the db.json "database".
      const tech = {
        id: techs.lenght,
        firstName,
        lastName,
      };

      addTech(tech);
      M.toast({ html: `${firstName} ${lastName} was added as a tech` });

      // TEST: "Create a new Technician"
      // 5. Clear input fields after save
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>

        {/* 
        TEST 1: "Create a new Technician" 
        1. Add inputs for First Name and Last Name.
        2. onChange store the `firstName` and `lastName` inputs in state.
        3. onSubmit the technician must be saved to the database.
        */}
        <div className="row">
          <div class="input-field col s6">
            <input
              placeholder="Placeholder"
              id="first_name"
              type="text"
              class="validate"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input
              placeholder="Placeholder"
              id="first_name"
              type="text"
              class="validate"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label for="first_name">Last Name</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
