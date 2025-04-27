import { useState } from "react";

const tabs = [
  { id: "tab1", label: "Home" },
  { id: "tab2", label: "About" },
  { id: "tab3", label: "Services" },
  { id: "tab4", label: "Contact" },
  { id: "tab5", label: "FAQ" },
];

const tabContent = {
  tab1: (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Welcome Home</h2>
      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas quae
        incidunt nulla ex amet debitis aperiam. Voluptate, deleniti accusantium
        eaque commodi aut ipsum officiis rerum? Voluptas sint quae voluptates
        totam.
      </p>
    </div>
  ),
  tab2: (
    <div>
      <h2 className="mb-4 text-2xl font-bold">About</h2>
      <p className="mb-4">Learn more about this page</p>
      <span className="border-l-4 border-purple-500 px-4 py-2 italic bg-purple-100">
        &quot;Our Mission is to provide innovative solutions&quot;
      </span>
      <p className="mt-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, nisi.
        Aspernatur iure ullam error veritatis ratione dolores quaerat, possimus
        nulla aliquam ipsa corrupti beatae debitis voluptates in, ipsam
        repellendus esse.
      </p>
    </div>
  ),
  tab3: (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Services</h2>
      <p className="mb-4">
        We offer a wide range of services to meet your needs
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-purple-100 p-4 text-center">
          <h3 className="font-bold">Services 1</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt
            deleniti officia, iusto sed dicta atque pariatur minima
            reprehenderit tempora voluptatem debitis! Pariatur quidem deleniti
            reiciendis harum, labore praesentium at!
          </p>
        </div>
        <div className="rounded-xl bg-purple-100 p-4 text-center">
          <h3 className="font-bold">Services 2</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt
            deleniti officia, iusto sed dicta atque pariatur minima
            reprehenderit tempora voluptatem debitis! Pariatur quidem deleniti
            reiciendis harum, labore praesentium at!
          </p>
        </div>
        <div className="rounded-xl bg-purple-100 p-4 text-center">
          <h3 className="font-bold">Services 3</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt
            deleniti officia, iusto sed dicta atque pariatur minima
            reprehenderit tempora voluptatem debitis! Pariatur quidem deleniti
            reiciendis harum, labore praesentium at!
          </p>
        </div>
        <div className="rounded-xl bg-purple-100 p-4 text-center">
          <h3 className="font-bold">Services 4</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt
            deleniti officia, iusto sed dicta atque pariatur minima
            reprehenderit tempora voluptatem debitis! Pariatur quidem deleniti
            reiciendis harum, labore praesentium at!
          </p>
        </div>
      </div>
    </div>
  ),
  tab4: (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Contact</h2>
      <p className="mb-4">Get in touch with me</p>
      <form action="" className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-xl border p-2 outline-none ring-2 ring-transparent focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border p-2 outline-none ring-2 ring-transparent focus:ring-purple-400"
        />
        <textarea
          name=""
          id=""
          placeholder="Your Message"
          className="w-full resize-none rounded-xl border p-2 outline-none ring-2 ring-transparent focus:ring-purple-400"
        ></textarea>
        <button className="rounded-full bg-purple-500 px-4 py-2 text-white hover:bg-purple-600">
          Send
        </button>
      </form>
    </div>
  ),
  tab5: (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold">Q: What is your Ambition?</h3>
          <p>A: To become a Full Stack Developer</p>
        </div>
        <div>
          <h3 className="font-bold">Q: What is your Favourite Channel?</h3>
          <p>A: Dheen Dev</p>
        </div>
        <div>
          <h3 className="font-bold">Q: What is your Goal?</h3>
          <p>A: To become a Undisputable Developer</p>
        </div>
      </div>
    </div>
  ),
};

function Tab() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300">
      <div className="max-w-[500px] min-h-[500px] max-h-[500px] overflow-y-hidden rounded-3xl border bg-white p-8 mx-10 shadow-xl space-y-5">
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-semibold ${
                activeTab === tab.id
                  ? "border-b-4 border-purple-500 text-purple-500"
                  : "text-gray-500 hover:text-purple-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
          <div className="mt-4 px-2">{tabContent[activeTab]}</div>
        </div>
      </div>
    </div>
  );
}

export default Tab;
