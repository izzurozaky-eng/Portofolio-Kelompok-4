import { useState } from "react";

export default function WhatsAppContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "62xxxxxxxxxx"; // ← ganti nomor WA kamu tanpa 0 (pakai 62)

    const text = `
Halo, saya *${formData.name}*
Email: ${formData.email}

Pesan:
${formData.message}
`.trim();

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg p-8 rounded-xl mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold mb-5 text-gray-800">Kirim Pesan via WhatsApp</h2>

      <div className="flex flex-col gap-4">

        <input
          type="text"
          name="name"
          placeholder="Nama"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Tulis pesan kamu..."
          rows="5"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        ></textarea>

        <button
          onClick={sendToWhatsApp}
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-5 rounded-lg font-semibold transition"
        >
          Kirim ke WhatsApp
        </button>
      </div>
    </div>
  );
}
