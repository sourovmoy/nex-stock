import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <div className="flex min-h-screen">
          {/* Mobile Sidebar Overlay */}
          {/* {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )} */}

          {/* Sidebar */}
          <div
            className={`
          fixed z-50 inset-y-0 left-0 transform bg-white transition-transform duration-300
          lg:static lg:translate-x-0
          
        `}
          >
            {/* <Sidebar navItems={navItems} user={session.user} /> */}
            sidebar
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col min-h-screen w-full">
            {/* Header */}
            {/* <Header
              session={session}
              onMenuClick={() => setSidebarOpen(true)}
            /> */}
            header
            {/* Page Content */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-white">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
