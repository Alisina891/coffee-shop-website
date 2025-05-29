'use client'
import React from 'react'
import FadeInSection from '../components/FadeInItem';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const faqs = [
  {
    question: "What are your dining hours?",
    answer: "We’re open Monday to Saturday from 8:00 AM to 10:00 PM, and Sundays from 9:00 AM to 8:00 PM."
  },
  {
    question: "Do you offer vegetarian or vegan meals?",
    answer: "Absolutely! We have a variety of vegetarian and vegan dishes available on our menu."
  },
  {
    question: "Can I reserve a table in advance?",
    answer: "Yes, table reservations can be made by calling us during business hours or visiting in person."
  },
  {
    question: "Do you host private dinners or parties?",
    answer: "Yes, we host birthdays, private dinners, and events. Please contact us to make arrangements."
  },
  {
    question: "Is your dining menu available online?",
    answer: "Yes, our full dining menu with prices and descriptions is available on our website."
  },
  {
    question: "Do you serve gluten-free meals?",
    answer: "Yes, we offer several gluten-free options. Just let our staff know about your needs."
  },
  {
    question: "Is outdoor dining available for guests with pets?",
    answer: "Yes, pets are welcome in our outdoor dining area as long as they are leashed and calm."
  },
  {
    question: "Do you provide free Wi-Fi while dining?",
    answer: "Yes, complimentary Wi-Fi is available for all guests. Ask a staff member for access."
  },
  {
    question: "Is parking available for diners?",
    answer: "Yes, we offer a dedicated parking area along with nearby street parking."
  },
  {
    question: "Do you have a rewards program for diners?",
    answer: "Yes, our loyalty punch card offers free items or discounts after frequent visits."
  },
  {
    question: "Can I customize my meal when dining in?",
    answer: "Yes, we’re happy to adjust meals based on your preferences or dietary restrictions."
  },
  {
    question: "Is breakfast served throughout the day?",
    answer: "Breakfast is available until 11:30 AM on weekdays and all day on weekends."
  },
  {
    question: "Can I purchase gift cards for dining?",
    answer: "Yes, gift cards are available for purchase in-store — perfect for loved ones."
  },
  {
    question: "Do you offer catering for in-house dining events?",
    answer: "Yes, we cater private dining events hosted at our location. Contact us for more details."
  },
  {
    question: "Are your ingredients ethically sourced?",
    answer: "Yes, we use ethically sourced and locally grown ingredients wherever possible."
  },
  {
    question: "Do you offer seasonal dining specials?",
    answer: "Yes, we feature seasonal dishes and drinks made with fresh local ingredients."
  },
  {
    question: "Is your restaurant suitable for kids and families?",
    answer: "Definitely! We have a kids' menu and family-friendly seating available."
  },
  {
    question: "How do you handle food allergies?",
    answer: "Please inform our staff of any allergies so we can prepare your meal safely."
  },
  {
    question: "Do you have live entertainment during dinner?",
    answer: "Occasionally, we host live music or events. Follow us on social media for updates."
  },
  {
    question: "Can I rent the restaurant for private dining?",
    answer: "Yes, our café is available for private hire during non-peak hours. Contact us for bookings."
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
                '>DINING FAQ&#39;S
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
