import React from "react";
import { Bot } from "../Main/Main";

interface UpdateBotProp {
  elementId: number;
  singledata: Bot;
  getList: (event: any, id: number) => void;
  updateList: (event: any, id: number) => void;
  handleChange: (event: any) => void;
}

const UpdateBot = (props: UpdateBotProp) => {
  const modalIdentifier = "update" + props.elementId;
  const dataTarget = "#" + modalIdentifier;
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target={dataTarget}
        onClick={(e) => props.getList(e, props.elementId)}
      >
        Update
      </button>
      <div
        className="modal fade"
        id={modalIdentifier}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                Update List
              </span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="name"
                name="name"
                value={props.singledata?.name}
                onChange={props.handleChange}
              ></input>
              <br></br>

              <input
                type="text"
                placeholder="purpose"
                name="purpose"
                value={props.singledata?.purpose}
                onChange={props.handleChange}
              ></input>

              <br></br>

              <input
                type="text"
                placeholder="avatar"
                name="avatar"
                value={props.singledata?.avatar}
                onChange={props.handleChange}
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={(event) => props.updateList(event, props.elementId)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateBot;
