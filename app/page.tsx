'use client';

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-[#0b0d13] m-0 p-0 fixed inset-0">
      <iframe
        src="/index.html"
        title="Chinese Blossom Tree 3D"
        className="w-full h-full border-none block m-0 p-0"
        allow="accelerometer; gyroscope; autoplay"
      />
    </main>
  );
}
