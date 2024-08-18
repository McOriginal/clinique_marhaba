


function ImagesGalerie({imgTitle, image}){
    return(
        
           <div className="box_image">
           <h1>{imgTitle} </h1>
            <img src={image}  alt={imgTitle} />
           </div>
        
    );
}



export default ImagesGalerie;