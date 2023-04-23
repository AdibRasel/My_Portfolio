import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Higher Secondary School Certificate(HSC)"
            subTitle="Sompara College"
            result="3.33"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Secondary School Certificate(SSC)"
            subTitle="Shahapur M L High School"
            result="3.27"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Junior School Certificate (JSC)"
            subTitle="Shahapur M L High School"
            result="3.77"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Primary School Certificate(PSC)"
            subTitle="Narayonpur 1 Praimari School"
            result="3.45"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
}

export default Education