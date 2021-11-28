import Sidebar from "./sidebar";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className={"dy__layout"}>
      <Header />
      <Sidebar />
      <main className={"dy__content"}>{children}</main>
    </div>
  );
}

export default Layout;
