import './Contact.css'
import { Mailbox } from './icons/Mailbox'
import { useForm } from '../hooks/useForm'

export const Contact = () => {
    const initialForm = {
        name:'',
        email:'',
        phone:'',
        message:'',

    }
    const {postForm,loader,formState,onInputChange}=useForm(initialForm)
    const{name,email,phone,message} = formState

    return (
        <>
            <div id="contact" className="div-Contact--container">
<div className="div-Contact--flex">
<div className="div-Contact--icon">
<Mailbox/>
                    </div>
                <div id="contact" className="div-Contact">
<h3 className="h3-Contact">Contacto</h3>
                    <form onSubmit={(e)=>{postForm(e)}} className="form-Contact">
                        <input value={name} onChange={onInputChange} type="text" placeholder="Nombre" name="name"
                            title="Nombre sólo acepta letras, espacios en blanco y máximo 45 caracteres"
                            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,45}$" required />
                        <input value={email} onChange={onInputChange} type="email" placeholder="Correo Electrónico" name="email" id="email" autoComplete="email" required></input>
                        <input value={phone} onChange={onInputChange} type="number" placeholder="Numero Telefónico" name="phone" pattern="^[0-9]{1,20}$" />
                        <textarea value={message} onChange={onInputChange} id="message" name='message' placeholder="Mensaje.." required></textarea>
                        <button className="button-Contact"  type="submit" name="btn-submit">{(loader) ?  <div className="loader"></div>:'Enviar' }</button> 
                    </form>
                    </div>
               
                </div>
            </div>
        </>
    )
}
