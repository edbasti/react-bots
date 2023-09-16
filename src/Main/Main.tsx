import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateBot from "../CreateBot/CreateBot";
import Lists from "../BotsList/BotsList";

export interface Bot {
  id?: number;
  name: string;
  purpose: string;
  avatar: string;
}
const Main = () => {
  const initialValues = {
    name: "",
    purpose: "",
    avatar: "",
  };
  const [loading, setLoading] = useState<boolean>(false);
  const [alldata, setAlldata] = useState<Bot[]>([initialValues]);
  const [singledata, setSingledata] = useState<Bot>(initialValues);

  const getLists = () => {
    setLoading(true);
    axios.get("http://localhost:5000/bots").then((res) => {
      setAlldata(res.data);

      const botList = localStorage.getItem("botList");
      if (!botList) {
        localStorage.setItem("botList", JSON.stringify(res.data));
      }

      setLoading(false);
    });
  };

  useEffect(() => {
    const botList = localStorage.getItem("botList");

    if (botList) {
      setAlldata(JSON.parse(botList));
    } else {
      getLists();
    }
  }, []);

  const handleChange = (event: any) => {
    let name = singledata?.name || "";
    let purpose = singledata?.purpose || "";
    let avatar =
      `https://api.dicebear.com/7.x/adventurer/svg?seed=${singledata?.avatar}` ||
      "";

    if (event.target.name === "name") {
      name = event.target.value;
    }
    if (event.target.name === "purpose") {
      purpose = event.target.value;
    }
    if (event.target.name === "avatar") {
      avatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${event.target.value}`;
    }

    setSingledata({
      name,
      purpose,
      avatar,
    });
  };

  const createList = () => {
    axios.post("http://localhost:5000/bots", singledata).then((result) => {
      setSingledata({ name: "", purpose: "", avatar: "" });
    });
  };

  const getList = (event: any, id: number) => {
    setSingledata({
      name: "Loading...",
      purpose: "Loading...",
      avatar: "Loading...",
    });

    axios.get("http://localhost:5000/bots/" + id).then((result) => {
      setSingledata({
        name: result.data.name || "",
        purpose: result.data.purpose || "",
        avatar: result.data.avatar || "",
      });
    });
  };

  const updateList = (event: any, id: number) => {
    axios.put("http://localhost:5000/bots/" + id, singledata).then((result) => {
      setSingledata(initialValues);
      getLists();
    });
  };

  const deleteList = (event: any, id: number) => {
    axios.delete("http://localhost:5000/bots/" + id).then((result) => {
      setSingledata(initialValues);
      getLists();
    });
  };

  const listTable = loading ? (
    <span>Loading...Is usually slower than localhost...</span>
  ) : (
    <Lists
      alldata={alldata}
      singledata={singledata}
      getList={getList}
      updateList={updateList}
      deleteList={deleteList}
      handleChange={handleChange}
    />
  );

  return (
    <div className="container">
      <span className="title-bar">
        <button type="button" className="btn btn-primary" onClick={getLists}>
          Get Lists
        </button>
        <CreateBot
          singledata={singledata}
          createList={createList}
          handleChange={handleChange}
        />
      </span>
      <br />
      {listTable}
    </div>
  );
};

export default Main;
