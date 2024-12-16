import React from 'react';

const Footer = () => {
    return (
        <footer 
            className="bg-blue-600 text-white py-4 rounded-top-md bottom-0" >
            <div className="max-w-6xl mx-auto text-center">
                <ul className="flex justify-center space-x-4">
                    <li><a href="/about" className="hover:underline">About Us</a></li>
                    <li><a href="/services" className="hover:underline">Services</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                    <li><a href="/faq" className="hover:underline">FAQ</a></li>
                </ul>
                <p className="mb-2 mt-4">&copy; {new Date().getFullYear()} MyBlogs. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;