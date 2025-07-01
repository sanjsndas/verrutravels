import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Hero91 from '../components/hero91'
import ContentList41 from '../components/content-list41'
import Contact31 from '../components/contact31'
import './privacy-policy.css'

const PrivacyPolicy = (props) => {
  return (
    <div className="privacy-policy-container1">
      <Helmet>
        <title>Privacy-Policy - Travel Agency</title>
        <meta property="og:title" content="Privacy-Policy - Travel Agency" />
      </Helmet>
      <nav data-role="Header" className="privacy-policy-navbar">
        <h1>Verru TRAVELS</h1>
        <div className="privacy-policy-right-side1">
          <div className="privacy-policy-links-container1">
            <Link to="/" className="privacy-policy-navlink1">
              Home
            </Link>
          </div>
          <SolidButton button="Explore places"></SolidButton>
        </div>
        <div data-role="BurgerMenu" className="privacy-policy-burger-menu1">
          <svg viewBox="0 0 1024 1024" className="privacy-policy-burger-menu2">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="privacy-policy-mobile-menu">
          <div className="privacy-policy-nav">
            <div className="privacy-policy-top">
              <h1>Travel</h1>
              <div
                data-role="CloseMobileMenu"
                className="privacy-policy-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="privacy-policy-icon13">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="privacy-policy-right-side2">
              <div className="privacy-policy-links-container2">
                <span className="privacy-policy-text10">Home</span>
                <span className="privacy-policy-text11">About</span>
                <span className="privacy-policy-text12">Tour Packages</span>
                <span>Contact</span>
              </div>
              <SolidButton button="Explore places"></SolidButton>
            </div>
          </div>
          <div className="privacy-policy-follow-container1">
            <span className="privacy-policy-text14">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="privacy-policy-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="privacy-policy-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="privacy-policy-icon15"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="privacy-policy-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="privacy-policy-icon17"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="privacy-policy-link3"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="privacy-policy-icon19"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Hero91
        action1={
          <Fragment>
            <span className="privacy-policy-text15">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="privacy-policy-text16">Book Your Adventure</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="privacy-policy-text17">
              Discover amazing destinations and create unforgettable memories
              with our exclusive tour packages.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="privacy-policy-text18">
              Explore the World with Verru Travels
            </span>
          </Fragment>
        }
      ></Hero91>
      <ContentList41
        content1={
          <Fragment>
            <span className="privacy-policy-text19">
              Explore our exclusive tour packages to famous destinations
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="privacy-policy-text20">
              Welcome to Verru Travels
            </span>
          </Fragment>
        }
        content10={
          <Fragment>
            <span className="privacy-policy-text21">
              At Verru Travels, we are committed to protecting your privacy and
              have a detailed Privacy Policy in place. If you have any questions
              or concerns, please feel free to reach out to our customer support
              team. For booking assistance or to stay updated with our latest
              news and offers, you can find our contact information and social
              media updates on our website.
            </span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="privacy-policy-text22">
              At Verru Travels, we take your privacy seriously. Our detailed
              Privacy Policy outlines how we collect, use, and protect your
              personal information. We prioritize the security of your data and
              ensure that it is handled in compliance with privacy laws. If you
              have any questions or concerns about your privacy, please contact
              our customer support team for assistance.
            </span>
          </Fragment>
        }
        content12={
          <Fragment>
            <span className="privacy-policy-text23">
              This website prioritizes customer privacy and provides a detailed
              Privacy Policy. Customers can contact the customer support team
              for inquiries. The website also offers contact information for
              booking assistance and social media updates.
            </span>
          </Fragment>
        }
        content13={
          <Fragment>
            <span className="privacy-policy-text24">
              Our Privacy Policy is designed to protect your personal
              information and ensure your privacy. We do not share your data
              with third parties without your consent. For more information on
              how we handle your data, please refer to our detailed Privacy
              Policy.
            </span>
          </Fragment>
        }
        heading10={
          <Fragment>
            <span className="privacy-policy-text25">PRIVACY POLICY</span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="privacy-policy-text26">General</span>
          </Fragment>
        }
        heading12={
          <Fragment>
            <span className="privacy-policy-text27">Damages and issues</span>
          </Fragment>
        }
        heading13={
          <Fragment>
            <span className="privacy-policy-text28">Refunds</span>
          </Fragment>
        }
      ></ContentList41>
      <Contact31
        email1={
          <Fragment>
            <span className="privacy-policy-text29">info@verrutravels.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="privacy-policy-text30">+1-832-233-1112</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="privacy-policy-text31">
              9360 Oak Terrace, Dallas, MI 90581
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="privacy-policy-text32">
              We are here to assist you with any inquiries you may have about
              our tour packages or booking process. Feel free to reach out to us
              via the contact information provided below.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="privacy-policy-text33">
              Our customer support team is available during business hours to
              answer your questions.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="privacy-policy-text34">
              For urgent matters or booking assistance outside of business
              hours, please email us or leave a voicemail, and we will get back
              to you as soon as possible.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="privacy-policy-text35">
              Follow us on social media for travel inspiration, updates, and
              exclusive offers.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="privacy-policy-text36">
              We look forward to helping you plan your next adventure!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="privacy-policy-text37">Contact Us</span>
          </Fragment>
        }
      ></Contact31>
      <div className="privacy-policy-footer">
        <div className="privacy-policy-menu">
          <h1>Verru TRAVELS</h1>
          <div className="privacy-policy-links-container3">
            <div className="privacy-policy-container2">
              <Link to="/terms-of-service" className="privacy-policy-navlink2">
                Terms and conditions
              </Link>
              <Link to="/privacy-policy" className="privacy-policy-navlink3">
                Privacy
              </Link>
            </div>
          </div>
          <div className="privacy-policy-follow-container2">
            <span className="privacy-policy-text38">
              ©Verru Travels. All Rights Reserved
            </span>
            <div className="privacy-policy-icons-container2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
