import { Layout, theme } from "antd";
import { BreadcrumbModelView } from "./components/BreadcrumbURL/BreadcrumbModelView";
import { RoutesContent } from "./components/Routes/Routes";
import { SidebarMenu } from "./components/SidebarMenu/SidebarMenu";
import { useLocation } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="h-[100vh] z-[-1000] shadow-md">
        <SidebarMenu />
      </div>
      <div className="fixed">
        <SidebarMenu />
      </div>
      <Layout>
        <Content style={{ margin: "16px" }}>
          <div
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className="p-4 h-full"
          >
            <BreadcrumbModelView />

            <RoutesContent />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
