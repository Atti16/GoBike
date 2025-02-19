import React from "react";

const Newsletter = () => {
  return (
    <div className="justify-content-md-center pt-1">
      <form>
        <div className="container justify-content-md-center">
          <div className="row mb-3 text-center">
            <h4 className="col-12">Csatlakozz hírlevelünkhöz a legfrissebb hírekért és ajánlatokért</h4>
            <div className="col-4 pr-1">
              <input type="text" className="form-control" placeholder="Név" name="name" required />
            </div>
            <div className="col-4 pr-1">
              <input type="text" className="form-control" placeholder="Email cím" name="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
            </div>
            <div className="col-4 pr-1">
              <button type="submit" className="btn btn-primary btn-block" onClick={() => alert('Feliratkozás')}>
                Feliratkozás
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
