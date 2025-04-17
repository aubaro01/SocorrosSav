import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



export default function PageEx4() {


  const steps = [
    {
      id: 0,
      title: "Vídeo introdutório",
      content: (
        <>
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="https://drive.google.com/file/d/1Zgxj_U9-lCpL6SPoaAr-Uqs8jv1rVVtX/preview"
              title="Vídeo demonstrativo do exercício"
              allowFullScreen
              allow="autoplay"
              sandbox="allow-scripts allow-same-origin allow-forms"
            ></iframe>

          </div>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
            Assista ao vídeo.
          </p>
        </>
      ),
    },
    {
      id: 1,
      title: "Condições de Segurança",
      content: (
        <div className="row align-items-center">
            <div className="col-md-6">
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
              Comece por verificar se não existe perigo para si, para
              a vítima ou para terceiros. <br />
              Exemplo: <strong>tráfego, eletricidade,
              gás, derrocadas  ou outros.</strong>            
               </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/assets/sbv1.png"
                alt="Posição Inicial"
                className="img-fluid rounded"
                style={{ maxHeight: "350px", border: "3px solid #f39c12" }}
              />
            </div>
          </div>
      ),
    },
    {
      id: 2,
      title: "SBV - Vítima Respira",
      content: (
        <div className="row">
          <div className="col-md-12">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
              Para o suporte básico de vida de uma vítima que respira mas está inconsciente, tenha em atenção os seguintes passos:
            </p>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h4 className="text-warning mb-3">Passo 1 - Avaliar consciência</h4>
                  <ul className="fs-5 lh-lg text-light">
                    <li className="mb-2">
                      Coloque-se lateralmente em relação à vítima.
                      <br />
                      <em className="text-warning"> Abane os ombros e diga, por exemplo: “Está a me ouvir?” ou chame pelo nome "[nome da vítima]"</em>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/sbv2.png"
                    alt="Passo 1: Avaliar consciência"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4 align-items-center">

              <div className="col-md-6 order-md-1">
                <h4 style={{ color: "#f39c12", marginBottom: "1rem" }}>Passo 2 - Permeabilizar via aérea</h4>
                <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                  <li className="mb-2">Colocar a vítima em decúbito dorsal (deitada de costas).</li>
                  <li className="mb-2">Coloque a palma de uma mão sobre a testa da vítima.</li>
                  <li className="mb-2">Com a outra mão, posicione os dedos indicador e médio na parte inferior do queixo.</li>
                  <li className="mb-2">Incline suavemente a cabeça para trás e abra a boca.</li>
                </ul>
              </div>

              <div className="col-md-6 text-center order-md-2">
                <img
                  src="/assets/sbv3.png"
                  alt="Passo 2: Posicionar a vítima"
                  className="img-fluid rounded"
                  style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
                />
              </div>
            </div>
            <div className="alert alert-warning mt-4">
              <strong>Nota:</strong> Não realizar esta manobra se houver suspeita de traumatismo na coluna cervical.
            </div>

            <div className="step-card mb-4 p-3 rounded" style={{ backgroundColor: "rgba(209, 144, 39, 0.1)", borderLeft: "4px solid #f39c12" }}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h4 className="text-warning mb-3">Passo 3 - VOS</h4>
                  <ul className="fs-5 lh-lg text-light">
                    <li className="mb-2"><strong>V - Vêr</strong> os movimentos do torax</li>
                    <li className="mb-2"><strong>O - Ouvir</strong> os sons respiratórios</li>
                    <li lassName="mb-2"><strong>S - Sentir</strong> o ar expirado</li>
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    src="/assets/sbv4.png"
                    alt="Passo 1: Avaliar consciência"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
                <div className="alert alert-warning mt-4">
                  <strong>Nota:</strong> A execução do VOS não deve exceder os 10 segundos.
                  <br />
                  Se a vítima respira normalmente coloque-a em Posição Lateral de Segurança (PLS).
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "SBV - Vítima não respira",
      content: (
        <>
          <div className="row mb-5 align-items-center">
            <div className="col-md-6 order-md-1">
              <h4 className="mb-3" style={{ color: "#f39c12" }}>
                Passo 1 – Ligar 112
              </h4>
              <p className="text-break" style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef" }}>
                Caso a vítima não responda e não tenha a respiração normalizada, deve ativar de imediato o sistema de emergência médica, o 112.
              </p>
            </div>
            <div className="col-md-6 text-center order-md-2">
              <img
                src="/assets/emerNumber.png"
                alt="Passo 1: Ligar 112"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "250px", border: "3px solid #f39c12" }}
              />
            </div>
          </div>
          <div
            className="step-card mb-5 p-4 rounded shadow-sm"
            style={{
              backgroundColor: "rgba(209, 144, 39, 0.1)",
              borderLeft: "4px solid #f39c12"
            }}
          >
            <div className="row align-items-center">
              <div className="col-md-6">
                <h4 className="text-warning mb-4">
                  Passo 2 – Iniciar RCP (Paragem cardiorrespiratória)
                </h4>
                <ul className="fs-5 lh-lg text-light ps-3" style={{ listStyleType: "disc" }}>
                  <li>Posicionar-se ao lado da vítima;</li>
                  <li>Certificar-se de que está em decúbito dorsal (deitada de costas), sobre uma superfície firme e plana;</li>
                  <li>Afastar/remover as roupas que cobrem o tórax;</li>
                  <li>Posicionar-se verticalmente acima do tórax;</li>
                  <li>Colocar a base de uma mão no centro do tórax (zona intermamar);</li>
                  <li>Colocar a outra mão sobre a primeira entrelaçando os dedos;</li>
                  <li>Aplicar pressão sobre o esterno, entre 5–6 cm por compressão;</li>
                  <li>
                    Aplicar 30 compressões rítmicas a 100–120 compressões por minuto;
                    <br />
                    <em className="text-warning small"><strong>Nota: ajuda se contar em voz alta.</strong></em>
                  </li>
                  <li>No final de cada compressão, garantir a descompressão total sem tirar as mãos.</li>
                </ul>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="/assets/sbv6.png"
                  alt="Passo 2: Iniciar RCP"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "250px" }}
                />
              </div>
            </div>
          </div>
          <div className="alert alert-warning mt-4">
            <p className="mb-2">
              <strong>Nota:</strong> A cada 30 compressões deve ser feita
              <strong>
                <a href="#insuflacoes" className="text-decoration-none text-dark"> 2 insuflações.</a>
              </strong>
            </p>
            <p className="mb-0">
              Deve parar-se de executar quando:
            </p>
            <ul className="mt-2 mb-0 ps-3">
              <li>chegarem os técnicos de emergência médica e o substituírem;</li>
              <li>estiver fisicamente exausto(a);</li>
              <li>a vítima recomeçar a respirar normalmente.</li>
            </ul>
          </div>
        </>
      ),
    },

    {
      id: 3,
      title: "SBV - Insuflações",
      content: (
        <>
          <div className="row mb-4 align-items-center" id="insuflacões">
            <div className="col-md-6 order-md-1">
              <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
                Só deve ser executado caso tenha máscara ou se sinta confortável com o estado da vítima.
                <br />
                <ul style={{ paddingLeft: "1.2rem", margin: 0, listStyleType: "none" }}>
                  <li className="mb-2 text-break">Permeabilizar a via aérea</li>
                </ul>
              </p>
              <ul style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#e9ecef", marginBottom: "2rem" }}>
                <li className="mb-2 text-break"> Colocar a Colocar a máscara sobre o nariz e boca da vítima, criando uma selagem hermética;</li>
                <li className="mb-2">Colocar o polegar e o indicador na parte mais estreita da máscara;</li>
                <li className="mb-2">Colocar o polegar da outra mão na parte mais larga da máscara e usar os outros dedos para elevar o queixo da vítima.</li>
                <li className="mb-2">Insuflar sobre válvula de forma a que o tórax da vítima se eleve..</li>
              </ul>
            </div>
            <div className="col-md-6 text-center order-md-2">
              <img
                src="/assets/sbv8.png"
                alt="Passo 2: Posicionar a vítima"
                className="img-fluid rounded"
                style={{ maxHeight: "250px", border: "3px solid #f39c12" }} />
            </div>
          </div>
          <div className="alert alert-warning ">
            <strong>Nota:</strong> Caso a vítima volte a respirar, deve colocar em PLS (Posição Lateral de Segurança).
          </div>
        </>
      ),
    },

  ];
  return (
    <div className="exercise-page">
      <header className="py-4" style={{ backgroundColor: "#2c3e50", color: "#fff" }}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="m-0" style={{ fontSize: "1.8rem", fontWeight: "700" }}>S.A.V.</h1>
            <p className="mt-2 mb-0" style={{ fontSize: "1.1rem", color: "#ecf0f1" }}>
              Suporte Básico de Vida (SBV)
            </p>
          </div>
        </div>
      </header>

      <main className="container py-5">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "black", marginBottom: "1rem" }}>
            Suporte Básico de Vida
          </h2>
          <div
            className="mx-auto"
            style={{ width: "50px", height: "3px", backgroundColor: "#f39c12", marginBottom: "1.5rem" }}
          ></div>
          <p style={{ fontSize: "1.2rem", color: "black" }}>
            Lições para realizar SBV (Suporte Básico de Vida).
          </p>
        </div>

        {steps.map((step) => (
          <section key={step.id} className="mb-5 p-4 rounded" style={{ backgroundColor: "#343a40" }}>
            <div className="d-flex align-items-center mb-4">
              <div
                style={{
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#f39c12",
                  color: "#343a40",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginRight: "15px",
                }}
              >
                {step.id}
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  margin: 0,
                  color: "#ecf0f1",
                  borderLeft: "3px solid #f39c12",
                  paddingLeft: "15px",
                }}
              >
                {step.title}
              </h3>
            </div>
            {step.content}
          </section>
        ))}

        <section className="p-4 mb-5 rounded" style={{ backgroundColor: "#2c3e50", border: "1px solid rgba(255,255,255,0.1)" }}>
          <h4 style={{ fontSize: "1.2rem", fontWeight: "600", textAlign: "center", marginBottom: "1.5rem", color: "#ecf0f1" }}>
            Resumo
          </h4>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    minWidth: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f39c12",
                    color: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                  Avaliar as condições de segurança
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    minWidth: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f39c12",
                    color: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  2
                </div>
                <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                  Avaliar consciência da vítima
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    minWidth: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f39c12",
                    color: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  3
                </div>
                <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                  Permeabilizar via aérea
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    minWidth: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#f39c12",
                    color: "#2c3e50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                >
                  4
                </div>
                <p className="m-0" style={{ fontSize: "0.9rem", fontWeight: "400", color: "#ecf0f1" }}>
                  Realizar RCP (Paragem cardiorrespiratória)
                </p>
              </div>
            </div>
          </div>

        </section >
      </main >

      <footer className="border-top py-4" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="container text-center">
          <p style={{ fontSize: "0.9rem", color: "#757575" }}>
            © {new Date().getFullYear()} S.A.V. <br />Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div >
  );
}
