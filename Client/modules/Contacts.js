import React from "react";
import { H4, H5 } from "../Shared/style";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Textarea = styled.textarea`
  width: 50%;
  margin: 0 auto;
`;

const Options = styled.div`
  border: 1px solid ${(props) => props.theme.$mainBlue};
  padding: 25px 10px;
  min-height: 150px;
  position: relative;
  text-align: center;
`;
const ImportOptions = styled.div`
  padding-top: 30px;

  H4 {
    text-align: center;
  }
  H5 {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: #000000;
  }
  i {
    color: ${(props) => props.theme.$buttonBlue};
  }
`;

export default function Contacts() {
  return (
    <div>
      <ImportOptions>
        <div className="container">
          <H4>Select the options to import your contacts</H4>
          <div className="row">
            <div className="col-md-6">
              <Link to="/users/import-option-upload">
                {" "}
                <Options>
                  <i className="fas fa-upload fa-4x"></i>
                  <H5>Upload a file</H5>
                </Options>{" "}
              </Link>
            </div>
            <div className="col-md-6">
              <Link to="/users/import-option-copy">
                {" "}
                <Options>
                  <i className="fas fa-copy fa-4x"></i>

                  <H5>Copy Paste Contacts</H5>
                </Options>{" "}
              </Link>
            </div>
          </div>
        </div>
      </ImportOptions>
    </div>
  );
}
