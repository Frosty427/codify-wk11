import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-tippy/dist/tippy.css';
import {
  Tooltip,
} from 'react-tippy';





var main = (
  <div>
    <div className="menu  pt-4">
      <div className="menuItem cpu">CPU:<a href="https://www.amazon.com/gp/product/B0741DN383/ref=ox_sc_act_title_3?smid=ATVPDKIKX0DER&psc=1"><Tooltip title="Ryzen 3 1200, 3.4 GHz Precision Boost (up to 3.45 GHz with XFR)"><span>R3 1200</span></Tooltip></a></div>
      <hr className="hr-1"/>
      <div className="menuItem gpu ">GPU:<a href="https://www.amazon.com/gp/product/B01M360WG6/ref=ox_sc_act_title_1?smid=ATVPDKIKX0DER&psc=1"><Tooltip title="ASUS Geforce GTX 1050 Ti"><span >GTX 1050TI</span></Tooltip></a></div>
      <hr className="hr-1"/>
      <div className="menuItem mobo">MOBO:<a href="https://www.amazon.com/gp/product/B06XS53VR5/ref=ox_sc_act_title_5?smid=ATVPDKIKX0DER&psc=1"><Tooltip title="MSI ProSeries AMD Ryzen B350 DDR4 VR Ready HDMI USB 3 micro-ATX Motherboard (B350M PRO-VDH)"><span >B350M</span></Tooltip></a></div>
      <hr className="hr-1"/>
      <div className="menuItem psu">PSU: <a href="https://www.amazon.com/gp/product/B00H33SFJU/ref=ox_sc_act_title_6?smid=ATVPDKIKX0DER&psc=1"><Tooltip title="EVGA 750 N1, 750W, 2 Year Warranty, Power Supply 100-N1-0750-L1"><span>EVGA</span></Tooltip></a></div>
      <hr className="hr-1"/>
      <div className="menuItem case">CASE: <a href="https://www.amazon.com/ROSEWILL-Micro-Computer-plastic-computer/dp/B00ZPWOA6I/ref=sr_1_6?s=electronics&ie=UTF8&qid=1525200139&sr=1-6&keywords=rosewill+atx"><Tooltip title="ZOTAC GeForce GTX 1050 Ti Mini"><span>ROSEWILL ATX</span></Tooltip></a></div>
      <hr className="hr-1"/>
      <div className="menuItem psu">RAM: <a href="https://www.amazon.com/gp/product/B01AG9F0G8/ref=ox_sc_act_title_3?smid=ATVPDKIKX0DER&psc=1"><Tooltip title="Ballistix Sport LT 8GB Kit (4GBx2) DDR4 2400 MT/s"><span>8GB DDR4</span></Tooltip></a></div>
      <hr className="hr-1"/>
      <div className="menuItem psu">OS:<a href="https://www.amazon.com/gp/product/B01AG9F0G8/ref=ox_sc_act_title_3?smid=ATVPDKIKX0DER&psc=1"><Tooltip title="Windows 10 OS"><span>Windows 10</span></Tooltip></a></div>
      </div>
    <div>
      <h1 className="main-title">Build Your PC From Scratch Using The Animated Menu To The Left.</h1>
    </div>


  </div>
);

var appRoot = document.getElementById('root');
ReactDOM.render(main, appRoot);