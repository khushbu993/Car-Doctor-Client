import React from 'react';
import './GetAppointment.css';

const GetAppointment = () => {
    return (
        <div className="getAppointment-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>GET APPOINTMENT</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur cumque distinctio at eligendi inventore delectus, ut modi neque quasi ex facere cupiditate impedit, ratione illum similique aliquid pariatur? Accusamus, deleniti.</p>
                    </div>
                    <div className="col-md-8">
                        <div className="getAppointment-form-container">
                            <form>
                                <div className=" form-group col-md-12">
                                    <div className="input-group d-flex">
                                        <div className="ml-3">
                                            <label htmlFor="">AppointMent Date</label>
                                            <input type="text" name="name" placeholder="Your Name" className="form-control" />
                                        </div>
                                        <div className="ml-3">
                                            <label htmlFor="">PREFERRED TIME</label>
                                            <input type="text" name="email" placeholder="Your Email" className="form-control" />
                                        </div>
                                        <div className="ml-3">
                                            <label htmlFor="">SELECT SERVICES NEEDED</label>
                                            <input type="text" name="service" placeholder="Your Service" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" form-group">
                                    <label htmlFor="" className="ml-4">CONTACT DETAILS</label>
                                    <div className="input-group  col-md-10 d-flex">
                                        <input type="text" name="name" placeholder="Your Name" className="form-control ml-3" />
                                        <input type="email" name="email" placeholder="Your Email" className="form-control ml-3" />
                                        <input type="number" name="number" placeholder="Your Phone Number" className="form-control ml-3" />
                                    </div>
                                </div>
                                <div className="submit-btn d-flex">
                                    <input type="submit" value="SUBMIT" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetAppointment;