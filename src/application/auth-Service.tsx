import {signIn, signUp,signOut,getLoginUser} from '../infrastructure/repositories/auth-Repository';

export const register = async (email: string, password: string) => {
    return await signUp(email, password);
};

export const login = async (email: string, password: string) => {
    return await signIn(email, password);
};

export const logout = async () => {
    return await signOut();
};

export const loginUser = async () => {
    return await getLoginUser();
};