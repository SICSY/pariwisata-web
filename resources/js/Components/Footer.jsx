import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-white/80 text-black py-10 relative   ">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p className="text-sm text-black/50">
                            We are committed to providing the best service and
                            support for our users. Contact us for more
                            information.
                        </p>
                    </div>
                    {/* Links Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/destinasi"
                                    className="text-black/50 hover:text-white"
                                >
                                    Destinasi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/industri-pariwisata"
                                    className="text-black/50 hover:text-white"
                                >
                                    Industri Pariwisata
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-black/50 hover:text-white"
                                >
                                    Profil
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-black/50 hover:text-white"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <p className="text-sm text-black/50">
                            Email: support@example.com
                        </p>
                        <p className="text-sm text-black/50">
                            Phone: +123 456 789
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <a
                                href="#"
                                className="text-black/50 hover:text-white"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="text-black/50 hover:text-white"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="text-black/50 hover:text-white"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bottom Footer */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} YourCompany. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
