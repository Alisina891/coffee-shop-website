'use client'
import React from 'react'
import FadeInSection from '../components/FadeInItem';









export default function page() {

  return (
    <main className=' md:flex justify-center items-center bg-stone-700  px-2  md:px-5 lg:px-6  pt-24 md:pt-32  '>
          <div className='flex flex-col     justify-center items-center   w-full bg-stone-300 max-w-[770px] pb-20'>
            <FadeInSection delay={0}>
              <p className='mt-5 text-gray-500'>30/8/2023</p>
            </FadeInSection>
            <FadeInSection delay={0.2}>     
                <h2 className='text-amber-700 mt-[3vw] md:mt-[2vw] text-4xl md:text-4xl  font-serif w-full text-center max-w-[500px]
                '>PRIVACY POLICY
                </h2>
            </FadeInSection> 
              <div className="w-full px-8 mx-auto mt-10 space-y-4 ">
                 <div className="max-w-3xl mx-auto px-4  text-gray-800">
                 <FadeInSection delay={0.4}>
                  <h1 className="text-3xl mb-6 "> Our Privacy Policy</h1>
                 </FadeInSection>

                 <FadeInSection delay={0.6}>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                      <p>
                        We take the privacy of our users seriously.
                        This Privacy Policy explains how we collect, use, disclose, and protect your personal
                        information when you interact with our services, website, or platform.
                      </p>
                      <p>By using .map, you agree to the practices described in this Policy.</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">2. Purpose of this Policy</h2>
                      <p>This Policy is intended to ensure that personal information is handled in a transparent, fair, and lawful manner in line with applicable privacy laws. We aim to:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Clearly inform you about the types of information we collect;</li>
                        <li>Explain why we collect personal data and how we use it;</li>
                        <li>Describe the security measures in place to protect your information;</li>
                        <li>Provide guidance on your rights regarding your personal information.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">3. What Information We Collect</h2>
                      <p>We may collect the following types of personal information depending on how you interact with us:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>Identity and contact details</strong>: name, email address, phone number, and user ID.</li>
                        <li><strong>Technical data</strong>: IP address, device information, browser type, usage logs.</li>
                        <li><strong>Location data</strong>: if you allow location access for map-based services.</li>
                        <li><strong>Account and profile information</strong>: preferences, saved locations, and activity.</li>
                        <li><strong>Payment information</strong>: if you use paid features.</li>
                        <li><strong>Communication history</strong>: interactions, support requests, feedback.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">4. How We Collect Your Information</h2>
                      <p>We collect information in several ways:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>Directly from you</strong> when you sign up, fill out a form, or use features within .map.</li>
                        <li><strong>Automatically</strong> through cookies, analytics tools, and device tracking.</li>
                        <li><strong>From third parties</strong> such as payment processors or business partners.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">5. Why We Collect Your Information</h2>
                      <p>We use personal information for the following purposes:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>To provide and improve our services;</li>
                        <li>To personalize your experience and content;</li>
                        <li>To communicate with you;</li>
                        <li>To process payments and maintain security;</li>
                        <li>To comply with legal obligations.</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">6. Sharing and Disclosure</h2>
                      <p>We do <strong>not sell</strong> your personal data to third parties.</p>
                      <p>We may share your data with trusted service providers who help us operate .map. We may also disclose data if legally required or to protect the safety of individuals.</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">7. Security</h2>
                      <p>We take reasonable steps to protect your data through secure storage, encryption, access controls, and regular monitoring. However, no system is completely secure. You should protect your own credentials as well.</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">8. Access and Correction</h2>
                      <p>You may request access to your personal data or ask us to correct inaccurate information. Contact us using the email provided below.</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">9. Retention and Deletion</h2>
                      <p>We retain your data only as long as necessary or as required by law. You may request deletion of your data unless we’re required to retain it.</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">10. Complaints and Contact</h2>
                      <p>If you have any concerns about this Policy or your data, please contact us at:</p>
                      <p className="mt-2 font-medium">privacy@dotmap.app</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">11. Changes to This Policy</h2>
                      <p>We may update this Policy periodically. The latest version will always be available on our website or app.</p>
                      <p className="mt-2 italic">Last updated: [Insert Date]</p>
                    </div>
                  </div>
                  </FadeInSection>
                </div>

              </div>
            
          </div>
        </main>
  )
}
