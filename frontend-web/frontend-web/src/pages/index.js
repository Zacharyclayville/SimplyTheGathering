import Header from "../components/Header";
import Footer from "../components/Footer";

const mockAdmins = [
  { id: 1, name: "Jeremy Skrdlant", email: "jeremy.skrdlant@fhnw.edu" },
  { id: 2, name: "Morgan Pritchard", email: "morgan.pritchard@nwtkc.edu" },
  { id: 3, name: "Zachary Clayville", email: "zachary.clayville@example.com" },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold mb-6">Admin List</h2>
        <ul className="w-full max-w-md space-y-4">
          {mockAdmins.map((admin) => (
            <li
              key={admin.id}
              className="p-4 border rounded shadow-sm hover:bg-gray-50 transition"
            >
              <h3 className="text-lg font-semibold">{admin.name}</h3>
              <p className="text-sm text-gray-600">{admin.email}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
