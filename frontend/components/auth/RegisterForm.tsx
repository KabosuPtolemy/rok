import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthenticationService} from "../../service/AuthenticationService";
import {registrationSchema, RegistrationSchema} from "../../schemas/RegistrationSchema";
import Styles from "../../styles/Login.module.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {LoadingIndicator} from "../LoadingIndicator";
import {AxiosResponse} from "axios";

export function RegisterForm(): React.JSX.Element {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegistrationSchema>({
        resolver: zodResolver(registrationSchema)
    });

    const onSubmit: SubmitHandler<RegistrationSchema> = async (formData: any, event: any) => {
        event.preventDefault();
        setIsLoading(true);
        // 1. Do passwords match?
        // 4. wallet address length (42 chars)
        // 5. Password enforcement
        //      5.1. At least 8 chars
        //      5.2. Contains 1 uppercase char
        //      5.3. Contains 1 special character (@, $, %, ^, _,...)
        //      5.4. Contains atleast 1 number
        // 7. Hint texts "We will not share your password" or smth
        // 8. Info box that the email has been sent
        // 3. Fields are not null or empty
        // 6. Show password switch
        // DISABLE ALL BUTTONS IN LOGIN/REGISTER FORMS WHEN THE USER HAS PERSSED THE "Sign In" or "Sign Up" button

        const authService = new AuthenticationService();
        const result: AxiosResponse = await authService.post("/register", formData);

        console.log(result)
        setIsLoading(false);
    }

    return (
        isLoading
        ? <LoadingIndicator />
        : <div>
                <h2 className={Styles.h2}>
                    Create your account"
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={Styles.formGroup}>
                        <label className={Styles.label}>Email:</label>
                        <input
                            type="email"
                            {...register("email")}
                            className={Styles.input}
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
                            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                        </div>
                    </div>
                    <div>
                        <div className={Styles.formGroup}>
                            <label className={Styles.label}>Confirm Password:</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("confirmPassword")}
                                className={Styles.input}
                            />
                            {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
                        </div>
                        <div className={Styles.formGroup}>
                            <label className={Styles.label}>Wallet Address:</label>
                            <input
                                placeholder="0x..."
                                type="text"
                                autoComplete="off"
                                {...register("walletAddress")}
                                className={Styles.input}
                            />
                            {errors.walletAddress && <p className="text-red-600">{errors.walletAddress.message}</p>}
                        </div>
                    </div>

                    <div className={Styles.signInContainer}>
                        <button type="submit" className={Styles.signInButton}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
    )
}