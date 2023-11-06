import Image from 'next/image'
import styles from './page.module.css'
import { Menu } from './components/menu'
import { Postagem } from "./components/postagem";
import { Header } from "./components/header"
import {Footer} from "./components/footer"
export default function Home() {
  return (
   <>
   <section><Header /></section>
    <section> <Menu /></section>
   <div className="container">
        <h1 className="header">playlist do spotify</h1>
    <main className="pai">
      {<Postagem
        capaurl="https://i.pinimg.com/originals/25/79/6b/25796b0d4bc2fa3dda07947834a18436.jpg"
        musica= "shape of you "
        subtitulo="Eden sheeran (deluxe)"
      
      />}
      <Postagem
        capaurl="https://i.pinimg.com/originals/5f/ae/22/5fae22ab60a8ef9d238373b92517ed7b.jpg"
        musica= "Beliver"
        subtitulo= "Imagine dragon  (Evolve)"
        
      />
      <Postagem
        capaurl= "https://www.audiograma.com.br/wp-content/uploads/2014/12/neyo_nf.png"
        musica=  "She knows"
        subtitulo="NE-YO Non-fiction (deluxe)"
      />
      <Postagem
        capaurl= "https://www.audiograma.com.br/wp-content/uploads/2014/12/neyo_nf.png"
        musica=  "She knows"
        subtitulo="NE-YO Non-fiction (deluxe)"
      />

       <Postagem
        capaurl= "https://www.audiograma.com.br/wp-content/uploads/2014/12/neyo_nf.png"
        musica=  "She knows"
        subtitulo="NE-YO Non-fiction (deluxe)"
      />
    
    </main>
    </div>
    <Footer/>
    </>
  );
}