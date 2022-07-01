import DashboardLayout from "../../components/DashboardLayout";
import AddBudgetForm from "../../components/AddBudgetForm";

const AddBudget = () => {
  return (
    <DashboardLayout title="Add Budget">
      <div className="flex justify-center">
        <AddBudgetForm />
      </div>
    </DashboardLayout>
  );
};
export default AddBudget;
