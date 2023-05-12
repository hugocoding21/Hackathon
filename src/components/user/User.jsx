import React, { useState, useEffect } from "react";
import "./User.css";

const User = () => {
  const [showForm, setShowForm] = useState(false);
  const [showRequest, setShowRequest] = useState(false);

  useEffect(() => {
    setShowForm(true); // Affiche la div "form" au chargement initial
  }, []);

  const handlePostClick = () => {
    setShowForm(true);
    setShowRequest(false);
  };

  const handleRequestClick = () => {
    setShowForm(false);
    setShowRequest(true);
  };

  return (
    <div className="all">
      <div className="menu">
        <div onClick={handlePostClick} className="menuBtn">Post</div>
        <div onClick={handleRequestClick} className="menuBtn">Request</div>
      </div>

      {showForm && (
        <div className="form">
          {
            <div className="form">
              <label htmlFor="Firstname">Firstname</label>
              <input className="formulaireuser" type="text" id="Firstname" />
              <label htmlFor="Lastname">Lastname</label>
              <input
                className="formulaireuser"
                type="text"
                id="Lastname"
              />{" "}
              <label htmlFor="city">City</label>
              <input className="formulaireuser" type="text" id="city" />
              <label htmlFor="desc">Description</label>
              <textarea className="formulaireuser desc" type="text" id="desc" />
              <label htmlFor="submite"></label>
              <input
                className="formulaireuserb"
                type="button"
                value="Submit"
              />{" "}
            </div>
          }
        </div>
      )}

      {showRequest && (
        <div className="request">
          {
            <div>
              <div className="titlereq">You have 2 request</div>
              <div className="actu">
                <div className="card1">
                  <div>Bob LeBricoleur</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, eius aspernatur aut quasi enim a non dolorem?
                    Assumenda, animi eos!
                  </div>
                </div>

                <div className="card2">
                  <div>Boby L'Eponge</div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, eius aspernatur aut quasi enim a non dolorem?
                    Assumenda, animi eos!
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default User;
