import React from 'react'
import {H3,H5} from '../Shared/style'
import styled from 'styled-components'

const FooterSection = styled.div`
padding-top:100px;
 .row{
     text-align:center;
 }
`

export default function Footer() {
    return (
        <div>
            <FooterSection>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <H3>Solutions</H3>
                            <H5>Features</H5>
                            <H5>Enterprise Offer</H5>
                            <H5>Partner With Us</H5>
                        </div>
                        <div className="col-md-4">
                        <H3>Company</H3>
                        <H5>About Us</H5>
                        <H5>Contact Us</H5>
                        <H5>Jobs</H5>
                        </div>
                        <div className="col-md-4">
                        <H3>Resources</H3>
                        <H5>Blog</H5>
                        <H5>Facebook</H5>
                        <H5>Twitter</H5>
                        </div>
                    </div>
                </div>
            </FooterSection>
        </div>
    )
}
