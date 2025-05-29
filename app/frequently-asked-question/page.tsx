'use client'
import React from 'react'
import FadeInSection from '../components/FadeInItem';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We’re open Monday to Saturday from 8:00 AM to 10:00 PM, and Sundays from 9:00 AM to 8:00 PM."
  },
  {
    question: "Do you have vegetarian or vegan options?",
    answer: "Absolutely! We offer a variety of vegetarian and vegan dishes, including plant-based coffees and desserts."
  },
  {
    question: "Can I make a reservation?",
    answer: "Yes, reservations can be made by calling us during business hours or in person."
  },
  {
    question: "Do you host private events or parties?",
    answer: "Yes, we host birthdays, business meetings, and other private gatherings. Contact us for details."
  },
  {
    question: "Is your menu available online?",
    answer: "Yes, you can view our full menu on our website with prices and descriptions."
  },
  {
    question: "Do you offer gluten-free options?",
    answer: "Yes, several items on our menu are gluten-free. Let our staff know about your dietary needs."
  },
  {
    question: "Are pets allowed at your location?",
    answer: "Pets are welcome in our outdoor seating area, as long as they are leashed and calm."
  },
  {
    question: "Do you offer free Wi-Fi?",
    answer: "Yes, we provide complimentary Wi-Fi for all our guests. Ask a staff member for the password."
  },
  {
    question: "Is parking available?",
    answer: "Yes, we have a dedicated parking area for our customers and nearby street parking."
  },
  {
    question: "Do you have a loyalty or rewards program?",
    answer: "Yes, we offer a punch card system — visit us often and get free items or discounts!"
  },
  {
    question: "Can I customize my order?",
    answer: "Yes, we’re happy to adjust your meal to match your preferences or dietary needs."
  },
  {
    question: "Do you serve breakfast all day?",
    answer: "Breakfast is served until 11:30 AM on weekdays and all day on weekends."
  },
  {
    question: "Do you sell gift cards?",
    answer: "Yes, we offer gift cards that can be purchased in-store — perfect for friends and family."
  },
  {
    question: "Do you cater for events?",
    answer: "Yes, we provide on-site catering for events hosted at our location. Get in touch for info."
  },
  {
    question: "Are your coffee beans ethically sourced?",
    answer: "Yes, we use fair-trade and ethically sourced beans from trusted roasters."
  },
  {
    question: "Do you have seasonal menu items?",
    answer: "Yes, we feature seasonal dishes and drinks using fresh, local ingredients."
  },
  {
    question: "Is your restaurant kid-friendly?",
    answer: "Absolutely! We have a kids' menu and family-friendly seating options."
  },
  {
    question: "Do you accommodate food allergies?",
    answer: "Yes, please inform us about any allergies so we can ensure your meal is safe."
  },
  {
    question: "Do you offer live music or events?",
    answer: "Yes, we occasionally host live music and community events. Check our social media for updates."
  },
  {
    question: "Is your café available for private hire?",
    answer: "Yes, you can book the entire café for special occasions outside of peak hours."
  }
];



export default function Page() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <main className=' md:flex justify-center items-center bg-stone-700  px-2  md:px-5 lg:px-6  pt-24 md:pt-32  '>
          <div className='flex flex-col     justify-center items-center   w-full bg-stone-300 max-w-[770px] pb-20'>
            <FadeInSection delay={0.3}>     
                <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-4xl  font-serif w-full text-center max-w-[500px]
                '>FREQUENTLY ASKED QUESTION
                </h2>
            </FadeInSection> 
              <div className="w-full px-8 mx-auto mt-10 space-y-4">
                  {faqs.map((item, index) => (
                    <div key={index} className="border-b-black  border rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left px-4 py-4 flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-800">{item.question}</span>
                        <span className='text-black'>{activeIndex === index ? "−" : "+"}</span>
                      </button>

                      <AnimatePresence initial={false}>
                        {activeIndex === index && (
                          <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="px-4 pb-4 pt-1 text-gray-700"
                          >
                            {item.answer}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
            
          </div>
        </main>
  )
}
