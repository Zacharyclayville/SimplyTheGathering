import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">Admin List</h2>
        <p className="text-gray-500">Fetching admin data will go here...</p>
      </main>
      <Footer />
    </div>
  );
}
