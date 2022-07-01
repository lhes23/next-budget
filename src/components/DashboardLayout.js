import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const DashboardLayout = ({ children, title }) => {
  return (
    <div className="flex bg-gray-200">
      <SideBar />
      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        <Header />
        <div className="w-full overflow-x-hidden border-t flex flex-col">
          <main className="w-full flex-grow p-6 ">
            <h1 className="text-3xl text-black pb-6">{title}</h1>
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
