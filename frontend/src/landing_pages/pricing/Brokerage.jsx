import React from "react";

function Brokerage() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10">
      {/* Main Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center border-t border-gray-200 py-10">
        
        {/* Left Section */}
        <div className="md:col-span-2">
          <a href="#" className="no-underline hover:text-blue-600">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Brokerage calculator
            </h3>
          </a>
          <ul className="list-disc list-inside text-left text-gray-600 text-sm leading-relaxed space-y-3">
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per <span className="ml-5">executed order.</span>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center">
          <a
            href="#"
            className="no-underline hover:text-blue-600 transition"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              List of charges
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
