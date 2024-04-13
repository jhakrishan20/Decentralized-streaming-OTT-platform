import React from 'react'
import ShowPlan from "./ShowPlan"
import "../css/manageProfile.css";

const ManageProfile = () => {
    return (
        <div>
            <h1>Welcome to your Profile</h1>
            <div>
                <p>Your Plan</p>
                <ShowPlan ></ShowPlan>
            </div>

            <div>
                <p>Manage your plan</p>
            </div>

            <div>
                <p>Edit Profile</p>
            </div>

            <div>
                <p>Payment History</p>
            </div>

            <div>
                <p>Log Out</p>
            </div>

        </div>
    )
}

export default ManageProfile