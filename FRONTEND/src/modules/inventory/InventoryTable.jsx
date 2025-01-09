// una prueba

import React, { useState, useMemo, useCallback } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, Input, Button, Pagination } from "@nextui-org/react";
import * as XLSX from "xlsx"; // Importamos la librería para Excel

const EyeIcon = (props) => {
  return (
    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
      <path d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
      <path d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
    </svg>
  );
};

const DeleteIcon = (props) => {
  return (
    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
      <path d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
      <path d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
      <path d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
      <path d="M8.60834 13.75H11.3833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
      <path d="M7.91669 10.4167H12.0834" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
    </svg>
  );
};

const EditIcon = (props) => {
  return (
    <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation" viewBox="0 0 20 20" width="1em" {...props}>
      <path d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} />
      <path d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} />
      <path d="M2.5 18.3333H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} />
    </svg>
  );
};

const statusColorMap = {
  INACTIVO: "danger",
  ACTIVO: "success",
};

export const InventoryTable = ({ activos, onEdit, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Mostrar 5 activos por página

  // Filtro por búsqueda
  const filteredItems = useMemo(() => {
    return activos.filter(item => {
      const searchValue = searchQuery.toLowerCase();
      return Object.keys(item).some(key => {
        if (typeof item[key] === "string") {
          return item[key].toLowerCase().includes(searchValue);
        }
        return false;
      });
    });
  }, [activos, searchQuery]);

  // Paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // Función para descargar Excel
  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredItems); // Convertimos los datos a una hoja de Excel
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inventario"); // Agregamos la hoja al libro
    XLSX.writeFile(wb, "Inventario.xlsx"); // Descargamos el archivo Excel
  };

  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "Foto":
        return <User avatarProps={{ radius: "lg", src: item.foto }} />;
      case "code":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-teal-500 whitespace-nowrap ">{item.codigo}</p>
          </div>
        );
      case "estado":
        return (
          <Chip className="capitalize" color={statusColorMap[cellValue]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2 justify-center">
            <Tooltip content="Ver">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Editar">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => onEdit(item.id)}
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => onDelete(item.id)}
              >
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, [onEdit, onDelete]);

  const columns = [
    { name: "ACCCIONES", uid: "actions" },
    { name: "FOTO", uid: "Foto" },
    { name: "CODIGO", uid: "code" },
    { name: "EQUIPO", uid: "equipo_id" },
    { name: "MARCA", uid: "marca_id" },
    { name: "SERIAL", uid: "serial" },
    { name: "MODELO", uid: "modelo" },
    { name: "ESTADO", uid: "estado" },
    { name: "UBICACION", uid: "ubicacion" },
    { name: "RIESGO", uid: "riesgo" },
    { name: "REGISTRO INVIMA", uid: "registroInviama" },
    { name: "SISTEMA OPERATIVO", uid: "sistemaOperativo" },
    { name: "RESPONSABLE", uid: "names" },
    { name: "OBSERVACIONES", uid: "observaciones" },
  ];

  return (
    <div>
      {/* Mostrar el total de activos filtrados */}
      <div className="flex justify-between items-center mb-4">
      {/* ensayando  */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center w-full">
  {/* Input alineado a la izquierda en PC, a la cima en móvil */}
  <div className="w-full md:w-auto mb-4 md:mb-0">
    <Input
      clearable
      underlined
      label="Buscar Activos ..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      fullWidth
      className="w-full md:w-64 lg:w-80"
    />
  </div>

  {/* Contenedor para los botones alineados a la derecha en PC, debajo del input en móvil */}
  <div className="flex space-x-4 w-full md:w-auto justify-center md:justify-end">
    <Button 
      auto 
      onClick={() => console.log("Add new item")}
      color="primary" 
      shadow="sm"
      className="px-6 py-3 w-full md:w-auto"
    >
      Agregar 
    </Button>
    <Button 
      auto 
      onClick={downloadExcel} 
      color="danger"
      className="px-6 py-3 w-full md:w-auto"
    >
      Descargar en Excel
    </Button>
  </div>
</div>

    </div>
      {/* Tabla con borde negro y tamaño consistente en las celdas */}
      <Table aria-label="Inventory Table" className="border border-primary rounded-lg">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "center"} className="text-sm font-semibold">
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={currentItems}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell className="text-sm p-2">{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Paginación centrada */}
      <div className="flex justify-center mt-4">
        <Pagination
          total={Math.ceil(filteredItems.length / itemsPerPage)}
          page={currentPage}
          onChange={(page) => setCurrentPage(page)}
          size="sm"
          shadow="sm"
        />
      </div>
      {/* Mostrar el total de activos */}
      <p className="text-sm text-gray-500 mb-4">
        Total de Activos: {filteredItems.length} {filteredItems.length === 1 ? "Activo" : "Activos"}
      </p>
    </div>
  );
};


