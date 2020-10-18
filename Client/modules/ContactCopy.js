import React from "react";
import styled from "styled-components";
import { ButtonAscent, H5 } from "../Shared/style";

const CopyContacts = styled.div`
  padding-top: 50px;
  textarea {
    width: 50%;
  }
  H5 {
    padding-left: 10px;
  }
`;
export default function ContactCopy() {
  return (
    <div>
      <CopyContacts>
        <div className="container">
          <div className="row">
            <H5>Copy and paste in below box</H5>
          </div>
          <form action="" method="post">
            <div className="form-group">
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <ButtonAscent>Save</ButtonAscent>
          </form>
        </div>
      </CopyContacts>
    </div>
  );
}
