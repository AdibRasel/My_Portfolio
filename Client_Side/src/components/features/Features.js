import React from 'react';
import { AiFillAppstore, AiFillCode } from "react-icons/ai";
import { FaMobile, FaGlobe, FaDatabase, FaTools } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiWordpress, SiAdobexd } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {/* MERN Stack Development */}
        <Card
          title="MERN Stack Web Development"
          des="Building dynamic and scalable web applications using MongoDB, Express.js, React.js, and Node.js."
          icon={<AiFillCode />}
        />
        {/* App Development */}
        <Card
          title="Cross-Platform App Development"
          des="Developing seamless Android and iOS applications using React Native and Flutter."
          icon={<AiFillAppstore />}
        />
        {/* SEO Optimization */}
        <Card
          title="SEO & Performance Optimization"
          des="Enhancing website visibility and performance to rank higher on search engines."
          icon={<SiProgress />}
        />
        {/* Mobile Development */}
        <Card
          title="Mobile Application Development"
          des="Creating user-friendly and efficient mobile solutions for Android and iOS platforms."
          icon={<FaMobile />}
        />
        {/* UX Design */}
        <Card
          title="UX/UI Design"
          des="Designing intuitive user experiences and beautiful user interfaces for digital platforms."
          icon={<SiAntdesign />}
        />
        {/* Website Hosting */}
        <Card
          title="Website Hosting & Deployment"
          des="Providing secure and reliable hosting solutions for websites and applications."
          icon={<FaGlobe />}
        />
        {/* WordPress Development */}
        <Card
          title="WordPress Website Development"
          des="Crafting fully functional and visually appealing websites using WordPress."
          icon={<SiWordpress />}
        />
        {/* Database Management */}
        <Card
          title="Database Management"
          des="Efficiently handling and maintaining databases like MongoDB and MySQL for optimal performance."
          icon={<FaDatabase />}
        />
        {/* Graphic Design */}
        <Card
          title="Graphic Design"
          des="Creating stunning visuals and graphics using Adobe Photoshop and Illustrator."
          icon={<SiAdobexd />}
        />
        {/* Technical Support */}
        <Card
          title="Technical Support & Maintenance"
          des="Providing ongoing support and troubleshooting for your digital platforms."
          icon={<FaTools />}
        />
      </div>
    </section>
  );
};

export default Features;
