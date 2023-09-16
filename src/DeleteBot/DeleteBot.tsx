import React from "react";
import { Bot } from "../Main/Main";

interface DeleteBotProp {
  elementId: number;
  singledata: Bot;
  getList: (event: any, id: number) => void;
  deleteList: (event: any, id: number) => void;
}

const DeleteBot = (props: DeleteBotProp) => {
  const modalIdentifier = "delete" + props.elementId;
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
        Delete
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
                Delete List
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
                disabled={true}
              ></input>
              <br></br>

              <input
                type="text"
                placeholder="purpose"
                name="purpose"
                value={props.singledata?.purpose}
                disabled={true}
              ></input>

              <br></br>

              <input
                type="text"
                placeholder="avatar"
                name="avatar"
                value={props.singledata?.avatar}
                disabled={true}
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
                onClick={(event) => props.deleteList(event, props.elementId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DeleteBot;
