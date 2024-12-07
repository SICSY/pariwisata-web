import React from "react";
import DOMPurify from "dompurify"; // Pastikan DOMPurify terinstal

const BeritaDetail = ({ post }) => {
    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
            {post ? (
                <>
                    <h1 className="text-3xl font-bold mb-4 border-b border-gray-700 pb-2">
                        {post.title}
                    </h1>
                    <h2 className="text-sm text-gray-400 italic mb-6">
                        Status: {post.status}
                    </h2>
                    <span> Di upload :{post.created_at.split("T")[0]}</span>
                    {/* Menampilkan konten HTML dengan styling */}
                    <div
                        className="prose prose-invert"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(post.content),
                        }}
                    />
                </>
            ) : (
                <p className="text-center text-gray-500">Data tidak ada</p>
            )}
        </div>
    );
};

export default BeritaDetail;
