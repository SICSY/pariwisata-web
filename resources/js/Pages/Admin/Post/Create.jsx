import { useMemo, useState } from "react";
import { router } from "@inertiajs/react";
import JoditEditor from "jodit-react";

export default function Create() {
    const [values, setValues] = useState({
        title: "",
        content: "",
        status: "draft",
    });

    // Handle content changes in the editor
    function handleEditorChange(newContent) {
        setValues((prevValues) => ({
            ...prevValues,
            content: newContent,
        }));
    }

    // Define file upload handler for the Jodit editor
    // Jodit Editor configuration
    const config = useMemo(
        () => ({
            height: 400,
            toolbar: true,
            toolbarAdaptive: false,
            toolbarInline: false,
            toolbarSticky: false,
            readonly: false,
            placeholder: "Start typing...",
            uploader: {
                insertImageAsBase64URI: true,
            },
        }),
        []
    );

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("admin.post.store"), values);
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-white mb-6">
                Create New Post
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title Input */}
                <div>
                    <label
                        htmlFor="title"
                        className="block text-white text-sm font-semibold mb-2"
                    >
                        Title:
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={values.title}
                        onChange={(e) =>
                            setValues({ ...values, title: e.target.value })
                        }
                        className="w-full px-4 py-2 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter title"
                    />
                </div>

                {/* Content (Jodit Editor) */}
                <div>
                    <label
                        htmlFor="content"
                        className="block text-white text-sm font-semibold mb-2"
                    >
                        Content:
                    </label>
                    <JoditEditor
                        value={values.content}
                        onChange={handleEditorChange}
                        config={config}
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Status Checkbox */}
                <div>
                    <label className="flex items-center text-white text-sm">
                        <input
                            type="checkbox"
                            checked={values.status === "published"}
                            onChange={(e) =>
                                setValues((prevValues) => ({
                                    ...prevValues,
                                    status: e.target.checked
                                        ? "published"
                                        : "draft",
                                }))
                            }
                            className="mr-2"
                        />
                        <span>Publish Post</span>
                    </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
