import './Contact.css'
export const Contact = () => {
    const key = false
    return (
        <>
            <div id="contact" className="div-Contact--container">
                <div id="contact" className="div-Contact">

                    <form action="" className="form-Contact">
                        <input type="text" placeholder="Nombre" name="name"
                            title="Nombre sólo acepta letras, espacios en blanco y máximo 45 caracteres"
                            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,45}$" required />
                        <input type="email" placeholder="Correo Electrónico" name="email" id="email" autoComplete="email" required></input>
                        <input type="number" placeholder="Numero Telefónico" name="id" pattern="^[0-9]{1,20}$" />
                        <textarea id="message" placeholder="Mensaje.." required></textarea>
                        <button className="button-Contact"  type="submit" name="btn-submit">{(key) ?  <div className="loader"></div>:'Enviar' }</button> 
                    </form>

                </div>
            </div>
        </>
    )
}
