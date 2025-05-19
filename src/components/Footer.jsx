// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="p-6 text-center border-t border-gray-200 dark:border-gray-700 mt-6">
      <p className="text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
