import React, { useState, useEffect, useMemo } from "react";
import { Bot } from "../Main/Main";

interface CreateBotProp {
  singledata: Bot;
  createList: () => void;
  handleChange: (event: any) => void;
}

const CreateBot = (props: CreateBotProp) => {
  const avatarOptions = useMemo(() => {
    return [
      "Molly",
      "Rocky",
      "Salem",
      "Ginger",
      "Casper",
      "Lucy",
      "Boots",
      "Cookie",
    ];
  }, []);

  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(avatarOptions[0]);
  }, [avatarOptions]);

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#myModal"
      >
        Create New List
      </button>
      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                New List
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
              />
              <br />
              <input
                type="text"
                placeholder="purpose"
                name="purpose"
                value={props.singledata?.purpose}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="avatar"
                name="avatar"
                value={props.singledata?.avatar}
                onChange={props.handleChange}
              />
              <br />
              {avatarOptions && (
                <select value={selected} onChange={props.handleChange}>
                  {avatarOptions?.map((x, y) => (
                    <option key={y}>{x}</option>
                  ))}
                </select>
              )}
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
                onClick={props.createList}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateBot;
