export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-blue-600"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            স্বাগতম আমাদের ওয়েবসাইটে
          </h1>
          <p className="text-xl mb-8">
            আমরা আপনার সেবায় সর্বদা প্রস্তুত
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            আরও জানুন
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">আমাদের সেবাসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">ওয়েব ডিজাইন</h3>
              <p className="text-gray-600">আধুনিক ও আকর্ষণীয় ওয়েবসাইট ডিজাইন</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">মোবাইল অ্যাপ</h3>
              <p className="text-gray-600">Android ও iOS অ্যাপ ডেভেলপমেন্ট</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">ডিজিটাল মার্কেটিং</h3>
              <p className="text-gray-600">সোশ্যাল মিডিয়া ও SEO সার্ভিস</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}