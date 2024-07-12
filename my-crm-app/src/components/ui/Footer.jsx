import React from 'react';
import "../../css/animatedDashedLine.css"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Subscribe our Newsletter</h3>
            <p className="text-sm">Get started for 1 Month free trial No Purchase required</p>
            <form className="mt-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="p-2 w-64 rounded-l-md focus:outline-none" 
              />
              <button className="p-2 bg-green-600 rounded-r-md">Subscribe</button>
            </form>
          </div>
          <div className="flex space-x-16">
            <div>
              <h4 className="font-semibold">Company</h4>
              <hr className="animated-dash" />
              <ul className="mt-2 space-y-2">
                <li>What we Offer</li>
                <li>Our Story</li>
                <li>Latest Posts</li>
                <li>Help Center</li>
                <li>Our Partners</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Resources</h4>
              <hr className="animated-dash" />
              <ul className="mt-2 space-y-2">
                <li>Blog</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Events</li>
                <li>Ebook & Guide</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Get the app</h4>
              <p className="mt-2">We suggest connecting apps</p>
              <div className="flex mt-2 space-x-2">
                <button className="bg-gray-800 p-2 rounded">
                  <img src="google-play-icon.png" alt="Google Play" />
                </button>
                <button className="bg-gray-800 p-2 rounded">
                  <img src="app-store-icon.png" alt="App Store" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-4">
          <p className="text-center text-sm">Copyright © 2024 Themeholy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
