import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Index</a>
        </Link>
      </li>
      <li>
        <Link href="/contact-us">
          <a>Contact Us</a>
        </Link>
      </li>
      <li>
        <Link href="/become-a-dealer">
          <a>Become a dealer</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
