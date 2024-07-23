import Image from "next/image";

export const metadata = {
  title: "Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className="container mx-auto px-8 py-16 text-base-content h-screen">
      <h1 className="text-5xl md:text-6xl text-center mb-12">Let&apos;s Keep in Touch</h1>
      <div className="flex flex-col md:flex-row items-center md:gap-12">
        <div className="md:flex-1 md:h-96 relative hidden md:block">
          <Image
            src="/contact.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <form className="flex-1 flex flex-col gap-6">
          <input type="text" placeholder="Name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <textarea
            className="textArea rounded-lg p-4 w-full bg-base-100 focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Message"
            rows="8"
          ></textarea>
          <button className="btn btn-wide" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
