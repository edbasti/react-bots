import UpdateBot from "../UpdateBot/UpdateBot";
import { Bot } from "../Main/Main";

interface ListsProp {
  alldata: Bot[];
  singledata: Bot;
  getList: (event: any, id: number) => void;
  updateList: (event: any, id: number) => void;
  deleteList: (event: any, id: number) => void;
  handleChange: (event: any) => void;
}

const Lists = (props: ListsProp) => {
  let rows: any[] = [];
  props?.alldata?.forEach((element: Bot) => {
    if (element && element.id) {
      rows.push(
        <tr key={element.id}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.purpose}</td>
          <td>
            <img src={element.avatar} alt="avatar" />
          </td>
          <td>
            <UpdateBot
              elementId={element.id}
              singledata={props.singledata}
              getList={props.getList}
              updateList={props.updateList}
              handleChange={props.handleChange}
            ></UpdateBot>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={(event) => props.deleteList(event, element?.id || 0)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    }
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Purpose</th>
          <th>Avatar</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Lists;
