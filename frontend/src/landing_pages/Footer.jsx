import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-50  mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Logo & Socials */}
          <div>
            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Zerodha Logo"
              className="w-40 mb-3"
            />
            <p className="text-sm text-gray-600">
              © 2010 - 2025, Zerodha Broking Ltd.
            </p>
            <p className="text-sm text-gray-600 mb-4">All rights reserved.</p>

            {/* Social Links Row 1 */}
            <div className="flex space-x-4 text-gray-600 text-xl mb-4">
              <a
                href="https://twitter.com/zerodhaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://facebook.com/zerodha.social"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/zerodhaonline/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/company/zerodha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Social Links Row 2 */}
            <div className="flex space-x-4 text-gray-600 text-xl">
              <a
                href="https://www.youtube.com/@zerodhaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://t.me/zerodhain"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500 transition"
              >
                <FaTelegram />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="font-semibold mb-3">Company</p>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Referral programme
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Press & media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Zerodha cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <p className="font-semibold mb-3">Support</p>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Support portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  List of charges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <p className="font-semibold mb-3">Account</p>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Open an account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  60 day challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="text-sm text-gray-500 leading-relaxed  pt-6 space-y-4">
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            For complaints write to{" "}
            <span className="text-blue-600">complaints@zerodha.com</span> or{" "}
            <span className="text-blue-600">dp@zerodha.com</span>. Please read
            the Risk Disclosure Document as prescribed by SEBI | ICF.
          </p>

           <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="mt-2 text-center">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-500">
            <li>
              <a
                rel="nofollow"
                href="https://nseindia.com"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                NSE
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://www.bseindia.com/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                BSE
              </a>
            </li>
            <li>
              <a
                rel="nofollow"
                href="https://www.mcxindia.com/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                MCX
              </a>
            </li>
            <li>
              <a
                href="https://zerodha.com/terms-and-conditions/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                Terms &amp; conditions
              </a>
            </li>
            <li>
              <a
                href="https://zerodha.com/policies-and-procedures/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                Policies &amp; procedures
              </a>
            </li>
            <li>
              <a
                href="https://zerodha.com/privacy-policy/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                href="https://zerodha.com/disclosure/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                Disclosure
              </a>
            </li>
            <li>
              <a
                href="https://zerodha.com/investor-attention/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                For investor's attention
              </a>
            </li>
            <li>
              <a
                href="https://zerodha.com/tos/investor-charter/"
                target="_blank"
                className="hover:text-blue-600 transition"
              >
                Investor charter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
