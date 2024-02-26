import { useState, useEffect } from "react";
import "./App.css";
import RegTitle from "./components/RegTitle";
import ModeSelector from "./components/ModeSelector";
import Form from "./components/Form";
import SportIndividual from "./components/SportIndividual";
import SportTeam from "./components/SportTeam";

function App() {
  const [mode, setMode] = useState("individual");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [gender, setGender] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [resState, setResState] = useState("");
  const [city, setCity] = useState("");
  const [sport, setSport] = useState("");
  const [teamData, setTeamData] = useState([
    { fullName: "", phoneNumber: "" },
    { fullName: "", phoneNumber: "" },
    { fullName: "", phoneNumber: "" },
    { fullName: "", phoneNumber: "" },
  ]);

  const [poc, setPoc] = useState({ fullName: "", phoneNumber: "" });
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    console.log(sport);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <div className="min-h-screen min-w-full bg-[url('./assets/universalBg.jpg')] bg-no-repeat bg-cover bg-center flex justify-evenly items-center flex-col">
      <div className="flex justify-evenly items-center w-4/5">
        <RegTitle />
        {!isMobile && <ModeSelector setMode={setMode} mode={mode} />}
      </div>
      <div
        className={`flex justify-around lg:flex-row flex-col w-[80%] items-center lg:h-96 lg:w-4/5 ${
          isMobile && "gap-4"
        }`}
      >
        <Form
          setFullName={setFullName}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
          setGender={setGender}
          setCollegeName={setCollegeName}
          setResState={setResState}
          setCity={setCity}
        />
        {isMobile && <ModeSelector setMode={setMode} mode={mode} />}

        {mode == "individual" && (
          <SportIndividual sport={sport} setSport={setSport} />
        )}
        {mode == "team" && (
          <SportTeam
            sport={sport}
            setSport={setSport}
            teamData={teamData}
            setTeamData={setTeamData}
            setPoc={setPoc}
            poc={poc}
          />
        )}
      </div>
      <div className="flex justify-start items-center lg:w-4/5">
        <div className="lg:w-5/12 flex justify-center items-center">
          <button
            className="border-white border-2 rounded-lg text-white text-2xl px-5 py-2 font-Tourney font-black"
            onClick={() => {
              Register(
                fullName,
                email,
                phoneNumber,
                gender,
                collegeName,
                resState,
                city,
                sport,
                mode,
                teamData,
                poc
              );
            }}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
}

function Register(
  fullName,
  email,
  phoneNumber,
  gender,
  collegeName,
  resState,
  city,
  sport,
  mode,
  teamData,
  poc
) {
  const registrationData = {
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    gender: gender,
    collegeName: collegeName,
    resState: resState,
    city: city,
    sport: sport,
    mode: mode,
    teamData: teamData,
    poc: poc,
  };

  console.log(registrationData);
  const date = new Date();
  var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes
  var ISTTime = new Date(date.getTime() + ISToffSet * 60 * 1000);

  

  let usr_data = {
    Submit_Time: ISTTime,
    Name: registrationData.fullName,
    Gender: registrationData.gender,
    Email: registrationData.email,
    Mobile_No: registrationData.phoneNumber,
    College_Name: registrationData.collegeName,
    City: registrationData.city,
    State: registrationData.resState,
    Sport: registrationData.sport,
    POC_name: registrationData.poc.fullName,
    POC_num: registrationData.poc.phoneNumber,
    
    team_0_name: registrationData.teamData[0] ? registrationData.teamData[0].fullName : "",
    team_0_num: registrationData.teamData[0] ? registrationData.teamData[0].phoneNumber : "", 
    team_1_name: registrationData.teamData[1] ? registrationData.teamData[1].fullName : "",
    team_1_num: registrationData.teamData[1] ? registrationData.teamData[1].phoneNumber : "",
    team_2_name: registrationData.teamData[2] ? registrationData.teamData[2].fullName : "",
    team_2_num: registrationData.teamData[2] ? registrationData.teamData[2].phoneNumber : "",
    team_3_name: registrationData.teamData[3] ? registrationData.teamData[3].fullName : "",
    team_3_num: registrationData.teamData[3] ? registrationData.teamData[3].phoneNumber : "",

    team_4_name: registrationData.teamData[4] ? registrationData.teamData[4].fullName : "",
    team_4_num: registrationData.teamData[4] ? registrationData.teamData[4].phoneNumber : "",
    team_5_name: registrationData.teamData[5] ? registrationData.teamData[5].fullName : "",
    team_5_num: registrationData.teamData[5] ? registrationData.teamData[5].phoneNumber : "",
    team_6_name: registrationData.teamData[6] ? registrationData.teamData[6].fullName : "",
    team_6_num: registrationData.teamData[6] ? registrationData.teamData[6].phoneNumber : "",
    team_7_name: registrationData.teamData[7] ? registrationData.teamData[7].fullName : "",
    team_7_num: registrationData.teamData[7] ? registrationData.teamData[7].phoneNumber : "",

    team_8_name: registrationData.teamData[8] ? registrationData.teamData[8].fullName : "",
    team_8_num: registrationData.teamData[8] ? registrationData.teamData[8].phoneNumber : "",
    team_9_name: registrationData.teamData[9] ? registrationData.teamData[9].fullName : "",
    team_9_num: registrationData.teamData[9] ? registrationData.teamData[9].phoneNumber : "",
    team_10_name: registrationData.teamData[10] ? registrationData.teamData[10].fullName : "",
    team_10_num: registrationData.teamData[10] ? registrationData.teamData[10].phoneNumber : "",
    team_11_name: registrationData.teamData[11] ? registrationData.teamData[11].fullName : "",
    team_11_num: registrationData.teamData[11] ? registrationData.teamData[11].phoneNumber : "",

    team_12_name: registrationData.teamData[12] ? registrationData.teamData[12].fullName : "",
    team_12_num: registrationData.teamData[12] ? registrationData.teamData[12].phoneNumber : "",
    team_13_name: registrationData.teamData[13] ? registrationData.teamData[13].fullName : "",
    team_13_num: registrationData.teamData[13] ? registrationData.teamData[13].phoneNumber : "",
    team_14_name: registrationData.teamData[14] ? registrationData.teamData[14].fullName : "",
    team_14_num: registrationData.teamData[14] ? registrationData.teamData[14].phoneNumber : "",
    team_15_name: registrationData.teamData[15] ? registrationData.teamData[15].fullName : "",
    team_15_num: registrationData.teamData[15] ? registrationData.teamData[15].phoneNumber : "",

    team_16_name: registrationData.teamData[16] ? registrationData.teamData[16].fullName : "",
    team_16_num: registrationData.teamData[16] ? registrationData.teamData[16].phoneNumber : "",
    team_17_name: registrationData.teamData[17] ? registrationData.teamData[17].fullName : "",
    team_17_num: registrationData.teamData[17] ? registrationData.teamData[17].phoneNumber : "",
    team_18_name: registrationData.teamData[18] ? registrationData.teamData[18].fullName : "",
    team_18_num: registrationData.teamData[18] ? registrationData.teamData[18].phoneNumber : "",
    team_19_name: registrationData.teamData[19] ? registrationData.teamData[19].fullName : "",
    team_19_num: registrationData.teamData[19] ? registrationData.teamData[19].phoneNumber : "",
    
  };
  if(registrationData.mode=="individual"){

        fetch("https://sheet.best/api/sheets/97a5ffc0-19cd-41c6-9ea0-a405fb98ca1e", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usr_data),
        })
          .then((r) => r.json())
          .then((data) => {
            // The response comes here
            console.log(data);
          })
          .catch((error) => {
            // Errors are reported there
            console.log(error);
          });
  }
  else{
        fetch("https://sheet.best/api/sheets/9f81eb9e-462a-4b43-b9e9-d3723087f1ac", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usr_data),
        })
          .then((r) => r.json())
          .then((data) => {
            // The response comes here
            console.log(data);
          })
          .catch((error) => {
            // Errors are reported there
            console.log(error);
          });
  }
}

export default App;
