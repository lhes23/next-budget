import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import MainContent from "../../components/MainContent";
import baseUrl from "../../../util/baseUrl";

const Dashboard = ({ budgets }) => {
  const [budgetsData, setBudgetsData] = useState(budgets);
  return (
    <DashboardLayout title="Dashboard">
      <MainContent budgets={budgetsData} />
    </DashboardLayout>
  );
};
export default Dashboard;

export const getServerSideProps = async () => {
  const res = await fetch(`${baseUrl}/api/budget`);
  const data = await res.json();

  return {
    props: {
      budgets: data.budgets,
    },
  };
};
