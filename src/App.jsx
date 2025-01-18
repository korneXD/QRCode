import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full flex-col gap-2">
        <h1 className="font-mono text-2xl">QR Code Generator</h1>
        <div className="flex justify-center items-center border p-4 border-black rounded-xl flex-col gap-4">
          {value ? <QRCode value={value} /> : <QRCode value="Made By Kornél" />}
          <input
            type="text"
            className="border border-black w-full rounded-lg text-center"
            placeholder="Your URL or Text..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
