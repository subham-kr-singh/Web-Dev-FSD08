const banners = {
  Category:
    "https://images-static.nykaa.com/uploads/e0806911-2149-4060-b38d-bd29acbce6c5.jpg?tr=cm-pad_resize,w-1200",
  Brands:
    "https://images-static.nykaa.com/uploads/1a0f095d-3bba-484d-a05b-83c223c598d8.jpg?tr=cm-pad_resize,w-1200",
  Luxe:
    "https://images-static.nykaa.com/uploads/cd43a95a-b83d-4079-a239-8fb6e89b2452.jpg?tr=cm-pad_resize,w-1200",
  "Nykaa Fashion":
    "https://images-static.nykaa.com/uploads/4292036f-2556-452e-9755-69e2ca31f709.jpg?tr=cm-pad_resize,w-1200",
  "Beauty Advice":
    "https://images-static.nykaa.com/uploads/ebcd53e6-f195-42d5-819b-a4eb3bf370d2.jpg?tr=cm-pad_resize,w-1200",
  Skin:
    "https://images-static.nykaa.com/creatives/5bec8fa8-a993-4165-a6c3-531bd4c66a15/default.jpg?tr=cm-pad_resize,w-1200",
  Hair:
    "https://images-static.nykaa.com/creatives/86538429-592f-44dd-b656-80e4be8762ce/default.jpg?tr=cm-pad_resize,w-1200",
  "Bath & Body":
    "https://images-static.nykaa.com/creatives/99c5454f-5c26-42e7-9566-09501c63e21b/default.jpg?tr=cm-pad_resize,w-1200",
  Natural:
    "https://images-static.nykaa.com/creatives/44c33166-1740-4504-a686-a8fd2feb0859/default.jpg?tr=cm-pad_resize,w-1200",
  "Mom & Baby":
    "https://images-static.nykaa.com/creatives/5ec5f16d-5e42-4907-b0f4-3b73dbdc7fde/default.jpg?tr=cm-pad_resize,w-1200",
  "Health & Wellness":
    "https://images-static.nykaa.com/creatives/d67a5d45-dad1-4166-bef0-cd48363d9679/default.jpg?tr=cm-pad_resize,w-1200",
  Men:
    "https://images-static.nykaa.com/uploads/26bb9f42-40b5-4f87-a6d4-6dbfbfaafcb1.png?tr=cm-pad_resize,w-1200",
  Fragrance:
    "https://images-static.nykaa.com/uploads/b6838fe8-d164-4997-bb9e-737fc86bc39a.jpg?tr=cm-pad_resize,w-1200",
  "Lingerie & Accessories":
    "https://images-static.nykaa.com/uploads/b537749a-5f33-4d7d-899d-dc87444421ff.jpg?tr=cm-pad_resize,w-1200",
};

const GenericPage = ({ title }) => {
  return (
    <div className="min-h-screen pb-10">
      <h1 className="text-3xl font-bold text-pink-500 text-center py-8">
        {title}
      </h1>
      <p className="text-center text-gray-600 mb-6 px-4">
        Explore the best in {title.toLowerCase()} — curated just for you.
      </p>
      <div className="flex flex-col items-center gap-4 px-4 max-w-5xl mx-auto">
        <img
          src={banners[title]}
          alt={title}
          className="w-full rounded-lg"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
          <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
            <p className="font-semibold text-gray-800">New Arrivals</p>
            <p className="text-sm text-gray-500 mt-2">Fresh picks every week</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
            <p className="font-semibold text-gray-800">Best Sellers</p>
            <p className="text-sm text-gray-500 mt-2">Top rated products</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center bg-white">
            <p className="font-semibold text-gray-800">Offers</p>
            <p className="text-sm text-gray-500 mt-2">Up to 50% off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
