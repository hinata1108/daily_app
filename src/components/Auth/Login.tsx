import { useState } from "react";
import "./Auth.css";
import {Switch} from "./Switch.tsx"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/home");
    
};

    return (
        <form onSubmit={handleLogin}>
        <div className="Auth">
            <Switch type="login" />
            <div className="AuthForm">
                <label>メールアドレス</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="メールアドレスを入力"
                />
            </div>

            <div className="AuthForm">
                <label>パスワード</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} placeholder="パスワードを入力"    
                />
        </div>
            <button type="submit">ログイン</button>
        </div>
        </form>
    )
}
