import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-300 text-base-content p-1 mt-auto flex flex-col items-center h-[30px] justify-end">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved created
            by Sushant Bhau
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
