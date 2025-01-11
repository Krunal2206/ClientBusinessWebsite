export default function Footer() {
    return (
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} H & E Computer Sales & Services. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  