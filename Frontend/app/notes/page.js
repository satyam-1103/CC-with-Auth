import React from "react";
import Image from "next/image";
import imageCSE from "/public/cse.svg";

const NotesData = {
  CSE: {
    title: "CSE",
    image: "cse.svg",
    Description: "Complete CSE notes for BTech.",
    link: "https://drive.google.com/drive/folders/1nxOz5FWRr-dBSXbPJxKznkIJVAs8hNmG?usp=drive_link",
  },
  IT: {
    title: "IT",
    image: "/it-2.svg",
    Description: "Complete IT notes for BTech.",
    link: "https://drive.google.com/drive/folders/1_JbLm1GRdAfwgeMzMXRv7tOdycXfvSU8?usp=drive_link",
  },

  ECE: {
    title: "ECE",
    image: "/electronics.svg",
    Description: "Complete ECE notes for BTech.",
    link: "https://drive.google.com/drive/folders/1_JbLm1GRdAfwgeMzMXRv7tOdycXfvSU8?usp=drive_link",
  },
};

const Card = () => {
  return (
    <>
      <div className="grid place-items-center bg-primary text-base-content p-10 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {Object.values(NotesData).map((note, index) => (
            <div key={index} className="card w-full max-h-[560px] md:max-h-full lg:max-h-full glass p-10 ">
              <figure className="hover:scale-110 transition duration-300 ease-in-out">
                <Image src={note.image} alt={note.title} width={250} height={500} />
              </figure>
              <div className="card-body hover:scale-110 transition duration-300 ease-in-out ">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.Description}</p>
                <div className="card-actions justify-end">
                  <a href={note.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary">Find Notes</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
