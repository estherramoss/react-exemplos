// importa o react e os hooks necessários do react
import React, { useState } from 'react';
// importa o hook useForm do react-hook para lidar com o formulários de maneira eficiente
// Obs: para instalar (npm instal react-hook-form)
import { useForm } from 'react-hook-form';
//importa o arquivo css
import '../css/style.css';
//importa a imagem do fundo do login
import minhaImagem from '../images/login.jpg';
// importa a imagem de verificação
import verified from '../images/verified.png';

// função principal que representa o componente do formulário
function MyForm () {
    const {register, handleSubmit, formState: {errors} } = useForm();
    
    const [status, setStatus] = useState({ submittedSuccessfully: false, loading: false, showPassword:
    false });

    const onSubmit = data => {
        setStatus({...status, loading: true});


        setTimeout(() => {
            setStatus({ submittedSuccessfully: true, loading: false });
        }, 1000);
    };

    // Função para gerar mensagens de erro 
    const generateErrorMessage = fieldName => {
        return {
            required: `${fieldName} é obrigatório`, 
            pattern: fieldName === 'email' ? 'formato de e-mail inválido' : null
        };
    };

    // função para lidar com o retorno á página inicial
    const handleReturnButtonClick = () => {
        window.location.href = '/';
    };

    // renderização condicional com base no sucesso do envio do formulário
    return (
        <div className='container'>
            {status.submittedSuccessfully ? (
                <div className='success-message'>
                <img src={verified} alt='Verificado' />
                <h2> Formulário Enviado com Sucesso!</h2>
                <p>Obrigado por enviar o formulário.</p>
                <button className='btn' onClick={handleReturnButtonClick}>Retornar</button>
            </div>
            ) : (

    // se o formulário ainda não foi enviado com sucesso, exibe formulário para preenchimento
    <div className='form-sign-up'>
        <div>
            <img src={minhaImagem} alt='imagem de uma pessoa se cadastrando pelo celular' />
    </div>

    <section>
        <h1>Inscreva-se</h1>

        {/* formulário com campos controlados pelo hook useForm */}
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* campo nome */}
            <div className='form flex'>
                <label htmlFor='name'>Nome</label>
                <input
                {...register("firstName", generateErrorMessage("Nome"))}
                placeholder="nome"
                id='name'
                autoComplete='off'
                className={errors.firtsName ? 'error' : ''}
            />
            {errors.firtsName && <span className='error-message'>{errors.firtsName.message}</span>}
        </div>

         {/* campo Sobrenome */}
         <div className='form flex'>
                <label htmlFor='Sobrenome'>Sobrenome</label>
                <input
                {...register("firstName", generateErrorMessage("Sobrenome"))}
                placeholder="Sobrenome"
                id='Sobrenome'
                autoComplete='off'
                className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className='error-message'>{errors.lastName.message}</span>}
        </div>

        {/* campo e-mail */}
        <div className='form flex'>
                <label htmlFor='email'>E-mail</label>
                <input
                {...register("e-mail", generateErrorMessage("E-mail"))}
                placeholder="E-mail"
                id='E-mail'
                autoComplete='off'
                className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className='error-message'>{errors.email.message}</span>}
        </div>

        {/* campo senha */}
        <div className='form flex'>
                <label htmlFor='password'>Senha</label>
                <div className='password-input-container'>
                <input
                {...register("password", generateErrorMessage("Senha"))}
                placeholder="Senha"
                id='password'
                autoComplete='off'
                type={status.showPassword ? 'text' : 'password'}
                className={errors.password ? 'error' : ''}
            />
            
            <button
            type="button"
            className='password-toggle'
            onClick={() => setStatus ({ ...status, showPassword: !status.
            showPassword })}





            >

            {status.showPassword ? <i className='fas fa-eye'></i> : <i
            className="fas fa-eye-slash"></i>}
            </button>

            </div>

            {errors.password && <span className='error-message'>{errors.password.message}</span>}
            </div>

            {/* Botão enviar */}
            <button className='btn' type="submit" disabled={status.loading}>
                {status.loading ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
        {status.loading && <p>Carregando...</p>}
    </section>
</div>
            )}
</div>

    );
            }

// Exporta componente "MyForm"
export default MyForm;