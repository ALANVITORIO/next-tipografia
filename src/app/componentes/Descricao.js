export default function Descricao() {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-4 box-shadow p-1 border">
          <h3>Serifada</h3>
          <div class="linha-separadora"></div>
          <ul className="list-unstyled">
            <li className="pt-2">
              <i class="bi bi-file-earmark-text"></i> As fontes serifadas têm
              pequenos remates nas pontas dos traços.
            </li>
            <li className="pt-2">
              <i class="bi bi-file-earmark-text"></i> Geralmente consideradas
              mais tradicionais e elegantes.
            </li>
            <li className="pt-2">
              <i class="bi bi-file-earmark-text "></i> Frequentemente usadas em
              textos longos.
            </li>
          </ul>
        </div>
        <div className="col-md-4 box-shadow p-1 border">
          <h3>Sem Serifa</h3>
          <div class="linha-separadora"></div>
          <ul className="list-unstyled">
            <li className="pt-2">
              <i class="bi bi-type"></i> As fontes sem serifas não têm remates
              nas pontas dos traços.
            </li>
            <li className="pt-2">
              <i class="bi bi-type"></i> Geralmente consideradas mais modernas e
              limpas.
            </li>
            <li className="pt-2">
              <i class="bi bi-type"></i> Frequentemente usadas em textos curtos
              e títulos.
            </li>
          </ul>
        </div>
        <div className="col-md-4 box-shadow p-1 border">
          <h3>Display</h3>
          <div class="linha-separadora"></div>
          <ul className="list-unstyled">
            <li className="pt-2">
              <i class="bi bi-tv"></i> As fontes display são fontes grandes e
              decorativas.
            </li>
            <li className="pt-2">
              <i class="bi bi-tv"></i> Geralmente usadas para chamar a atenção.
            </li>
            <li className="pt-2">
              <i class="bi bi-tv"></i> Criam um efeito visual forte.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
