import Balance from "./components/Balance";
import logo from "./assets/images/logo.svg";
import Charts from "./components/Charts";
import LastMonth from "./components/LastMonth";
import TotalMonth from "./components/TotalMonth";
const App = () => {
  return (
    <div className="bg-cream flex justify-center items-center min-h-screen p-5">
      <div className="w-full max-w-[400px] space-y-5">
        <div className="bg-soft-red p-5 rounded-lg flex justify-between items-center">
          <Balance balance={921.48} />
          <img src={logo} alt="logo" />
        </div>
        <div className="bg-white max-sm:px-3 p-5 rounded-lg">
          <Charts />
          <div className="my-5 border-[1px] border-cream" />
          <div className="flex justify-between items-end">
            <TotalMonth />
            <LastMonth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
