import React from "react";
import "./Content.css";

function Content() {
    return (
        <div className="app-container">
        <div className="card-container">
            <div className="card-row">
                <div className="col-md-3 box1">
                    <div className="card-body">
                          <p className="card-title text-muted text-uppercase text-center h5content">Free</p>
                          <h6 className="text-center"><span className="amount1">$0</span>/month</h6>
                       <hr /> 
                    <ul type="none">
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Single User</li> 
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;5GB Storage</li> 
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Unlimited Public Projects</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Community Access</li>
                        <li className="text-muted"><i className="fa-solid fa-xmark"></i>&nbsp;&nbsp;Unlimited Private Projects</li>
                        <li className="text-muted"><i className="fa-solid fa-xmark"></i>&nbsp;&nbsp;Dedicated Phone Support</li>
                        <li className="text-muted"><i className="fa-solid fa-xmark"></i>&nbsp;&nbsp;Free Subdomain</li>
                        <li className="text-muted"><i className="fa-solid fa-xmark"></i>&nbsp;&nbsp;Monthly Status Report</li>
                    </ul>
                    <div className="text-center d-grid">
                        <button className="btn btn-primary btn-block">Button</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 box2">
                <div className="card-body2">
                <p className="card-title text-muted text-uppercase text-center h5content">plus</p>
                    <h6 className="text-center"><span className="amount1">$9</span>/month</h6>
                    <hr />
                    <ul type="none">
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;<strong>5 Users</strong></li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;50GB Storage</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Unlimited Public Projects</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Community Access</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Unlimited Private Projects</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Dedicated Phone Support</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Free Subdomain</li>
                        <li className="text-muted"><i className="fa-solid fa-xmark"></i>&nbsp;&nbsp;Monthly Status Report</li>
                    </ul>
                    <div className="text-center d-grid">
                        <button className="btn btn-primary btn-block">Button</button>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 box3">
                <div className="card-body3">
                <p className="card-title text-muted text-uppercase text-center">Pro</p>
                    <h6 className="text-center"><span className="amount1">$49</span>/month</h6>
                    <hr />
                    <ul type="none">
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;<strong>Unlimited Users</strong></li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;150GB Storage</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Unlimited Public Projects</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Community Access</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Unlimited Private Projects</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Dedicated Phone Support</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;<strong>Unlimited</strong> Free Subdomain</li>
                        <li><i className="fa-solid fa-check"></i>&nbsp;&nbsp;Monthly Status Report</li>
                    </ul>
                    <div className="text-center d-grid">
                        <button className="btn btn-primary btn-block">Button</button>
                    </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
}

export default Content;