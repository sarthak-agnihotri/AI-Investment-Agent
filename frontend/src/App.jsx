import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
function App(){
  return(
    <div className="min-h-screen bg-slate-100">
      <Header/>   {/*render the header component */}
      <main className="max-w-6xl mx-auto px-6">
        <SearchBar/>  {/*render the search bar component */}
      </main>
    </div>
  );
}
export default App;