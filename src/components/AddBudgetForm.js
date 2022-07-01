import { useState } from "react";
import baseUrl from "../../util/baseUrl";

const AddBudgetForm = () => {
  const [budgetType, setBudgetType] = useState("expense");
  const [budgetName, setBudgetName] = useState("");
  const [budgetAmount, setBudgetAmount] = useState(0);

  const onSubmitFormHandler = async (e) => {
    e.preventDefault();
    console.log(budgetType, budgetName, budgetAmount);

    const res = await fetch(`${baseUrl}/api/budget`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ budgetType, budgetName, budgetAmount }),
    });

    if (res.status < 300) {
      console.log("Success");
      setBudgetType("");
      setBudgetName("");
      setBudgetAmount("");
    } else {
      console.log("error");
    }
  };
  return (
    <>
      <div className="w-full md:w-1/2 justify-center shadow-md p-10 rounded-md bg-white">
        <form className="" onSubmit={onSubmitFormHandler}>
          <div className="flex flex-wrap mb-6">
            <div className="w-full mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="budgetType"
              >
                Budget Type
              </label>
              <div className="text-2xl">
                <input
                  type="radio"
                  name="budgetType"
                  id=""
                  value="income"
                  onChange={(e) => setBudgetType(e.target.value)}
                  className="w-54 text-2xl font-extrabold"
                />

                <span className="px-2">Income</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="budgetType"
                  id=""
                  value="expense"
                  onChange={(e) => setBudgetType(e.target.value)}
                  defaultChecked
                />
                Expense
              </div>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Name
              </label>
              <input
                className="block w-full text-gray-700 border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Name"
                value={budgetName}
                onChange={(e) => setBudgetName(e.target.value)}
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Amount
              </label>
              <input
                className="appearance-none block w-full text-gray-700 border focus:border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="number"
                placeholder="Amount"
                value={budgetAmount}
                onChange={(e) => setBudgetAmount(e.target.value)}
              />
            </div>
          </div>

          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          />
        </form>
      </div>
    </>
  );
};
export default AddBudgetForm;
