import React from "react";
import './servies.css';

export default function servies() {
    return (

        <>

            <div className="text_container">

                <div className="heading">

                    <h1>Let Us Take Care of Your Fluffy Friend</h1>

                </div>

            </div>

            <div className="content_container">

                <h1>
                    Call Us
                </h1>
            </div>

            <div className="animal_grid_container">


                <div className="animal_image_container">

                    <img src="https://images.unsplash.com/photo-1422565096762-bdb997a56a84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="" />

                    <div className="content">
                        <span>
                            Vaccination
                        </span>
                        <span>
                            $60
                        </span>
                    </div>

                </div>

                <div className="animal_image_container">

                    <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                        alt="" />

                    <div className="content">
                        <span>
                            Checkup
                        </span>
                        <span>
                            $120
                        </span>
                    </div>

                </div>

                <div className="animal_image_container">

                    <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                        alt="" />

                    <div className="content">
                        <span>
                            Dental Care
                        </span>
                        <span>
                            $50
                        </span>
                    </div>

                </div>


                <div className="animal_image_container">

                    <img src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                        alt="" />

                    <div className="content">
                        <span>
                            Grooming
                        </span>
                        <span>
                            $60
                        </span>
                    </div>

                </div>

                <div className="animal_image_container">

                    <img src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                        alt="" />

                    <div className="content">
                        <span>
                            Behavioral Consultation
                        </span>
                        <span>
                            $120
                        </span>
                    </div>

                </div>

                <div className="animal_image_container">

                    <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDE2MCUyMHglMjAxNjAlMjBkb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                        alt="" />

                    <div className="content">
                        <span>
                            Pain Management
                        </span>
                        <span>
                            $50
                        </span>
                    </div>

                </div>



            </div>

            <div className="form_container">


                <div className="content_container">
                    <h1>For Appointment</h1>
                 </div>


                <label htmlFor="username" name="username">Your Good Name</label><br/>
                <input type="text" placeholder="Your Fullname"/><br/>

                <label htmlFor="userphonenumber" name="phonenumber">Your Phonenumber</label><br/>
                <input type="text" placeholder="Your Phone no."/><br/>

                <label htmlFor="servies" name="servies">Servies</label><br/>
                    <select name="servies" id="serives">
                        <option value="Vaccination">Vaccination</option>
                        <option value="Checkup">Check Up</option>
                        <option value="DentalCare">Dental Care</option>
                        <option value="Grooming">Grooming</option>
                        <option value="BehavioralManagement">Behavioral Management</option>
                        <option value="PainManagement">Pain Management</option>
                    </select><br/>

                <label htmlFor="appointment">Appointment Timing</label><br/>
                <input type="time"/><br/>

                <button id="button">
                    Submit
                </button>

            </div>
        </>

    );
}