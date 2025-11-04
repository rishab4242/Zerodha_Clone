import React from "react";
import {
  FaPlusCircle,
  FaUserPlus ,
  FaPaperPlane,
  FaWallet,
  FaChartBar,
  FaCoins,
} from "react-icons/fa";

function CreateTicket() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">
        To create a ticket, select a relevant topic
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 1️⃣ Section */}
        <div className="bg-white shadow-sm p-6 rounded-md hover:shadow-md transition">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaPlusCircle className="text-xl text-blue-600" />
            Account Opening
          </h4>
          <div className="flex flex-col space-y-2">
            <a
              href="https://support.zerodha.com/category/account-opening/resident-individual"
              className="hover:text-blue-600"
            >
              Resident individual
            </a>
            <a
              href="https://support.zerodha.com/category/account-opening/minor"
              className="hover:text-blue-600"
            >
              Minor
            </a>
            <a
              href="https://support.zerodha.com/category/account-opening/nri-account-opening"
              className="hover:text-blue-600"
            >
              Non Resident Indian (NRI)
            </a>
            <a
              href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening"
              className="hover:text-blue-600"
            >
              Company, Partnership, HUF and LLP
            </a>
            <a
              href="https://support.zerodha.com/category/account-opening/glossary"
              className="hover:text-blue-600"
            >
              Glossary
            </a>
          </div>
        </div>

        {/* 2️⃣ Section */}
        <div className="bg-white shadow-sm p-6 rounded-md hover:shadow-md transition">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaUserPlus  className="text-blue-600 text-xl" />
            Your Zerodha Account
          </h4>
          <div className="flex flex-col space-y-2">
            <a
              href="https://support.zerodha.com/category/your-zerodha-account/your-profile"
              className="hover:text-blue-600"
            >
              Your Profile
            </a>
            <a
              href="https://support.zerodha.com/category/your-zerodha-account/account-modification-and-segment-addition"
              className="hover:text-blue-600"
            >
              Account modification
            </a>
            <a
              href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details"
              className="hover:text-blue-600"
            >
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
            <a
              href="https://support.zerodha.com/category/your-zerodha-account/nomination-process"
              className="hover:text-blue-600"
            >
              Nomination
            </a>
            <a
              href="https://support.zerodha.com/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares"
              className="hover:text-blue-600"
            >
              Transfer and conversion of securities
            </a>
          </div>
        </div>

        {/* 3️⃣ Section */}
        <div className="bg-white shadow-sm p-6 rounded-md hover:shadow-md transition">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaPaperPlane className="text-blue-600" />
            Kite
          </h4>
          <div className="flex flex-col space-y-2">
            <a
              href="https://support.zerodha.com/category/trading-and-markets/ipo"
              className="hover:text-blue-600"
            >
              IPO
            </a>
            <a
              href="https://support.zerodha.com/category/trading-and-markets/trading-faqs"
              className="hover:text-blue-600"
            >
              Trading FAQs
            </a>
            <a
              href="https://support.zerodha.com/category/trading-and-markets/margins"
              className="hover:text-blue-600"
            >
              Margin Trading Facility (MTF) and Margins
            </a>
            <a
              href="https://support.zerodha.com/category/trading-and-markets/charts-and-orders"
              className="hover:text-blue-600"
            >
              Charts and orders
            </a>
            <a
              href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges"
              className="hover:text-blue-600"
            >
              Alerts and Nudges
            </a>
            <a
              href="https://support.zerodha.com/category/trading-and-markets/general-kite"
              className="hover:text-blue-600"
            >
              General
            </a>
          </div>
        </div>

        {/* 4️⃣ Section */}
        <div className="bg-white shadow-sm p-6 rounded-md hover:shadow-md transition">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaWallet className="text-blue-600" />
            Funds and Withdrawals
          </h4>
          <div className="flex flex-col space-y-2">
            <a
              href="https://support.zerodha.com/category/funds/adding-funds"
              className="hover:text-blue-600"
            >
              Add Money
            </a>
            <a
              href="https://support.zerodha.com/category/funds/fund-withdrawal"
              className="hover:text-blue-600"
            >
              Withdraw Money
            </a>
            <a
              href="https://support.zerodha.com/category/funds/adding-bank-accounts"
              className="hover:text-blue-600"
            >
              Add bank accounts
            </a>
            <a
              href="https://support.zerodha.com/category/funds/mandate"
              className="hover:text-blue-600"
            >
              eMandates
            </a>
          </div>
        </div>

        {/* 5️⃣ Section */}
        <div className="bg-white shadow-sm p-6 rounded-md hover:shadow-md transition">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaChartBar className="text-blue-600" />
            Console and Reports
          </h4>
          <div className="flex flex-col space-y-2">
            <a
              href="https://support.zerodha.com/category/console/portfolio"
              className="hover:text-blue-600"
            >
              Portfolio
            </a>
            <a
              href="https://support.zerodha.com/category/console/corporate-actions"
              className="hover:text-blue-600"
            >
              Corporate actions
            </a>
            <a
              href="https://support.zerodha.com/category/console/ledger"
              className="hover:text-blue-600"
            >
              Funds statement
            </a>
            <a
              href="https://support.zerodha.com/category/console/reports"
              className="hover:text-blue-600"
            >
              Reports
            </a>
            <a
              href="https://support.zerodha.com/category/console/profile"
              className="hover:text-blue-600"
            >
              Profile
            </a>
            <a
              href="https://support.zerodha.com/category/console/segments"
              className="hover:text-blue-600"
            >
              Segments
            </a>
          </div>
        </div>

        {/* 6️⃣ Section */}
        <div className="bg-white shadow-sm p-6 rounded-md hover:shadow-md transition">
          <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaCoins className="text-blue-600" />
            Coin
          </h4>
          <div className="flex flex-col space-y-2">
            <a
              href="https://support.zerodha.com/category/mutual-funds/understanding-mutual-funds"
              className="hover:text-blue-600"
            >
              Mutual funds
            </a>
            <a
              href="https://support.zerodha.com/category/mutual-funds/nps"
              className="hover:text-blue-600"
            >
              National Pension Scheme (NPS)
            </a>
            <a
              href="https://support.zerodha.com/category/mutual-funds/fixed-deposits"
              className="hover:text-blue-600"
            >
              Fixed Deposit (FD)
            </a>
            <a
              href="https://support.zerodha.com/category/mutual-funds/features-on-coin"
              className="hover:text-blue-600"
            >
              Features on Coin
            </a>
            <a
              href="https://support.zerodha.com/category/mutual-funds/payments-and-orders"
              className="hover:text-blue-600"
            >
              Payments and Orders
            </a>
            <a
              href="https://support.zerodha.com/category/mutual-funds/coin-general"
              className="hover:text-blue-600"
            >
              General
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
