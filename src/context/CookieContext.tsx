import React, { createContext, useContext, useState, useEffect } from 'react';

type CookieConsent = boolean | null;

interface CookieContextType {
    consent: CookieConsent;
    acceptCookies: () => void;
    declineCookies: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider = ({ children }: { children: React.ReactNode }) => {
    const [consent, setConsent] = useState<CookieConsent>(null);

    useEffect(() => {
        const savedConsent = localStorage.getItem('cookie-consent');
        if (savedConsent === 'true') {
            setConsent(true);
        } else if (savedConsent === 'false') {
            setConsent(false);
        }
    }, []);

    const acceptCookies = () => {
        setConsent(true);
        localStorage.setItem('cookie-consent', 'true');
    };

    const declineCookies = () => {
        setConsent(false);
        localStorage.setItem('cookie-consent', 'false');
    };

    return (
        <CookieContext.Provider value={{ consent, acceptCookies, declineCookies }}>
            {children}
        </CookieContext.Provider>
    );
};

export const useCookie = () => {
    const context = useContext(CookieContext);
    if (context === undefined) {
        throw new Error('useCookie must be used within a CookieProvider');
    }
    return context;
};
