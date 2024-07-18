import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/29f3712b-e780-492c-8d50-ab34235a5ed3-khizyh.jpg",
  "https://utfs.io/f/2067773d-7dc3-40ca-a7a6-66294cf5b64c-ijhxlb.jpg",
  "https://utfs.io/f/dc5b2709-baa1-4a86-b71f-3f3eb643438b-b2fxk6.jpg",
  "https://utfs.io/f/4bfe2e2a-1e08-4b05-8673-aa0ba1345cee-npkhgg.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
