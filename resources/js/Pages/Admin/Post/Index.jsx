import React, { useState } from "react";
import {
    IconButton,
    Tooltip,
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { MaterialReactTable } from "material-react-table";
import { router } from "@inertiajs/react";
import JoditEditor from "jodit-react";
import { useSnackbar } from "notistack";

const Index = ({ posts }) => {
    const { enqueueSnackbar } = useSnackbar(); // Notistack hook
    const [data, setData] = useState(posts);

    const [openModal, setOpenModal] = useState(false);
    const [editUser, setEditUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const handleEdit = (row) => {
        setEditUser(row.original);
        setIsEditing(true);
        setOpenModal(true);
    };
    const handleCreate = () => {
        // Inisialisasi data baru
        setEditUser({
            title: "",
            status: "",
            content: "",
        });
        setIsEditing(false); // Menandakan ini adalah operasi pembuatan
        setOpenModal(true); // Membuka modal
    };

    const handleDelete = (row) => {
        if (
            window.confirm(
                `Are you sure you want to delete post with ID: ${row.original.id}?`
            )
        ) {
            // Kirim request DELETE ke server
            router.delete(`/admin/posts/${row.original.id}`, {
                onSuccess: () => {
                    // Hapus data dari state setelah berhasil
                    setData((prevData) =>
                        prevData.filter((user) => user.id !== row.original.id)
                    );
                    enqueueSnackbar("Data successfully deleted!", {
                        variant: "success",
                    });
                },
                onError: (resp) => {
                    setValidationErrors(resp);
                    enqueueSnackbar("Failed to delete data!", {
                        variant: "error",
                    });
                },
            });
        }
    };
    const handleSave = () => {
        if (isEditing) {
            // Edit operation
            router.patch(`/admin/posts/${editUser.id}`, editUser, {
                onSuccess: (response) => {
                    setData((prevData) =>
                        prevData.map((post) =>
                            post.id === editUser.id
                                ? { ...post, ...editUser }
                                : post
                        )
                    );
                    setOpenModal(false);
                    enqueueSnackbar("Data successfully updated!", {
                        variant: "success",
                    });
                },
                onError: (e) => {
                    setValidationErrors(e);
                    enqueueSnackbar("Failed to update data!", {
                        variant: "error",
                    });
                },
            });
        } else {
            router.post(`/admin/posts`, editUser, {
                onSuccess: () => {
                    enqueueSnackbar("Data successfully created!", {
                        variant: "success",
                    });
                    window.location.reload();
                },
                onError: (resp) => {
                    setValidationErrors(resp);
                    enqueueSnackbar("Failed to update data!", {
                        variant: "error",
                    });
                },
            });
        }
    };
    const columns = [
        { accessorKey: "id", header: "ID", enableEditing: false },
        { accessorKey: "title", header: "Title" },
        { accessorKey: "status", header: "Status" },
        {
            accessorKey: "actions",
            header: "Actions",
            enableSorting: true,
            enableColumnFilter: true,

            Cell: ({ row }) => (
                <Box sx={{ display: "flex", gap: "0.5rem" }}>
                    <Tooltip title="Edit">
                        <IconButton
                            color="info"
                            onClick={() => handleEdit(row)}
                        >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton
                            color="error"
                            onClick={() => handleDelete(row)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            ),
        },
    ];
    const config = {
        height: 400,
        toolbar: true,
        toolbarAdaptive: true,
        toolbarInline: false,
        toolbarSticky: false,
        readonly: false,
        placeholder: "Start typing...",
        uploader: {
            insertImageAsBase64URI: true,
        },
    };

    const handleEditorChange = (newContent) => {
        setEditUser({
            ...editUser,
            content: newContent, // Update the content state with the editor's content
        });
    };

    return (
        <div className="flex  justify-center w-full h-screen items-center ">
            <MaterialReactTable
                columns={columns}
                data={data}
                renderTopToolbarCustomActions={() => (
                    <Button variant="contained" onClick={handleCreate}>
                        Add New User
                    </Button>
                )}
            />

            {/* Modal for Create/Edit */}
            <Dialog
                open={openModal}
                onClose={() => setOpenModal(false)}
                fullWidth
            >
                <DialogTitle>
                    {isEditing ? "Edit User" : "Create User"}
                </DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" gap="1rem">
                        <TextField
                            style={{ maxWidth: "400px" }}
                            error={!!validationErrors.title}
                            helperText={validationErrors.title}
                            required
                            id="filled-basic"
                            variant="filled"
                            label="title"
                            value={editUser?.title || ""}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    title: e.target.value,
                                })
                            }
                        />
                        <TextField
                            style={{ maxWidth: "400px" }}
                            error={!!validationErrors.status}
                            helperText={validationErrors.status}
                            required
                            id="filled-basic"
                            variant="filled"
                            label="status"
                            value={editUser?.status || ""}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    status: e.target.value,
                                })
                            }
                        />
                        {/* Jodit Editor for Content */}
                    </Box>

                    <div className="w-full flex-col">
                        <label
                            htmlFor="content"
                            className="block text-sm font-semibold mb-2"
                        >
                            Content:
                        </label>
                        <JoditEditor
                            value={editUser?.content || ""} // Controlled value
                            onChange={handleEditorChange} // Updates the state
                            config={config} // Optional Jodit configuration
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenModal(false)}>Cancel</Button>
                    <Button variant="contained" onClick={handleSave}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Index;
