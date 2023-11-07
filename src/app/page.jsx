import Image from 'next/image'
import styles from './page.module.css'
import { Menu } from './components/menu'
import { Postagem } from "./components/postagem";
import { Header } from "./components/header"
import {Footer} from "./components/footer"




export default function Home(){
 
    return (
      <>
      <section><Header /></section>
     <div className='tudo'>
      <section className='section'> <Menu /></section> 
      

   
       <main className="pai">
      
         {<Postagem
           capaurl="https://i.pinimg.com/originals/25/79/6b/25796b0d4bc2fa3dda07947834a18436.jpg"
           musica= "Shape of you "
           subtitulo="Eden Sheeran (deluxe)"
         
         />}
         <Postagem
           capaurl="https://i.pinimg.com/originals/5f/ae/22/5fae22ab60a8ef9d238373b92517ed7b.jpg"
           musica= "Beliver"
           subtitulo= "Imagine dragon  (Evolve)"
           
         />
         <Postagem
           capaurl= "https://www.audiograma.com.br/wp-content/uploads/2014/12/neyo_nf.png"
           musica=  "She knows"
           subtitulo="NE-YO Non-fiction (Deluxe)"
         />
         <Postagem
           capaurl= "https://www.audiograma.com.br/wp-content/uploads/2014/12/neyo_nf.png"
           musica=  "She knows"
           subtitulo="NE-YO Non-fiction "
         />
   
          <Postagem
           capaurl= "https://www.audiograma.com.br/wp-content/uploads/2014/12/neyo_nf.png"
           musica=  "She knows"
           subtitulo="NE-YO Non-fiction (Premium)"
         />
      
       </main>
       </div>
   
       <Footer/>
       </>
     );
   }