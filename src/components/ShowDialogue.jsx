import { createPortal } from 'react-dom';
import ImagesGalerie from './ImagesGalerie';


const { forwardRef, useRef, useImperativeHandle } = require("react");

const ShowDialogue = forwardRef(
    function  ShowDialogue({title}, ref) {

        const dialog = useRef();

        useImperativeHandle(ref, () =>{
            return{
                open(){
                    dialog.current.showModal();
                }
            }
        })


        return createPortal(

            <dialog ref={dialog} className="show_dialog">
                <h1 className='show_dialog_title'>{title} </h1>

                <form method="dialog">

                <div className='galerie' >
                    <ImagesGalerie 
                    imgTitle="Salle de sérum" 
                    image="https://i.pinimg.com/564x/31/31/42/31314245e5a3438ee37ab875f49a9227.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Salle de sérum" 
                    image="https://i.pinimg.com/564x/a7/e5/c9/a7e5c9b896b20849104b21fe55bb1fc6.jpg"
                    />
                    <ImagesGalerie 
                    imgTitle="Salle d'accouchement" 
                    image="https://i.pinimg.com/564x/7d/0d/6c/7d0d6cc61650d981b022dc0b7e826546.jpg"
                    />
                    <ImagesGalerie 
                    imgTitle="Salle d'accouchement" 
                    image="https://i.pinimg.com/564x/56/10/b2/5610b25d3205a9b362975dc575b78df6.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Salle d'accouchement" 
                    image="https://i.pinimg.com/564x/cc/4c/d7/cc4cd7e276543baac0c07cc4d904be8d.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Bloc opératoire" 
                    image="https://i.pinimg.com/564x/96/b2/2b/96b22be6ecd8dea43ff0015f3c55b28c.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Bloc opératoire" 
                    image="https://i.pinimg.com/564x/2f/41/30/2f41300a85bb3c99f0aa81e8d3edf6c3.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Salle d'accueil" 
                    image="https://i.pinimg.com/564x/95/16/27/951627d30469c63383e95e7f4aeeb425.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Salle d'accueil"  
                    image="https://i.pinimg.com/564x/c0/95/a5/c095a5a52710be5afbad903b7a49da77.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Laboratoire" 
                    image="https://i.pinimg.com/564x/02/12/27/02122718968019956a89818b688311ca.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Laboratoire"  
                    image="https://i.pinimg.com/564x/40/65/0f/40650f20ac8377386833d33d2a067477.jpg" 
                    />
                    <ImagesGalerie 
                    imgTitle="Echographie bébé" 
                    image="https://i.pinimg.com/564x/3e/a9/26/3ea9263148cad20eac95ec51de9dfed1.jpg" 
                    />

                    <button> Fermer </button>

                </div>
                </form>
            </dialog>,
            document.getElementById('root')
        );
    }
)

export default ShowDialogue;