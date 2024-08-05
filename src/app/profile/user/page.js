import Image from "next/image";

export default function UserProfile() {


  return (
    <>
      <div className="container mx-auto p-4 mt-5">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center">
            {/* <Image
              src="https://placekitten.com/200/200"
              alt="User Profile"
              className="w-16 h-16 rounded-full"
              width={200} // Specify the actual width of the image
              height={200} // Specify the actual height of the image
            /> */}
            <div className="ml-4">
              <h1 className="text-2xl font-semibold">John Doe</h1>
              <p className="text-gray-500">Web Developer</p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">About Me</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              consectetur libero.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
