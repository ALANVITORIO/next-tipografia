export default function TiposTipografia() {
  return (
    <section className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="tipostipografia.png"
            alt="Descrição da Imagem"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2 className="segunda mt-2">
            Existem vários tipos de tipografia, mas as mais comuns são:
          </h2>
          <h4 className="mt-4">
            <i class="bi bi-file-earmark-text"></i> Serifadas
          </h4>
          <h4>
            <i class="bi bi-type"></i> Sem Serifa
          </h4>
          <h4>
            <i class="bi bi-pen"></i> Script
          </h4>
          <h4>
            <i class="bi bi-tv"></i> Display
          </h4>
          <div className="mt-4">
            <p>
              A tipografia é o design, seleção e a organização de tipos de
              letras para criar um belo efeito visual, 90% da web é texto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
