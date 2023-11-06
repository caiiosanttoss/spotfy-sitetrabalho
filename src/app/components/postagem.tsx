import "./postagem.css";

interface PostagemProps {
musica    : string;
subtitulo : string;
capaurl   : string;
}

export function Postagem(props: PostagemProps) {
  return (

      <div className="capa-album">
        <div className="button">
            <div className="overlay">
               <button className="play-button">▶</button> 
            </div>
            <img className="img" src={props.capaurl}  />
        </div>
        
         <p className="postagem-footer"> 
             <span className="musica" >{props.musica}</span>
             <span className="subtitulo">{props.subtitulo}</span>
        </p>
     </div>
  );
}

