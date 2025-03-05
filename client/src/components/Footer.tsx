import { Mail } from '../icons/Mail';
import { Github } from '../icons/Github';
import { Twitter } from '../icons/Twitter';
import { Linkedin } from '../icons/Linkedin';
import { Heart } from '../icons/Heart';

function Footer() {
    const socialLinks = [
        {
            icon: <Github/>,
            href: "https://github.com/nissha29/Melodia",
            label: "Github"
        },
        {
            icon: <Linkedin color="text-blue-600"/>,
            href: "https://www.linkedin.com/in/nisha-kashyap-5972a9273/",
            label: "LinkedIn"
        },
        {
            icon: <Twitter color='text-sky-500'/>,
            href: "https://x.com/Nisha_297",
            label: "Twitter"
        },
        {
            icon: <Mail />,
            href: "mailto:nishakashyap2907@gmail.com",
            label: "Email"
        }
    ];

    return (
        <footer className="bg-primary-bg text-white relative bg-blue-200/50">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
                
                    <div className="space-y-4">
                        <h3 className="text-xl text-gray-700 font-medium">About <span className='text-gray-700 font-semibold'>Brain</span><span className='text-blue-600 font-semibold'>Cache</span></h3>
                        <p className="text-gray-700">
                            Your digital knowledge vault. Remember everything that matters.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl text-gray-700 font-semibold">Connect With Us -</h3>
                        <div className="flex gap-4 items-center">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 transition-colors"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700/40 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-700">
                        © {new Date().getFullYear()} BrainCache. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 mt-4 sm:mt-0 text-gray-700 text-sm">
                        <span>Made with</span>
                        <Heart />
                        <span>by Nisha</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;