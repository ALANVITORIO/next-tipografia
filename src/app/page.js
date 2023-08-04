import Hero from 'src/app/componentes/Hero';
import TiposTipografia from './componentes/TiposTipografia';
import Descricao from './componentes/Descricao';
import Serifadas from './componentes/Serifadas';
import SemSerifas from './componentes/SemSerifas';

import Monospace from './componentes/Monospace';
import Display from './componentes/Display';
import Footer from './footer';

export default function Page() {
  return (
    <>
      <Hero />
      <TiposTipografia />
      <Descricao />
      <Serifadas />
      <SemSerifas />
      <Display />
      <Monospace />
      <Footer />
    </>
  );
}
