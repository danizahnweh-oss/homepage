import React from 'react';
import {createRoot} from 'react-dom/client';
import BookingApp from '../app/booking-app';
import PrivacyPage from '../app/datenschutz/page';
import '../app/globals.css';
createRoot(document.getElementById('root')!).render(location.pathname.replace(/\/$/,'').endsWith('/datenschutz') ? <PrivacyPage/> : <BookingApp/>);
