export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6 w-full">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} SALCEDO. All rights reserved.</p>
      </div>
    </footer>
  );
}