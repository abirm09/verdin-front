import FB from "@/assets/icons/png/facebook.png";
import insta from "@/assets/icons/png/instagram.png";
import X from "@/assets/icons/png/twitter.png";
import yt from "@/assets/icons/png/youtube.png";
import Logo from "@/assets/logo.png";
import { Container } from "@/components";
import { AtSign, LocateFixedIcon, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    id: 1,
    title: "Facebook",
    icon: FB,
    link: "https://www.facebook.com/",
  },
  {
    id: 5,
    title: "youtube",
    icon: yt,
    link: "https://www.youtube.com/",
  },
  {
    id: 2,
    title: "X",
    icon: X,
    link: "https://x.com/",
  },
  {
    id: 3,
    title: "Instagram",
    icon: insta,
    link: "https://www.instagram.com/",
  },
];

const Footer = () => {
  return (
    <footer className="pt-10 mt-5 md:pt-10 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + Description */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src={Logo.src}
                alt="Logo"
                height={Logo.height}
                width={Logo.width}
                className={`w-[112px] h-[26.4px] lg:w-[140px] lg:h-[33px] transition-all`}
                priority
              />
            </div>
            <p className="text-sm font-semibold text-muted-foreground">
              Shop smarter — great products, secure payments, fast delivery, and hassle-free
              returns, backed by 24/7 support.
            </p>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Information</h4>
            <ul className="space-y-2 text-sm cursor-pointer font-semibold text-muted-foreground">
              <li>
                <Link href={"/about-us"}>About</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"/faq"}>FAQ</Link>
              </li>
              <li>
                <Link href={"/terms-and-conditions"}>Terms and conditions</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/return-policy"}>Return Policy</Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-lg font-semibold mb-3">My Account</h4>
            <ul className="space-y-2 text-sm cursor-pointer font-semibold text-muted-foreground">
              <li>
                <Link href={"/track-order"}>Track Order</Link>
              </li>
              <li>
                <Link href={"/wishlist"}>Wishlist</Link>
              </li>
              <li>
                <Link href={"/my-account"}>My Account</Link>
              </li>
              <li>
                <Link href={"/my-account/orders"}>Order History</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Talk To Us</h4>

            <div className="flex items-center text-sm mb-2 font-semibold text-muted-foreground">
              <Phone className="mr-2 w-5 h-5" />
              +880 1234 567891
            </div>
            <div className="flex items-center text-sm mb-2 font-semibold text-muted-foreground">
              <AtSign className="mr-2 w-5 h-5" /> hello@verdin.com
            </div>
            <div className="flex items-center text-sm font-semibold text-muted-foreground">
              <LocateFixedIcon className="mr-2 mt-1 w-5 h-5" />
              Dhaka, Bangladesh
            </div>
            <div>
              <nav>
                <ul className="flex gap-2 mt-5">
                  {socialLinks.map((link) => (
                    <li key={link.title}>
                      <Link href={link.link}>
                        <Image
                          src={link.icon.src}
                          alt={link.title + " icon"}
                          width={24}
                          height={24}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <hr className="my-5 border-border" />
        <p className="font-semibold text-sm text-muted-foreground pb-5 text-center">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
