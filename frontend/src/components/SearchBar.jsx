import {useState} from "react";
function SearchBar(){
    const [company, setCompany]=useState("");
    const handleAnalyze=()=>{
        if(!company.trim()){
            alert("Please enter a company name.");
            return;
        }
        console.log(company);
    };
    return(
        <div className="bg-white rounded-xl shadow-lg p-8 mt-10">
            <h2 className="text-2xl font-semibold mb-6">
                Search Company
            </h2>
            <div className="flex gap-4">
                <input
                type="text"
                placeholder="Example: Apple, Tesla, NVIDIA..."
                value={company}
                onChange={(e)=>setCompany(e.target.value)}
                className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button onClick={handleAnalyze}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg">Analyze</button>
            </div>
        </div>
    );
}
export default SearchBar;