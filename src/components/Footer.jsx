import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font bg-transparent">
        <div className="container px-5 pb-5 mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center sm:pl-2">
            <img src="/logo.png" alt="Logo" className="h-20 w-auto sm:h-28" />
            <div className="text-center sm:text-left sm:ml-4 mt-4 sm:mt-0">
              <span className="spicy-rice-regular text-3xl sm:text-5xl font-bold">
                Concreate Club
              </span>
              <p className="text-lg sm:text-3xl text-gray-100 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 mt-2 sm:mt-0">
                © 2024. All rights reserved 
              </p>
            </div>
          </div>

          <span className="inline-flex mt-4 sm:mt-0">
            <a
              href="https://www.facebook.com/people/Concreate-IITI/100054531757203/"
              target="_blank"
              className="text-white mx-2"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 sm:w-12 sm:h-12"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/concreate_iiti/"
              target="_blank"
              className="text-white mx-2"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 sm:w-12 sm:h-12"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/concreate-club-iit-indore/?originalSubdomain=in"
              target="_blank"
              className="text-white mx-2"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-10 h-10 sm:w-12 sm:h-12"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>

            <a
              href="mailto:concreate@iiti.ac.in"
              className="text-white mx-2"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 sm:w-12 sm:h-12"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={16} x={2} y={4} rx={2} ry={2} />
                <path d="M22 6L12 13 2 6" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
