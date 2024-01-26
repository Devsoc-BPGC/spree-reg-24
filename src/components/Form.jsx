import { useState, useEffect } from "react";

document.addEventListener("wheel", function (event) {
  if (document.activeElement.type === "number") {
    document.activeElement.blur();
  }
});
function Form(props) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  return (
    <>
      <div className="flex justify-center items-center flex-col lg:w-5/12 border-white border-2 rounded-lg h-full">
        <div className="flex justify-around h-full items-start flex-col w-5/6 text-ggrey">
          <input
            type="text"
            placeholder="Full Name"
            required
            className={`bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
              isMobile && "mt-2 mb-1"
            }`}
            onInput={(e) => {
              props.setFullName(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Email"
            required
            className={`bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
              isMobile && "my-1"
            }`}
            onInput={(e) => {
              props.setEmail(e.target.value);
            }}
          ></input>
          <input
            type="number"
            placeholder="Phone Number"
            required
            className={`bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
              isMobile && "my-1"
            }`}
            onInput={(e) => {
              props.setPhoneNumber(e.target.value);
            }}
          ></input>
          <select
            placeholder="Gender"
            required
            className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none"
          >
            <option
              className="bg-transparent "
              value=""
              selected
              disabled
              hidden
            >
              Gender
            </option>
            <option
              className="bg-transparent text-black"
              value="M"
              onClick={(e) => {
                props.setGender(e.target.value);
              }}
            >
              Male
            </option>
            <option
              className="bg-transparent text-black"
              value="F"
              onClick={(e) => {
                props.setGender(e.target.value);
              }}
            >
              Female
            </option>
          </select>
          <input
            type="text"
            placeholder="College Name"
            required
            className={`bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
              isMobile && "my-1"
            }`}
            onInput={(e) => {
              props.setCollegeName(e.target.value);
            }}
          ></input>
          <div className="w-full flex justify-between items-center">
            <select className="bg-transparent w-5/12 border-white border-2 rounded-lg h-9 px-2 outline-none ">
              <option
                className="bg-transparent"
                value=""
                selected
                disabled
                hidden
              >
                State
              </option>
              <option
                className="bg-transparent text-black"
                value="Andhra Pradesh"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Andhra Pradesh
              </option>
              <option
                className="bg-transparent text-black"
                value="Andaman and Nicobar Islands"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Andaman and Nicobar Islands
              </option>
              <option
                className="bg-transparent text-black"
                value="Arunachal Pradesh"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Arunachal Pradesh
              </option>
              <option
                className="bg-transparent text-black"
                value="Assam"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Assam
              </option>
              <option
                className="bg-transparent text-black"
                value="Bihar"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Bihar
              </option>
              <option
                className="bg-transparent text-black"
                value="Chandigarh"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Chandigarh
              </option>
              <option
                className="bg-transparent text-black"
                value="Chhattisgarh"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Chhattisgarh
              </option>
              <option
                className="bg-transparent text-black"
                value="Dadar and Nagar Haveli"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Dadar and Nagar Haveli
              </option>
              <option
                className="bg-transparent text-black"
                value="Daman and Diu"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Daman and Diu
              </option>
              <option
                className="bg-transparent text-black"
                value="Delhi"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Delhi
              </option>
              <option
                className="bg-transparent text-black"
                value="Lakshadweep"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Lakshadweep
              </option>
              <option
                className="bg-transparent text-black"
                value="Puducherry"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Puducherry
              </option>
              <option
                className="bg-transparent text-black"
                value="Goa"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Goa
              </option>
              <option
                className="bg-transparent text-black"
                value="Gujarat"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Gujarat
              </option>
              <option
                className="bg-transparent text-black"
                value="Haryana"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Haryana
              </option>
              <option
                className="bg-transparent text-black"
                value="Himachal Pradesh"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Himachal Pradesh
              </option>
              <option
                className="bg-transparent text-black"
                value="Jammu and Kashmir"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Jammu and Kashmir
              </option>
              <option
                className="bg-transparent text-black"
                value="Jharkhand"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Jharkhand
              </option>
              <option
                className="bg-transparent text-black"
                value="Karnataka"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Karnataka
              </option>
              <option
                className="bg-transparent text-black"
                value="Kerala"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Kerala
              </option>
              <option
                className="bg-transparent text-black"
                value="Madhya Pradesh"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Madhya Pradesh
              </option>
              <option
                className="bg-transparent text-black"
                value="Maharashtra"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Maharashtra
              </option>
              <option
                className="bg-transparent text-black"
                value="Manipur"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Manipur
              </option>
              <option
                className="bg-transparent text-black"
                value="Meghalaya"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Meghalaya
              </option>
              <option
                className="bg-transparent text-black"
                value="Mizoram"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Mizoram
              </option>
              <option
                className="bg-transparent text-black"
                value="Nagaland"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Nagaland
              </option>
              <option
                className="bg-transparent text-black"
                value="Odisha"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Odisha
              </option>
              <option
                className="bg-transparent text-black"
                value="Punjab"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Punjab
              </option>
              <option
                className="bg-transparent text-black"
                value="Rajasthan"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Rajasthan
              </option>
              <option
                className="bg-transparent text-black"
                value="Sikkim"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Sikkim
              </option>
              <option
                className="bg-transparent text-black"
                value="Tamil Nadu"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Tamil Nadu
              </option>
              <option
                className="bg-transparent text-black"
                value="Telangana"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Telangana
              </option>
              <option
                className="bg-transparent text-black"
                value="Tripura"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Tripura
              </option>
              <option
                className="bg-transparent text-black"
                value="Uttar Pradesh"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Uttar Pradesh
              </option>
              <option
                className="bg-transparent text-black"
                value="Uttarakhand"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                Uttarakhand
              </option>
              <option
                className="bg-transparent text-black"
                value="West Bengal"
                onClick={(e) => {
                  props.setResState(e.target.value);
                }}
              >
                West Bengal
              </option>
            </select>
            <input
              type="text"
              placeholder="City"
              required
              className={`bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none ${
                isMobile && "my-1"
              }`}
              onInput={(e) => {
                props.setCity(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
