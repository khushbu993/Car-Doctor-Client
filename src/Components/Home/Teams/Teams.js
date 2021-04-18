import React from 'react';
import './Teams.css';
import team1 from '../../images/team-1.jpg';
import team2 from '../../images/team-2.jpg';
import team3 from '../../images/team-3.jpg';
import team4 from '../../images/team-4.jpg';

const Teams = () => {
    return (
        <div className="team-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>OUR MECHANICS</h2>
                    </div>
                    <div className="col-md-3">
                        <div className="team-info">
                            <div className="team-img">
                                <img src={team1} alt="" />
                            </div>
                            <div className="team-text">
                                <h6>CHRISTOPHER HOWARD</h6>
                                <p>BODY PAINTER</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="team-info">
                            <div className="team-img">
                                <img src={team2} alt="" />
                            </div>
                            <div className="team-text">
                                <h6>TYLER BISHOP</h6>
                                <p>BODY PAINTER</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="team-info">
                            <div className="team-img">
                                <img src={team3} alt="" />
                            </div>
                            <div className="team-text">
                                <h6>PHILIP FOWLER</h6>
                                <p>DIAGNOSTIC REPAIRER</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="team-info">
                            <div className="team-img">
                                <img src={team4} alt="" />
                            </div>
                            <div className="team-text">
                                <h6>CHRISTIAN FIELDS</h6>
                                <p>ELECTRIC REPAIRER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;