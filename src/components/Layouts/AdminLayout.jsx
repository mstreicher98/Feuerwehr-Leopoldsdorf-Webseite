import AdminSidenav from "../AdminSidenav/AdminSidenav";

export default function AdminLayout({ children }) {
    return <>
    <AdminSidenav />
    {children}
    </>;
  }
  