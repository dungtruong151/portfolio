import Link from "next/link";

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/dungtruong151/",
    icon: <FaFacebook />,
  },
  {
    name: "Github",
    href: "https://github.com/dungtruong151",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/dungtruong151/",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    href: "https://x.com/ttdung151",
    icon: <FaTwitter />,
  },
];

export default function SocialsGroup() {
  return (
    <div className="flex gap-2">
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.href}
            className="text-orange-500 border-2 border-orange-500 rounded-full p-2 m-2 hover:bg-orange-500 hover:text-black transition-all"
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
