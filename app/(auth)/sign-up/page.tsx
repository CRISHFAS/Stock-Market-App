'use client';

import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import {CountrySelectField} from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import {signUpWithEmail} from "@/lib/actions/auth.actions";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

const SignUp = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            country: 'AR',
            investmentGoals: 'Crecimiento del capital',
            riskTolerance: 'Medio',
            preferredIndustry: 'Tecnología'
        },
        mode: 'onBlur'
    }, );

    const onSubmit = async (data: SignUpFormData) => {
        try {
            const result = await signUpWithEmail(data);
            if(result.success) router.push('/');
        } catch (e) {
            console.error(e);
            toast.error('Error al registrarse', {
                description: e instanceof Error ? e.message : 'No se pudo crear una cuenta.'
            })
        }
    }

    return (
        <>
            <h1 className="form-title">Regístrate y personaliza</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="fullName"
                    label="Nombre completo"
                    placeholder="Cris Farias"
                    register={register}
                    error={errors.fullName}
                    validation={{ required: 'Se requiere nombre completo', minLength: 2 }}
                />

                <InputField
                    name="email"
                    label="Email"
                    placeholder="contact@crismartin.com"
                    register={register}
                    error={errors.email}
                    validation={{ required: 'El nombre del correo electrónico es obligatorio.', pattern: /^\w+@\w+\.\w+$/, message: 'Se requiere dirección de correo electrónico' }}
                />

                <InputField
                    name="password"
                    label="Contraseña"
                    placeholder="Ingrese una contraseña segura"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: 'Se requiere contraseña', minLength: 8 }}
                />

                <CountrySelectField
                    name="country"
                    label="País"
                    control={control}
                    error={errors.country}
                    required
                />

                <SelectField
                    name="investmentGoals"
                    label="Objetivos de inversión"
                    placeholder="Seleccione su objetivo de inversión"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />

                <SelectField
                    name="riskTolerance"
                    label="Tolerancia al riesgo"
                    placeholder="Seleccione su nivel de riesgo"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />

                <SelectField
                    name="preferredIndustry"
                    label="Preferencia de industria"
                    placeholder="Seleccione su industria preferida"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creando cuenta' : 'Comience su viaje de inversión'}
                </Button>

                <FooterLink text="Ya tienes una cuenta?" linkText="Iniciar sesión" href="/sign-in" />
            </form>
        </>
    )
}
export default SignUp;