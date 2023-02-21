import React from "react";

interface Props {
  className: string;
}

const Footer = ({ className }: Props) => (
  <footer className={className}>
    <address className="footer-copyright">
      &copy; ZZOMAN All rights reserved.
    </address>
  </footer>
);

export default Footer;
