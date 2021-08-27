import React, { useState } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import TableComponent from "./components/TableComponent";

export default function App() {
  const [state, setState] = useState({
    users: [
      { id: "1", nama: "Suzuka", alamat: "Hiroshima" },
      { id: "2", nama: "Moa", alamat: "Aichi" },
      { id: "3", nama: "Yui", alamat: "Kanagawa" },
    ],
  });

  return (
    <div>
      <NavbarComponent />
      <JumbotronComponent />
      <TableComponent users={state.users} />
    </div>
  );
}
