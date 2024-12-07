// resources/js/components/Tabel.js

import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_ID } from "material-react-table/locales/id";

const Tabel = ({ columns, data }) => {
    return (
        <div
            data-lenis-prevent
            className="overflow-auto bg-gray-800 shadow-lg rounded-lg p-4 text-white"
        >
            <MaterialReactTable
                columns={columns}
                data={data}
                enablePagination={true}
                enableSorting={true}
                enableColumnFilter={true}
                enableColumnOrdering={true}
                initialState={{ pageIndex: 0 }}
                localization={MRT_Localization_ID}
                enableFilterMatchHighlighting={true}
                enableColumnFilterModes={true}
                keepPinnedRowsVisible={true}
                muiTopToolbarProps={{
                    style: {
                        backgroundColor: "#111827",
                        color: "white",
                    },
                    sx: {
                        "& svg, & button, & label, & div ": {
                            color: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "#1f2937",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                            {
                                border: "none",
                            },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                            {
                                borderColor: "#374151",
                            },
                    },
                }}
                muiBottomToolbarProps={{
                    style: {
                        backgroundColor: "#111827",
                        color: "white",
                    },
                    sx: {
                        "& svg, & button, & label, & div ": {
                            color: "white",
                        },
                    },
                }}
                muiTablePaperProps={{
                    elevation: 24,
                    style: {
                        backgroundColor: "#111827",
                    },
                }}
                muiTableProps={{
                    sx: {
                        "& th, input, svg ,": {
                            backgroundColor: "#2d3748",
                            color: "white",
                        },
                        "& svg ": {
                            color: "white",
                        },
                        "& td": {
                            backgroundColor: "#2d3748",
                            borderBottom: "1px solid #4a5568",
                            color: "white",
                            width: "fit-content",
                            whiteSpace: "nowrap",
                            border: "1px solid #4a5568",
                        },
                        "& th": {
                            border: "1px solid #4a5568",
                            width: "fit-content",
                            whiteSpace: "nowrap",
                        },
                    },
                }}
            />
        </div>
    );
};

export default Tabel;
