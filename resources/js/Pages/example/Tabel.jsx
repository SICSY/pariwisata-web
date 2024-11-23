import React, { useEffect } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
} from "material-react-table";
import { Button, Box } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { MRT_Localization_ID } from "material-react-table/locales/id";
import { usePage } from "@inertiajs/inertia-react";
import { fetchModule } from "vite";

// Data contoh

const Tabel = ({ pengunjung }) => {
    const data = pengunjung;
    const updatedPengunjung = pengunjung.map((data) => {
        if (data.related_type) {
            data.related_type = data.related_type.split("\\").pop();
        }
        return data;
    });

    useEffect(() => {
        fetchModule("../js/Pages/example/Tabel.jsx");
    }, []);
    // Menambahkan 'tipe' dan nilai terkait ke array
    updatedPengunjung.push({ related_type: "tipe" });

    const columns = [
        { accessorKey: "id", header: "ID", size: 10 },
        { accessorKey: "role", header: "Role", size: 10 },
        {
            accessorKey: "total_pengunjung",
            header: "Total Pengunjung",
            size: 10,
        },
        { accessorKey: "related.nama", header: "Tipe", size: 10 },
        { accessorKey: "related_type", header: "relasi Id", size: 10 },
        { accessorKey: "created_at", header: "Tanggal", size: 10 },
    ];

    const handleExportRows = (rows) => {
        const doc = new jsPDF();
        const tableHeaders = columns.map((col) => col.header);

        const tableData = rows.map((row) => [
            row.original.id,
            row.original.role,
            row.original.total_pengunjung,
            row.original.related.nama,
            row.original.related_type,
            row.original.created_at,
        ]);

        autoTable(doc, {
            head: [tableHeaders],
            body: tableData,
        });

        doc.save("data-pengunjung.pdf");
    };

    const table = useMaterialReactTable({
        columns,
        data,
        enableColumnFilterModes: true,
        enableColumnOrdering: true,
        enableCellActions: true,
        enableEditing: true,
        enableColumnPinning: true,
        enableRowActions: true,
        enableRowSelection: true,
        enableSelectAll: true,
        enableGlobalFilterModes: true,
        initialState: {
            pagination: {
                pageSize: 10,
                pageIndex: 0,
            },
            showColumnFilters: true,
            showGlobalFilter: true,
        },
        columnFilterDisplayMode: "popover",
        paginationDisplayMode: "default",
        positionToolbarAlertBanner: "top",
        localization: MRT_Localization_ID,
        renderTopToolbarCustomActions: ({ table }) => (
            <Box
                sx={{
                    display: "flex",
                    gap: "16px",
                    padding: "8px",
                    flexWrap: "wrap",
                }}
            >
                <Button
                    disabled={
                        table.getPrePaginationRowModel().rows.length === 0
                    }
                    onClick={() =>
                        handleExportRows(table.getPrePaginationRowModel().rows)
                    }
                    startIcon={<FileDownloadIcon />}
                >
                    Export Semua Data
                </Button>
                <Button
                    disabled={table.getRowModel().rows.length === 0}
                    onClick={() => handleExportRows(table.getRowModel().rows)}
                    startIcon={<FileDownloadIcon />}
                >
                    Export Data di Halaman Ini
                </Button>
                <Button
                    disabled={
                        !table.getIsSomeRowsSelected() &&
                        !table.getIsAllRowsSelected()
                    }
                    onClick={() =>
                        handleExportRows(table.getSelectedRowModel().rows)
                    }
                    startIcon={<FileDownloadIcon />}
                >
                    Export Data Terpilih
                </Button>
            </Box>
        ),
    });

    return (
        <div className=" flex items-center justify-center w-full ">
            <MaterialReactTable table={table} />
        </div>
    );
};

export default Tabel;
