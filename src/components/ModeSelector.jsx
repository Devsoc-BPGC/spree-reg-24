
function ModeSelector(props){
    return(
        <>
            <div className="font-Skia flex justify-center items-center text-2xl text-white">
                <div className="rounded-l-3xl border-2 border-white w-44 h-16 flex justify-center items-center" onClick={()=>{
                    props.setMode("individual");
                }}>Individual</div>
                <div className="rounded-r-3xl border-2 border-white w-44 h-16 flex justify-center items-center" onClick={()=>{
                    props.setMode("team");
                }}>Team</div>
            </div>
        </>
    );
}

export default ModeSelector;