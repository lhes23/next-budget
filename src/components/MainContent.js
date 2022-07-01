import BudgetTable from "./BudgetTable";

const MainContent = ({ budgets }) => {
  return (
    <>
      <div className="flex flex-wrap mt-6">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
          <p className="text-xl pb-3 flex items-center">
            <i className="fas fa-plus mr-3" /> Monthly Reports
          </p>
          <div className="p-6 bg-white">
            <canvas id="chartOne" width={400} height={200} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
          <p className="text-xl pb-3 flex items-center">
            <i className="fas fa-check mr-3" /> Resolved Reports
          </p>
          <div className="p-6 bg-white">
            <canvas id="chartTwo" width={400} height={200} />
          </div>
        </div>
      </div>

      <BudgetTable budgets={budgets} />
    </>
  );
};
export default MainContent;
