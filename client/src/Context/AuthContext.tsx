import React, { createContext, useReducer, ReactNode } from 'react';
import PropTypes from 'prop-types';


// Define the shape of the user object
interface User {
    id: string;
    name: string;
    // Add any other user properties as needed
}

// Define the shape of the initial state
interface AuthState {
    user: User | null;
    token: string | null;
}

// Define action types
type AuthAction =
    | { type: 'LOGIN_START' }
    | { type: 'LOGIN_SUCCESS'; payload: { user: User;  token: string } }
    | { type: 'LOGOUT' }
    | { type: 'UPDATE_USER'; payload: { user: User } };




    // Define the shape of the context value
interface AuthContextType {
    user: User | null;
    token: string | null;
    dispatch: React.Dispatch<AuthAction>;
}


// Initial state for the authentication context
const storedUser = localStorage.getItem('user'); //after saving it during the login process
let initialUserState: User | null = null;

try {
    initialUserState = storedUser ? JSON.parse(storedUser) : null;
} catch (error) {
    console.error('Error parsing user from localStorage:', error);
    initialUserState = null; // Set to null in case of error
}

const initialState: AuthState = {
    user: initialUserState,
    token: localStorage.getItem('token') || null,
};

// Create the AuthContext using createContext
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Reducer function to manage state changes
const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                ...state,
                user: null,
                token: null,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: null,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

// AuthContextProvider component
interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Effect hook to update localStorage whenever 'user' state changes
    // (You can implement this if needed)

    // Return AuthContext.Provider with value prop exposing state and dispatch
    return (
        <AuthContext.Provider value={{ user: state.user, token: state.token, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

// PropTypes validation for children prop
AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
