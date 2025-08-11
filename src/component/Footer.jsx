import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

function Footer() {
    return (
        <footer className=" border-t py-10 px-4 ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand / Logo */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">MyStore</h2>
                    <p className="text-sm text-gray-400">
                        Your one-stop shop for everything cool and trendy. Thank you for visiting us!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-primary/50 font-semibold text-sm">
                        <li><Link to="/" className="hover:text-primary">Home</Link></li>
                        <li><Link to="/products" className="hover:text-primary">Products</Link></li>
                        <li><Link to="/about" className="hover:text-primary">About</Link></li>
                        <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4 text-xl ">
                        <a href="#" className="hover:text-primary"><FaFacebook /></a>
                        <a href="#" className="hover:text-primary"><FaInstagram /></a>
                        <a href="#" className="hover:text-primary"><FaTwitter /></a>
                        <a href="#" className="hover:text-primary"><FaGithub /></a>
                    </div>
                </div>
            </div>

            <hr className="my-6 border-neutral/50" />

            <p className="text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} MyStore. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
