const BudgetTable = ({ budgets }) => {
  console.log(budgets);
  return (
    <>
      <div className="w-full mt-12">
        <h2 className="text-xl pb-3 flex items-center">
          <i className="fas fa-list mr-3" /> Latest Budget Reports
        </h2>
        <div className="overflow-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Date
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Budget Type
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {budgets?.map((budget) => {
                const date = new Date(budget.createdAt);
                const year = date.getFullYear();
                const monthNames = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ];
                const month = monthNames[date.getMonth()];
                const day = date.getDay();
                return (
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">{`${month} ${day}, ${year}`}</td>
                    <td className="w-1/3 text-left py-3 px-4">
                      {budget.budgetName}
                    </td>
                    <td
                      className={`text-left py-3 px-4 ${
                        budget.budgetType === "income"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {budget.budgetType}
                    </td>
                    <td className="text-left py-3 px-4">
                      {budget.budgetAmount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default BudgetTable;
