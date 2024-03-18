import React, { useState, useEffect, useRef } from "react"
import Styles from "../styles/Login.module.css"
import {LoginForm} from "./auth/LoginForm";
import {RegisterForm} from "./auth/RegisterForm";

function AuthForm() : React.JSX.Element {
  const [isLogin, setIsLogin] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false)

  const updateIsLogin = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsLoginFormVisible(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div>
      {isLoginFormVisible ? (
        <div className={Styles.overlay}>
          <div className={Styles.modal} ref={containerRef}>
            {isLogin
                ? <LoginForm onDone={() => setIsLoginFormVisible(false)}/>
                : <RegisterForm/>
            }
            <div className={Styles.formBottom}>
              <div>
                <button onClick={() => setIsLoginFormVisible(false)} className={Styles.closeButton}>
                  Close
                </button>
              </div>
              <div style={{width: "60%"}}></div>
              <div className={Styles.signUpContainer}>
                <p className={Styles.signUpTitle}>
                  {isLogin
                      ? "Don't have an account?"
                      : "Already have an account?"}
                </p>
                <button
                    className={Styles.signUpButton}
                    onClick={updateIsLogin}
                >
                  {isLogin ? "Sign Up!" : "Sign In!"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsLoginFormVisible(true)} className={Styles.connectButton}>
            Sign In
          </button>
        </div>
      )}
    </div>
  )
}

export default AuthForm
