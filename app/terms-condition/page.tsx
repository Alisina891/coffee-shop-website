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
                '>TERMS & CONDITIONS
                </h2>
            </FadeInSection> 
              <div className="w-full px-8 mx-auto mt-10 space-y-4 ">
                 <div className="max-w-3xl mx-auto px-4  text-gray-800">
                 

                 <FadeInSection delay={0.6}>
                   <div className="max-w-4xl mx-auto px-4  text-gray-800">
                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">1. General Information</h2>
                          <ul className="list-disc list-inside space-y-1">
                            <li><strong>Business Name:</strong> Dot Borna Technologies Pty Ltd</li>
                            <li><strong>Trading Name:</strong>Borna</li>
                            <li><strong>ABN:</strong>+93780031643</li>
                            <li><strong>Location:</strong> Melbourne, Australia</li>
                            <li><strong>Contact:</strong>alisinai902@gamilcom</li>
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
                          <p>You must be at least 18 years old or have parental/guardian consent to use our services or make purchases on our Website.</p>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">3. Services and Availability</h2>
                          <ul className="list-disc list-inside space-y-1">
                            <li>All services and features are subject to availability.</li>
                            <li>We aim to provide accurate service descriptions and pricing; however, errors may occur.</li>
                            <li>We reserve the right to change features, pricing, or availability without prior notice.</li>
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">4. Orders and Payments</h2>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Services or subscriptions are confirmed only upon successful payment.</li>
                            <li>We accept Visa, Mastercard, American Express, and PayPal.</li>
                            <li>All prices are in Australian Dollars (AUD) and include GST unless stated otherwise.</li>
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">5. Delivery of Services</h2>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Access to digital features is generally provided immediately after payment confirmation.</li>
                            <li>In case of technical delays, we will notify you via email.</li>
                            <li>We are not liable for delays caused by third-party services or force majeure events.</li>
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">6. Cancellations and Refunds</h2>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Cancellations must be made within 24 hours of purchase for a full refund.</li>
                            <li>No refunds will be provided for partially used or expired digital access.</li>
                            <li>Refunds will be processed within 7 business days to the original payment method.</li>
                            <li>Custom integrations or enterprise plans are non-refundable.</li>
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">7. User Responsibility</h2>
                          <ul className="list-disc list-inside space-y-1">
                            <li>You agree not to misuse the Website or attempt unauthorized access.</li>
                            <li>You are responsible for keeping your login credentials secure.</li>
                            <li>Users must ensure their data submissions comply with applicable laws.</li>
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">8. Intellectual Property</h2>
                          <p>
                            All content on the Website (including but not limited to code, text, images, and branding) is the property of Dot Map Technologies Pty Ltd or its licensors. Reproduction or redistribution is prohibited without prior written permission.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
                          <ul className="list-disc list-inside space-y-1">
                            <li>Dot Map Technologies Pty Ltd shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Website.</li>
                            <li>Our liability is limited to the amount you paid for the services.</li>
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">10. Privacy</h2>
                          <p>Your personal information is collected, stored, and used in accordance with our <a href="#" className="underline text-blue-600">Privacy Policy</a>.</p>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">11. Modifications to Terms</h2>
                          <p>We reserve the right to modify these Terms at any time. Updates will be posted on the Website and take effect immediately upon posting.</p>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">12. Governing Law</h2>
                          <p>These Terms are governed by the laws of Victoria, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Melbourne, VIC.</p>
                        </div>

                        <div className="mb-6">
                          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                          <p>If you have any questions regarding these Terms, please contact us at <a href="mailto:alisina902@gamil.com" className="underline text-blue-600">alisinai902@gamil.com</a>.</p>
                        </div>
                      </div>
                  </FadeInSection>
                </div>

              </div>
            
          </div>
        </main>
  )
}
