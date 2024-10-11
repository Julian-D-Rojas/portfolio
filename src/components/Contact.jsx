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
                        <input type="number" placeholder="Numero Telefónico" name="id" pattern="^[0-9]{1,20}$" />
                        <input type="mesagge" placeholder="Mensaje" />
                        <button className="button-Contact"  type="submit" name="btn-submit">{(key) ? 'Enviar' : <div className="loader"></div>}</button> 
                    </form>

                </div>
            </div>
        </>
    )
}
