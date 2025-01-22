import React from 'react';
import './Nosotros.css';

const Nosotros: React.FC = () => {
  return (
    <div className="nosotros-container">
      <h1 className="titulo-principal">Bienvenidos a NINIVE SACIFIA LABORATORIOS GRHESA</h1>

      <section className="seccion">
        <h2 className="subtitulo">Nuestra Historia</h2>
        <p>
        NINIVE SACIFIA, División Laboratorios GRHESA, es una empresa que desde el año 1954 se ha consolidado como una compañía de referencia en el ámbito de la agronomía a través de la elaboración y el fraccionamiento de productos de agroquímicos, fertilizantes y mejoradores de suelo para el cuidado de pequeños espacios verdes, jardines y huertas. GRHESA mantiene desde hace más de 50 los estándares de calidad, y sostiene una impecable trayectoria y permanencia en el mercado. Todo comenzó con la unión de tres profesionales ingenieros agrónomos y químicos, Graveloni, Heras y Sabbione, configurando la sigla GRHESA. Con el tiempo, la responsabilidad total de la empresa quedó en manos del Ing. Agr. Antonio A. Sabbione, quien sigue manteniendo los principios trazados desde los comienzos.Grhesa fue la primera empresa de su rubro en desarrollar y registrar, allá por el año 1956, el primer mata-babosas y caracoles, con la marca Babosil ® producto líder del mercado hasta nuestros días. En el mes julio del año 1972, la razón social pasa a denominarse NINIVE SACIFIA quedando todas las marcas registradas (Grhesa ®, Babosil ® , etc) dentro de la misma, posición que persiste hasta la actualidad.
        </p>
      </section>

      <section className="seccion">
        <h2 className="subtitulo">Nuestros Valores</h2>
        <p>En NINIVE GRHESA nos guiamos por principios sólidos que son la base de nuestra labor diaria:</p>
        <ul className="lista-valores">
          <li><strong>Compromiso con la Calidad:</strong> Nuestros productos son seleccionados...</li>
          <li><strong>Innovación:</strong> Estamos en constante búsqueda de soluciones innovadoras...</li>
          <li><strong>Responsabilidad Ambiental:</strong> Adoptamos prácticas responsables...</li>
          <li><strong>Ética y Transparencia:</strong> La confianza que depositan nuestros clientes...</li>
        </ul>
      </section>

      <section className="seccion">
        <h2 className="subtitulo">Metas y Proyectos</h2>
        <p>Nuestro objetivo es seguir liderando el mercado de productos para el jardín, a través de la ampliación de nuestra línea de productos y servicios. Estamos comprometidos en promover la sostenibilidad a través de: </p>
        <ul className="lista-metas">
          <li>La educación sobre jardinería responsable...</li>
          <li>La expansión de nuestros productos ecológicos...</li>
          <li>La innovación continua en el desarrollo de nuevas soluciones...</li>
        </ul>
      </section>

      <section className="seccion">
        <h2 className="subtitulo">Responsabilidad Ambiental</h2>
        <p>El respeto por el medio ambiente es una de nuestras prioridades. En GRHESA nos aseguramos de que todos nuestros productos y procesos estén alineados con las mejores prácticas ecológicas. Promovemos el uso responsable de agroquímicos y fertilizantes, con el objetivo de proteger nuestros ecosistemas y asegurar un futuro verde para las próximas generaciones. </p>
      </section>

      <section className="seccion">
        <h2 className="subtitulo">Años de Trayectoria y Liderazgo</h2>
        <p>
        Con más de 50 años  de experiencia en el mercado,nuestros clientes han sido testigo del crecimiento y evolución del sector agrícola y de jardinería, posicionándose como un referente en la venta de productos para el cuidado del jardín. Nuestra trayectoria nos ha permitido construir relaciones de confianza con nuestros clientes y colaboradores, y nos ha consolidado como líderes en innovación, calidad y responsabilidad. GRHESA la elección ideal para aquellos que buscan excelencia, compromiso y un enfoque sostenible en el cuidado de sus jardines, huertas y espacios verdes. Trabajamos día a día para hacer de cada proyecto una oportunidad de crecimiento y mejora, siempre con la naturaleza como nuestra guía. 
        </p>
      </section>
    </div>
  );
};

export default Nosotros;
