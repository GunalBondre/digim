import React, { Component } from 'react'
import '../stylesheet/pricing'
import {Link} from 'react-router-dom'
import Accordia from './Accordian'
import Accordian from './Accordian'

export default class Pricing extends Component {
    render() {
        return (
            <div>
                <div className="pricing py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Upto 500 emails per day</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Contacts</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Priority Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Multy User Access</li>
   
            </ul>
            <Link to="signup" className="btn btn-block btn-primary text-uppercase">Signup</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Upto 50000 emails</strong></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>No daily sending limit</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Email support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Priority Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Multi User Access</li>

             </ul>
             <Link to="signup" className="btn btn-block btn-primary text-uppercase">Signup</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Emails</strong></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Marketing Automation</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Facebook ads</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Priority Support</li>
             <li><span className="fa-li"><i className="fas fa-check"></i></span>Multi User Access</li>
           
            </ul>
            <Link to="signup" className="btn btn-block btn-primary text-uppercase">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Accordian />
            </div>
        )
    }
}
