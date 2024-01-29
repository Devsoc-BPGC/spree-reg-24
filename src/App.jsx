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
  const [sport,setSport] = useState("");
  const [data,setData]=useState();
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

        {mode == "individual" && <SportIndividual sport={sport} setSport={setSport}/>}
        {mode == "team" && <SportTeam sport={sport} setSport={setSport} data={data} setData={setData} />}
      </div>
      <div className="flex justify-start items-center lg:w-4/5">
        <div className="lg:w-5/12 flex justify-center items-center">
          <button
            className="border-white border-2 rounded-lg text-white text-2xl px-5 py-2 font-Tourney font-black"
            onClick={() =>
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
                data
              )
            }
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
  data
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
    data: data
  };

  console.log(registrationData);
  const date = new Date();
        var ISToffSet = 330; //IST is 5:30; i.e. 60*5+30 = 330 in minutes 
        var ISTTime = new Date(date.getTime()+ISToffSet*60*1000);
    
    
        let usr_data = {
            Submit_Time: ISTTime,
            Name: registrationData.fullName,
            Gender: registrationData.gender,
            Email: registrationData.email,
            Mobile_No: registrationData.phoneNumber,
            College_Name: registrationData.collegeName,
            State:registrationData.resState,
            City:registrationData.city
        };
    

        fetch("apikey", {
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

export default App;
