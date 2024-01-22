document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number"){
        document.activeElement.blur();
    }
});
function Form(){
    return(
        <>
            <div className="flex justify-center items-center flex-col w-5/12 border-white border-2 rounded-lg h-full">
                <div className="flex justify-around h-full items-start flex-col w-5/6 text-ggrey">
                    <input type="text" placeholder="Full Name" required className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none"></input>
                    <input type="text" placeholder="Email" required className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none"></input>
                    <input type="number" placeholder="Phone Number" required className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none"></input>
                    <select placeholder="Gender" required className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none">
                        <option className="bg-transparent " value="" selected disabled hidden>
                            Gender
                        </option>
                        <option className="bg-transparent text-black" value="M">
                            Male
                        </option>
                        <option className="bg-transparent text-black" value="F">
                            Female
                        </option>
                    </select>  
                    <input type="text" placeholder="College Name" required className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-full outline-none"></input>
                    <div className="w-full flex justify-between items-center">
                        <select className="bg-transparent w-5/12 border-white border-2 rounded-lg h-9 px-2 outline-none">
                            <option className="bg-transparent" value="" selected disabled hidden>
                                State
                            </option>
                            <option className="bg-transparent" value="Andhra Pradesh">Andhra Pradesh</option>
                            <option className="bg-transparent" value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option className="bg-transparent" value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option className="bg-transparent" value="Assam">Assam</option>
                            <option className="bg-transparent" value="Bihar">Bihar</option>
                            <option className="bg-transparent" value="Chandigarh">Chandigarh</option>
                            <option className="bg-transparent" value="Chhattisgarh">Chhattisgarh</option>
                            <option className="bg-transparent" value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option className="bg-transparent" value="Daman and Diu">Daman and Diu</option>
                            <option className="bg-transparent" value="Delhi">Delhi</option>
                            <option className="bg-transparent" value="Lakshadweep">Lakshadweep</option>
                            <option className="bg-transparent" value="Puducherry">Puducherry</option>
                            <option className="bg-transparent" value="Goa">Goa</option>
                            <option className="bg-transparent" value="Gujarat">Gujarat</option>
                            <option className="bg-transparent" value="Haryana">Haryana</option>
                            <option className="bg-transparent" value="Himachal Pradesh">Himachal Pradesh</option>
                            <option className="bg-transparent" value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option className="bg-transparent" value="Jharkhand">Jharkhand</option>
                            <option className="bg-transparent" value="Karnataka">Karnataka</option>
                            <option className="bg-transparent" value="Kerala">Kerala</option>
                            <option className="bg-transparent" value="Madhya Pradesh">Madhya Pradesh</option>
                            <option className="bg-transparent" value="Maharashtra">Maharashtra</option>
                            <option className="bg-transparent" value="Manipur">Manipur</option>
                            <option className="bg-transparent" value="Meghalaya">Meghalaya</option>
                            <option className="bg-transparent" value="Mizoram">Mizoram</option>
                            <option className="bg-transparent" value="Nagaland">Nagaland</option>
                            <option className="bg-transparent" value="Odisha">Odisha</option>
                            <option className="bg-transparent" value="Punjab">Punjab</option>
                            <option className="bg-transparent" value="Rajasthan">Rajasthan</option>
                            <option className="bg-transparent" value="Sikkim">Sikkim</option>
                            <option className="bg-transparent" value="Tamil Nadu">Tamil Nadu</option>
                            <option className="bg-transparent" value="Telangana">Telangana</option>
                            <option className="bg-transparent" value="Tripura">Tripura</option>
                            <option className="bg-transparent" value="Uttar Pradesh">Uttar Pradesh</option>
                            <option className="bg-transparent" value="Uttarakhand">Uttarakhand</option>
                            <option className="bg-transparent" value="West Bengal">West Bengal</option>
                        </select>
                        <input type="text" placeholder="City" required className="bg-transparent border-white border-2 rounded-lg h-9 px-2 w-5/12 outline-none"></input>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;