import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Urban IT Solution"
            subTitle="Jr. Software Engineer"
            result="1st Floor, House: 8, Road: 4, Mirpur-10, Dhaka, Bangladesh"
            des="As a Jr. Software Engineer at Urban IT Solution, I design, develop, and maintain software, collaborating with teams to deliver high-quality solutions."
          />
          <ResumeCard
            title="Imo Holidays"
            subTitle="Web Developer (Wordpress)"
            result="Badda Link Rode, Dhaka, Bangladesh"
            des="Whatever your life’s work is, do it well. A man should do his job so well that the living, the dead, and the unborn could do it no better"
          />
          <ResumeCard
            title="Bank Asia (Agent Banking)"
            subTitle="Customer Service Officer (CSO)"
            result="Shahapur, Chatkhil, Bangladesh"
            des="Whatever your life’s work is, do it well. A man should do his job so well that the living, the dead, and the unborn could do it no better"
          />
          <ResumeCard
            title="Tosil Office"
            subTitle="Computer Operator"
            result="Shahapur, Chatkhil, Bangladesh"
            des="Work takes on new meaning when you feel you are pointed in the right direction. Otherwise, it’s just a job, and life is too short for that."
          />
          <ResumeCard
            title="Bank Asia (Agent Banking)"
            subTitle="Customer Service Officer (CSO)"
            result="Feni Tomijiya Mosjid Rode, Feni, Bangladesh"
            des="You know you are on the road to success if you would do your job, and not be paid for it."
          />
          <ResumeCard
            title="GMG Trading (Pvt.) Ltd."
            subTitle="Computer Operator"
            result="House # 111, Road # 13, Block # E. Banani.. P.C. 1213, Gulshan, Dhaka"
            des="You know you are on the road to success if you would do your job, and not be paid for it."
          />
          <ResumeCard
            title="Shahajalal Islami Bank (Agent Banking)."
            subTitle="Customer Service Officer (CSO)"
            result="Shahapur, Chatkhil, Bangladesh"
            des="You know you are on the road to success if you would do your job, and not be paid for it."
          />
          <ResumeCard
            title="Assistant Teacher."
            subTitle="Bangla & English"
            result="Gopairbag, Shahapur, Chatkhil, Bangladesh"
            des="You know you are on the road to success if you would do your job, and not be paid for it."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Imo Holidays"
            subTitle="Web Developer (Wordpress)"
            result="Badda Link Rode, Dhaka, Bangladesh"
            des="Whatever your life’s work is, do it well. A man should do his job so well that the living, the dead, and the unborn could do it no better"
          />
          <ResumeCard
            title="Bank Asia (Agent Banking)"
            subTitle="Customer Service Officer (CSO)"
            result="Shahapur, Chatkhil, Bangladesh"
            des="Whatever your life’s work is, do it well. A man should do his job so well that the living, the dead, and the unborn could do it no better"
          />
          <ResumeCard
            title="Tosil Office"
            subTitle="Computer Operator"
            result="Shahapur, Chatkhil, Bangladesh"
            des="Work takes on new meaning when you feel you are pointed in the right direction. Otherwise, it’s just a job, and life is too short for that."
          />
          <ResumeCard
            title="Bank Asia (Agent Banking)"
            subTitle="Customer Service Officer (CSO)"
            result="Feni Tomijiya Mosjid Rode, Feni, Bangladesh"
            des="You know you are on the road to success if you would do your job, and not be paid for it."
          />
          <ResumeCard
            title="GMG Trading (Pvt.) Ltd."
            subTitle="Computer Operator"
            result="House # 111, Road # 13, Block # E. Banani.. P.C. 1213, Gulshan, Dhaka"
            des="You know you are on the road to success if you would do your job, and not be paid for it."
          />
          <ResumeCard
            title="Shahajalal Islami Bank (Agent Banking)."
            subTitle="Customer Service Officer (CSO)"
            result="Shahapur, Chatkhil, Bangladesh"
            des="You know you are on the road to success if you would do your job, and not be paid for it."
          />
          <ResumeCard
            title="Assistant Teacher."
            subTitle="Bangla & English"
            result="Gopairbag, Shahapur, Chatkhil, Bangladesh"
            des="You know you are on the road to success if you would do your job, and not be paid for it."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
