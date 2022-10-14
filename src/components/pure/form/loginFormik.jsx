import React from 'react';
import { Formik , Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('El formato del email es incorrecto')
            .required('El email es obligatorio'),
        password: Yup.string().required('La contraseña es obligatoria')
    }
)


const LoginFormik = () => {

    const initialCredentials = {
        email : '',
        password: ''
    }


    return (
        <div>
        <h4>Login Formik</h4>
            <Formik
                initialValues={{
                    initialCredentials
                }}
                validationSchema={loginSchema}
                onSubmit={async(values) =>{
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values)
                } }
            >

            {({values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur}) => (
                    <Form>
                        <label htmlFor='email'>Email</label>
                        <Field id='email' name='email' placeholder='ejemplo@email.com' type='email'/>
                
                        {
                            errors.email && touched.email && 
                            (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor='password'>Contraseña</label>
                        <Field id='password' 
                        name='password' 
                        placeholder='password' 
                        type='password'
                        />

                        {
                            errors.password && touched.password && 
                            (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                            )
                        }
                            <button type='submit'>Enviar</button>
                            {isSubmitting ? (<p>Cargando tus credenciales...</p>) : null}
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default LoginFormik;
