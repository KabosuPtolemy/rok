import Styles from "../../styles/Login.module.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {loginSchema, LoginSchema} from "../../schemas/LoginSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthenticationService} from "../../service/AuthenticationService";
import {LoadingIndicator} from "../LoadingIndicator";
import {AxiosBasicCredentials, AxiosResponse} from "axios";
import {JwtUtil} from "../../utils/jwtUtil";
import {AuthFormProps} from "../../types/authFormProps";

export function LoginForm(props: AuthFormProps): React.JSX.Element {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<LoginSchema> = async (formData: any, event: any) => {
        event.preventDefault();
        setIsLoading(true);
        // 3. Fields are not null or empty
        // 6. Show password switch

        const authService = new AuthenticationService();
        const credentials: AxiosBasicCredentials = {
            username: formData.email,
            password: formData.password
        };
        const result: AxiosResponse = await authService.post("/login", null, credentials);

        if (result.status == 200 && result.headers) {
            // Successfull response: 200
            let jwtHeader: string = result.headers.get("authorization");
            const jwt: string = JwtUtil.exportJwtFromHeader(jwtHeader);
            if (jwt && window) {
                window.sessionStorage.setItem(JwtUtil.JWT, jwt);
            }
            props.onDone();
        } else {
            // Error response
            console.log(result.data)
        }

        console.log(result)
        setIsLoading(false);
    }

    return (
       <div>
            <h2 className={Styles.h2}>
                Sign in to your account
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={Styles.formGroup}>
                    <label className={Styles.label}>Email:</label>
                    <input
                        type="email"
                        {...register("email")}
                        className={Styles.input}
                        disabled={isLoading}
                    />
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                </div>
                <div className={Styles.formGroup}>
                    <label className={Styles.label}>Password:</label>
                    <div className={Styles.passwordInputContainer}>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                            className={Styles.input}
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            className={Styles.togglePasswordButton}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible />
                            ) : (
                                <AiOutlineEye />
                            )}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                </div>
                <div className={Styles.signInContainer}>
                    {
                        isLoading
                        ? <LoadingIndicator/>
                        : <button
                            type="submit"
                            className={Styles.signInButton}
                            disabled={isLoading}
                        >
                            Sign In
                        </button>
                    }
                </div>
            </form>
        </div>
    )
}