import FooterMobile from "@/Components/FooterMobile";

import SideBar from "@/Components/SideBar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PostsIndex from "./post/Index";

const Post = ({ posts }) => {
    return (
        <main className="box-border w-full h-screen overflow-hidden">
            <div className="flex flex-col sm:flex-row">
                {/* Sidebar for Desktop */}
                <div className="hidden sm:block sm:w-64 bg-gray-900 text-white shadow-lg">
                    <SideBar />
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-gray-900  overflow-auto text-white">
                    <AuthenticatedLayout></AuthenticatedLayout>

                    <PostsIndex></PostsIndex>
                </div>
            </div>

            {/* FooterMobile for Small Screens */}
            {/* <FooterMobile links={links} /> */}
        </main>
    );
};

export default Post;
