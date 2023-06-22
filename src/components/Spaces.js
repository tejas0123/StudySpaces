import React, { useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { StyledSpace } from "../styled/Spaces.styled";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router';
import { context } from "../UseContext";

function Spaces() {
  const [visibility, setVisibility] = useState("hidden");
  const [name, setName] = useState("");
  const [creator, setCreator] = useState("");
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [code, setCode] = useState("");
  const [zindex, setZindex] = useState(-1);
  const [classCode, setclassCode] = useState("");
  const [joinFormVisibility, setJoinFormVisibility] = useState("");
  const [createdSpace, setCreatedSpace] = useState([]);
  const [joinedSpace, setjoinedSpace] = useState([]);
  const [isLoggedIn, setLogin] = useContext(context);
  const navigate = useNavigate();
  let createdspace, joinedspace;
  useEffect(() => {
    console.log(isLoggedIn);
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:4000/fetchAllSpaces")
      .then((res) => {
        console.log(res);
        setCreatedSpace(res.data.created);
        setjoinedSpace(res.data.joined);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function submit(e) {
    let students = [];
    axios
      .post("http://localhost:4000/newSpace", {
        name,
        creator,
        subject,
        code,
        desc,
        students,
      })
      .then((res) => {
        console.log("hi");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function join(e) {
    axios
      .post("http://localhost:4000/joinSpace", { classCode })
      .then((result) => {
        if (result.data.joined) {
          console.log("Joined Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const ManageSpace = (id) => {
    console.log(id);
    navigate(`/spaceinfo?id=${id}`);
  }
  const DisplaySpace = (id) => {
    console.log(id);
    navigate(`/viewspace?id=${id}`);
  }
  //create class form
  if (visibility == "visible") {
    return (
      <>
        <Navbar />
        <StyledSpace>
          <button
            className="button"
            style={{ "background-color": "blue" }}
            onClick={() => {
              setVisibility("visible");
              setZindex(2);
            }}
          >
            {" "}
            + Create Space
          </button>
          <button className="button">Join</button>

          <form style={{ visibility: visibility }}>
            <div className="formdiv">
              <h1>Create Space</h1>
              <div className="formelements">
                <div className="innerdiv">
                  <label>Name</label>
                  <input
                    name="name"
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                  <label>Creator</label>
                  <input
                    type="text"
                    name="creator"
                    onChange={(e) => {
                      setCreator(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <div className="formelements">
                <div className="innerdiv">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  ></input>
                  <label>Code</label>
                  <input
                    type="text"
                    name="code"
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div className="innerdiv">
                <label>Description</label>
                <textarea
                  style={{
                    "margin-left": "10px",
                    "margin-top": "10px",
                    "background-color": "#A5F0C5",
                    "font-size": "17px",
                    "border-radius": "5px",
                  }}
                  type="text"
                  name="desc"
                  cols="80"
                  rows="4"
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                ></textarea>
              </div>
              <br />
              <div style={{ "margin-left": "auto", "margin-right": "auto" }}>
                <button className="createButton" type="submit" onClick={submit}>
                  Create
                </button>
                <button
                  className="createButton"
                  onClick={() => setVisibility("hidden")}
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </StyledSpace>
      </>
    );
  }

  //join class form
  else if (joinFormVisibility == "visible") {
    return (
      <>
        <Navbar />
        <StyledSpace>
          <button
            className="button"
            style={{ "background-color": "blue" }}
            onClick={() => {
              setVisibility("visible");
              setZindex(2);
            }}
          >
            {" "}
            + Create Space
          </button>
          <button className="button">Join</button>

          <form style={{ visibility: joinFormVisibility }}>
            <div
              className="formdiv"
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>Join Space</h1>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  alignItems: "center",
                }}
              >
                <label>Code</label>
                <input
                  name="classCode"
                  type="text"
                  onChange={(e) => {
                    setclassCode(e.target.value);
                  }}
                  style={{
                    width: "60%",
                  }}
                ></input>
              </div>
              <div style={{ "margin-left": "auto", "margin-right": "auto" }}>
                <button className="createButton" type="submit" onClick={join}>
                  Join
                </button>
                <button
                  className="createButton"
                  onClick={() => setJoinFormVisibility("hidden")}
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </StyledSpace>
      </>
    );
  }

  //normal page
  else {
    return (
      <>
        <Navbar />
        <StyledSpace>
          <button
            className="button"
            style={{ "background-color": "blue" }}
            onClick={() => {
              setVisibility("visible");
              setZindex(2);
            }}
          >
            {" "}
            + Create Space
          </button>
          <button
            className="button"
            onClick={() => {
              setJoinFormVisibility("visible");
              setZindex(2);
            }}
          >
            Join
          </button>
          <button className="button">
            <a
              href="#createdspaces"
              style={{ textDecoration: "none", color: "white" }}
            >
              Created Spaces
            </a>
          </button>
          <button className="button">
            <a
              href="#joinedspaces"
              style={{ textDecoration: "none", color: "white" }}
            >
              Joined Spaces
            </a>
          </button>

          <h2 id="createdspaces">Created Spaces</h2>
          <div className="container">
            {createdSpace.map((item) => {
              return (
                <div className="card" onClick={() => ManageSpace(item._id)}>
                  <div><h2>{item.name}</h2></div>
                  <div className="card-element" >
                    <img
                      src={require("../images/teacher.png")}
                      width="40px"
                      height="40px"
                    ></img>
                    <p>{item.creator}</p>
                    <img
                      src={require("../images/subject.png")}
                      width="40px"
                      height="40px"
                    ></img>
                    <p>{item.subject}</p>
                  </div>

                  <p className="code">
                    <b>Code</b> : {item.code}
                  </p>
                  <p className="desc">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <h2 id="joinedspaces">Joined Spaces</h2>
          <div className="container">
            {joinedSpace.map((item) => {
              return (
                <div className="card" onClick={() => DisplaySpace(item._id)}>
                  <div className="cardHeading">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="card-element">
                    <img
                      src={require("../images/teacher.png")}
                      width="40px"
                      height="40px"
                    ></img>
                    <p>{item.creator}</p>
                    <img
                      src={require("../images/subject.png")}
                      width="40px"
                      height="40px"
                    ></img>
                    <p>{item.subject}</p>
                  </div>

                  <p className="code">
                    <b>Code</b> : {item.code}
                  </p>
                  <p className="desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </StyledSpace>
      </>
    );
  }
}

export default Spaces;
