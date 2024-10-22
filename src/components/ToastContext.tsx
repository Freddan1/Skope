import { createContext, ReactNode, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastContextProps {
    showToast: (message: string, type: 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined)  

export const ToastProvider = ({children}: {children:ReactNode}) => {
    const showToast = (message: string, type: 'success' | 'error') => {
        toast[type](message)
    }
    
    return (
            <ToastContext.Provider value={{showToast}}>
            {children}
            <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
        </ToastContext.Provider>
    )   
};

export const useToast = () => {
    const context = useContext(ToastContext)
    if(!context) {
        throw new Error("useToast must be used within a ToastProvider")
    }
    return context
}