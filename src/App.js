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
      { id: "4", nama: "Suzuka", alamat: "Hiroshima" },
      { id: "5", nama: "Moa", alamat: "Aichi" },
      { id: "6", nama: "Yui", alamat: "Kanagawa" },
      { id: "7", nama: "Suzuka", alamat: "Hiroshima" },
      { id: "8", nama: "Moa", alamat: "Aichi" },
      { id: "9", nama: "Yui", alamat: "Kanagawa" },
      { id: "10", nama: "Suzuka", alamat: "Hiroshima" },
      { id: "11", nama: "Moa", alamat: "Aichi" },
      { id: "12", nama: "Yui", alamat: "Kanagawa" },
      { id: "13", nama: "Suzuka", alamat: "Hiroshima" },
      { id: "14", nama: "Moa", alamat: "Aichi" },
      { id: "15", nama: "Yui", alamat: "Kanagawa" },
      { id: "16", nama: "Suzuka", alamat: "Hiroshima" },
      { id: "17", nama: "Moa", alamat: "Aichi" },
      { id: "18", nama: "Yui", alamat: "Kanagawa" },
      { id: "19", nama: "Suzuka", alamat: "Hiroshima" },
      { id: "20", nama: "Moa", alamat: "Aichi" },
      { id: "21", nama: "Yui", alamat: "Kanagawa" },
      { id: "22", nama: "Suzuka", alamat: "Hiroshima" },
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
