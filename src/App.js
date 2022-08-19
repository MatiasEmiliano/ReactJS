import './App.css'
import Componente from './Componentes/1-Componente'
import Propiedades from './Componentes/2-Props'
import Estado from './Componentes/3-Estados'
import RenderCondicional from './Componentes/4-RenderCondicional'
import RenderElementos from './Componentes/5-RenderElementos'
import {EventosES6, EventosES7, OtrosEventos, EventosPersonalizados} from './Componentes/6-Eventos y Binder'
import Padre from './Componentes/7-ComunicacionCompon'
import CicloVida from './Componentes/8-Ciclo de Vida'
import AjaxComponente from './Componentes/9-Ajax APIs'
import ContadorHooks from './Componentes/10-Hook -userState'
import ScrollHooks from './Componentes/11-Hook -ScrollHooks'
import RelojHooks from './Componentes/12-Hook useEffect'
import HooksAjax from './Componentes/13-Hook Ajax'
import Referencias from './Componentes/16-Referencias.js'
import Formulario from './Componentes/17-Formularios'
import Estilos from './Componentes/18-Estilos'
import MusicSearch from './Componentes/Buscador de Canciones/MusicSearch'
import CrudApi from './Componentes/Crud/CrudApi'
import SelectAnidados from './Componentes/Menus Anidados/SelectAnidados'
import ContactForm from './Componentes/Formulario/ContactForm'
import ChildrenProp from './Componentes/19-ChildrenProp'
import HooksCustoms from './Componentes/14-Hook Customs'
import Memo from './Componentes/19-Memorizacion'
import MyPage from './Componentes/Context/Dark-Light/MyPage'
import MyPageContext from './Componentes/Context/Dark-Light/MyPageContext'
import CruddAppContext from './Componentes/Context/CRUD con Context/CrudAppContext'

function App() {

  return (
    <div className="App">
    
{/*Componentes propios*/}

      {/* <Componente msj="Hola soy un componente"/>
      <hr/>
      <Propiedades cadena="Esto es una cadena de texto"
      numero={25} 
      bool={true} 
      arr={[1,2,3]} 
      obj={{name: 'John', apellido:'Smith'}} 
      func={(num)=>{return num*num}}
      elem={<i>Elemento</i>}
      compo={<Componente msj="Componente" />}
      />
      <hr/>
      <Estado />
      <RenderCondicional />
      <hr/>
      <RenderElementos />
      <hr/>
      <EventosES6 />
      <hr/>
      <EventosES7 />
      <hr/>
      <OtrosEventos />
      <hr/>
      <EventosPersonalizados />
      <hr/>
      <Padre />
      <hr/>
      <CicloVida />
      <hr/>
      <ContadorHooks />
      <hr/>
      <ScrollHooks />
      <hr/>
      <RelojHooks />
      <hr/>  
      <Referencias />
      <hr/>
      <Formulario />
      <hr />
      <Estilos />
      <MusicSearch />
      <CrudApi />
      <ContactForm />
      <ChildrenProp />
      <AjaxComponente />
      <HooksAjax />
      <HooksCustoms />
      <Memo />
      <MyPage />
      <MyPageContext/>
      <CruddAppContext/>*/}
      <SelectAnidados />
      
    </div>
  );
}

export default App;
