import { Button } from ".";

export default function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement newsletter subscription logic
    console.log("Newsletter subscription submitted");
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Stay connected to us</h2>
          <p className="text-gray-400 mb-6">Subscribe to our newsletter</p>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              placeholder="Email address here"
              className="flex-grow mr-2 bg-white text-black rounded-md px-4 py-1"
              required
            />
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
}
